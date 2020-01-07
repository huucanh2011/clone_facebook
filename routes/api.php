<?php

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
});

Route::resources([
    'posts' => 'PostController',
]);

Route::get('profile/{id}', 'UserController@getUser');

Route::post('like', 'LikeController@like');