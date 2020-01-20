<?php

namespace App\Http\Controllers;

use App\Like;
use App\Post;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function like()
    {
        Like::create([
            'user_id' => auth()->user()->id,
            'post_id' => request()->post_id
        ]);

        return response()->json('Liked', 200);
    }

    public function unlike()
    {
        $like = Like::where('user_id', auth()->user()->id)->where('post_id', request()->post_id)->first();
        $like->delete();

        return response()->json('Unliked', 200);
    }
}
