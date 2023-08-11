<?php

namespace App\Http\Controllers;

class Despesas
{
    public function index()
    {
        echo "<h1>Listar Despesas</h1>";
    }

    public function create()
    {
        echo "<h1>Nova Despesa</h1>";
    }

    public function show()
    {
        echo "<h1>Detalhes despesa</h1>";
    }

    public function edit()
    {
        echo "<h1>Editar Despesas</h1>";
    }

    public function destroy()
    {
        echo "<h1>Deletar Despesas</h1>";
    }

}
