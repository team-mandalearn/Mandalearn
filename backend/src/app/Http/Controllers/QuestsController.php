<?php

namespace App\Http\Controllers;

use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;

class QuestsController extends Controller
{
    public function getquests($curriculum)
    {

        // $curriculumを大文字に変換
        $curriculum = strtoupper($curriculum);

        $client = new \GuzzleHttp\Client();
        // curriculumパラメータをファイル名として利用
        $url = 'https://api.github.com/repos/APPRENTICE-jp/apprentice/contents/curriculum/' . $curriculum.'.md?ref=3rd';
        try {
            $response = $client->request('GET', $url, [
                'headers' => [
                    'Authorization' => 'Bearer ' . env('GITHUB_TOKEN'),
                    'Accept' => 'application/vnd.github.v3.raw',
                ],
            ]);
        
            // GitHubからマークダウンの生の内容を取得
            $markdown = $response->getBody()->getContents();

            // マークダウンの内容をそのまま返す
            return response($markdown, 200, [
                'Content-Type' => 'text/markdown; charset=UTF-8',
            ]);
        } catch (ClientException $e) {
            // エラーが発生したときのメッセージとリンクを設定
            $errorMarkdown = "カリキュラムが作成されていないようです。以下で確認してください。\n[APPRENTICE-jp/apprentice GitHub](https://github.com/APPRENTICE-jp/apprentice/tree/3rd)";

            return response($errorMarkdown, 404, [
                'Content-Type' => 'text/markdown; charset=UTF-8',
            ]);
        }
    }
}
