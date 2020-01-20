<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\LikeResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'image' => $this->image,
            'likes_count' => $this->likes->count(),
            'liked' => auth()->check() ? !! $this->likes->where('user_id', auth()->user()->id)->count() : false,
            'user' => new UserResource($this->whenLoaded('user')), 
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
