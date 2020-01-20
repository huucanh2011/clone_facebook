<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['index']]);
    }

    public function index()
    {
        return PostResource::collection(
            Post::with('user')->latest()->get()
        );
    }

    public function store()
    {
        request()->validate([
            'content' => 'required|string',
        ]);

        $post = Post::create([
            'content' => request()->content,
            'user_id' => auth()->user()->id
        ]);

        $this->storeImage($post);

        return response()->json(new PostResource($post->load('user')), 201);
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        if ($post->user_id !== auth()->user()->id) {
            return response()->json('Unauthorized', 401);
        }

        $post->update($this->validateRequest());

        $this->storeImage($post);

        return response()->json(Post::with('user', 'likes')->findOrFail($post->id), 200);
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        if ($post->user_id !== auth()->user()->id) {
            return response()->json('Unauthorized', 401);
        }

        $post->delete();

        return response()->json('Deleted post', 200);
    }

    private function validateRequest() {
        return request()-validate([
            'content' => 'required|string',
        ]);
    }

    private function storeImage($post) {
        if(request()->has('image')) {
            $post->update([
                'image' => request()->image->store('uploads', 'public'),
            ]);

            $image = Image::make(public_path('storage/' . $post->image))->fit(600, 400);
            $image->save();
        }
    }
}
