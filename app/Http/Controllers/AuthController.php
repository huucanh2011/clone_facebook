<?php

namespace App\Http\Controllers;

use App\User;
use App\Like;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;
use Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login', 'register']]);
    }

    public function login() {
        $credentials = request(['email', 'password']);
        
        $validator = Validator::make($credentials, [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Wrong email or password'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password'))
        ]);

        return response()->json(['message' => 'Register successfully!'], 200);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function me()
    {
        $token = JWTAuth::fromUser(auth()->user());

        return $this->respondWithToken($token);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => User::with('likes')->where('id', auth()->user()->id)->first(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
