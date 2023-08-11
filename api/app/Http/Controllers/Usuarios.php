<?php

namespace App\Http\Controllers;

use Kreait\Firebase\Factory;

use Illuminate\Http\Request;

class Usuarios
{
    public function index()
    {
        echo "<h1>Listar Usuarios</h1>";
    }
    
    public function create(Request $request) 
    {
        $factory = (new Factory)->withServiceAccount('../firebase-config.json');
    
        // Obtenha a instância do Auth
        $auth = $factory->createAuth();

        // Autenticação com e-mail e senha
        $userProperties = [
            'email' =>  $request->input('email'),
            'password' => $request->input('password'),
        ];

        $newUser = $auth->createUser($userProperties);
        echo json_encode($newUser);
    }

    public function show()
    {
        echo "<h1>Detalhes usuario</h1>";
    }

    public function edit()
    {
        echo "<h1>Editar usuario</h1>";
    }

    public function ban()
    {
        echo "<h1>Banir usuario</h1>";
    }

    public function destroy()
    {
        echo "<h1>Deletar usuario</h1>";
    }

}
