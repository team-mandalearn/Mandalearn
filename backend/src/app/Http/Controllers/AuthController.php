<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\Language;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function login(Request $req)
  {
    $email = $req->email;
    $user = User::where('email', $email)->first();
    return response()->json($user);
  }

  public function register(Request $req)
  {
    $jsonData = $req->json()->all();
    $email = $jsonData['user']['email'];
    $post_schedule = $jsonData['user']['post_schedule'];
    $language_id = $jsonData['user']['language_id'];
    $generation = $jsonData['user']['generaion'];
    $user = User::create([
      'email' => $email,
      'post_schedule' => $post_schedule,
      'language_id' => $language_id,
      'generation' => $generation,
    ]);
    $language = Language::find($language_id);
    $user['language'] = $language->name;
    return response()->json([
      'user' => $user
    ]);
  }
}
