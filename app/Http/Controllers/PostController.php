<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['index']]);
    }

    public function index()
    {
        $posts = Post::with('user')->latest()->get();

        return $posts;
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        //chưa xử lý up ảnh
        $post = Post::create([
            'content' => $request->content,
            'user_id' => auth()->user()->id
        ]);

        return response()->json(Post::with('user')->findOrFail($post->id), 201);
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        if ($post->user_id !== auth()->user()->id) {
            return response()->json('Unauthorized', 401);
        }

        $data = $request->validate([
            'content' => 'required|string',
        ]);

        $post->update($data);

        return response()->json(Post::with('user')->findOrFail($post->id), 200);
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
}
