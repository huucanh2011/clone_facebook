<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class UserController extends Controller
{
    public function getUser($id)
    {
        $user = User::findOrFail($id);
        $posts = PostResource::collection(
            Post::with(['user', 'likes'])->where('user_id', $id)->latest()->get()
        );

        return response()->json([
            'user' => $user,
            'posts' => $posts
        ], 200);
    }
}
