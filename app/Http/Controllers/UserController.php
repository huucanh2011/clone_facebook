<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser($id)
    {
        $user = User::findOrFail($id);
        $posts = Post::with('user', 'likes')->where('user_id', $id)->latest()->get();

        return response()->json([
            'user' => $user,
            'posts' => $posts
        ], 200);
    }
}
