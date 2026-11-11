# ES Appz

Site institucional da ES Appz. Apresenta o Cozy Arrowz, o Congrega e os próximos projetos, e disponibiliza a declaração de publicidade usada pelo AdMob.

## Publicação

O endereço principal é https://eswareapps.web.app/, publicado no Firebase Hosting do projeto `eswareapps`.

O Firebase serve os ficheiros da pasta `public/`. A raiz do repositório mantém uma cópia do site e do `app-ads.txt` para o GitHub Pages, caso essa publicação também seja utilizada.

Para publicar uma atualização no Firebase Hosting, com a Firebase CLI autenticada na conta certa, executar:

```powershell
firebase deploy --only hosting --project eswareapps
```

Para testar localmente a versão que será publicada:

```powershell
py -m http.server 8000 --directory public
```

Depois, abrir http://localhost:8000/ no navegador.

## Declaração de publicidade

O ficheiro `public/app-ads.txt` deve manter o mesmo conteúdo de `app-ads.txt` na raiz. Depois da publicação, pode ser consultado em https://eswareapps.web.app/app-ads.txt. O `public/robots.txt` permite a indexação do site e a consulta desse ficheiro.

## Estrutura

- `index.html` e `assets/`: versão mantida na raiz para o GitHub Pages.
- `public/`: versão publicada pelo Firebase Hosting, incluindo os recursos estáticos e o `app-ads.txt`.
- `.firebaserc` e `firebase.json`: associação ao projeto Firebase e configuração do Hosting.

O site usa HTML, CSS e JavaScript estáticos. Não precisa de um processo de build.
