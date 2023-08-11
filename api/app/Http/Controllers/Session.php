<?php

namespace App\Http\Controllers;

use Kreait\Firebase\Factory;

use Illuminate\Http\Request;

class Session
{
  
    public function create(Request $request)
    {
        $factory = (new Factory)->withServiceAccount('../firebase-config.json');
        
        // Obtenha a instância do Auth
        $auth = $factory->createAuth();

        // Autenticação com e-mail e senha
        $email =  $request->input('email');
        $password = $request->input('password');

        $signInResult = $auth->signInWithEmailAndPassword($email, $password);

        echo json_encode($signInResult->asTokenResponse());
    }

    public function destroy()
    {
        echo "<h1>Deletar Despesas</h1>";
    }

}
