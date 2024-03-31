<?php

namespace App\Http\Controllers;

use App\Models\Daily_log;
use App\Models\User;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function store(Request $req)
    {
        $jsonData=$req->json()->all();
        $email = $jsonData['post']['email'];
        $user = User::where('email', $email)->first();
        $userId=$user->id;
        $comment=$jsonData['post']['comment'];
        $time=$jsonData['post']['time'];
        $quest=$jsonData['post']['quest'];
        $dailyLog=Daily_log::create([
            'comment'=>$comment,
            'time'=>$time,
            'user_id'=>$userId,
            'quest'=>$quest
        ]);
        return response()->json($dailyLog);
    }
}