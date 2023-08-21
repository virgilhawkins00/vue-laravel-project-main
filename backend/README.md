## Configurar

Coloque o arquivo firebase_credentials.json na raiz do repositorio e configure as variaveis de ambiente

Em config/firebase.php na linha

```
    'default' => env('FIREBASE_PROJECT', 'app'),
    # substitua app pelo nome do seu projeto no firebase
```
