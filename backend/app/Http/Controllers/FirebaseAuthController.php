<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;


class FirebaseAuthController extends Controller
{

    protected $auth;
    public function __construct()
    {
        $this->auth = Firebase::auth();
    }

    public function create(Request $request){

        $userProperties = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        $response = $this->auth->createUser($userProperties);

        $this->auth->sendEmailVerificationLink($userProperties['email']);
        return json_encode($response, JSON_PRETTY_PRINT);
    }

    public function auth(Request $request){

        $email = $request->input('email');
        $password = $request->input('password');

        $signInResult = $this->auth->signInWithEmailAndPassword($email, $password);

        $tokenResponse = [
            'token_type' => 'Bearer',
            'access_token' => $signInResult->accessToken(),
            'id_token' => $signInResult->idToken(),
            'refresh_token' => $signInResult->refreshToken(),
            'expires_in' => 3600,
        ];

        return json_encode($tokenResponse, JSON_PRETTY_PRINT);
    }

}
