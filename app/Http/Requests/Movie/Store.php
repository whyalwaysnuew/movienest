<?php

namespace App\Http\Requests\Movie;

use Auth;
use App\Models\Movie;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'unique:'.Movie::class],
            'category' => ['required', 'string'],
            'video_url' => ['required', 'active_url'],
            'thumbnail' => ['required', 'image', 'mimes:png,jpg,jpeg'],
            'rating' => ['required', 'numeric', 'gte:0', 'max:10'],
            'is_featured' => ['nullable']
        ];
    }
}
