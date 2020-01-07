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
        $like = Like::where('user_id', auth()->user()->id)->where('post_id', request()->post_id)->first();

        if(is_null($like)) {
            Like::create([
                'user_id' => auth()->user()->id,
                'post_id' => request()->post_id
            ]);
        } else {
            $like->delete();
        }

        return response()->json('Ok', 200);
    }
}
