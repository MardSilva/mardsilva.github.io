# Eymard Silva · Portfólio

Site pessoal de Eymard Silva, engenheiro de software focado em desenvolvimento backend, arquitetura .NET e integração de sistemas.

## GitHub Pages

O portfólio é estático e não precisa de um processo de build. No repositório `MardSilva/mardsilva.github.io`, configura o GitHub Pages para publicar a branch `main` a partir da pasta `/ (root)`.

O endereço esperado é:

```text
https://mardsilva.github.io/
```

A página usa HTML, CSS e JavaScript. As fotografias e os elementos gráficos ficam em `assets/`.

## Firebase Hosting da ES Appz

A pasta `public/` continua a conter o site institucional da ES Appz e é a origem do Firebase Hosting do projeto `eswareapps`. A publicação do portfólio no GitHub Pages não altera esse site.

Para atualizar o site da ES Appz, com a Firebase CLI autenticada na conta certa, executa:

```powershell
firebase deploy --only hosting --project eswareapps
```

Para testar localmente a versão servida pelo Firebase:

```powershell
py -m http.server 8000 --directory public
```

Depois, abre `http://localhost:8000/` no navegador.

## Declaração de publicidade

O ficheiro `public/app-ads.txt` deve manter o mesmo conteúdo de `app-ads.txt` na raiz. Depois da publicação, fica disponível em `https://eswareapps.web.app/app-ads.txt`. O `public/robots.txt` permite a indexação do site e a consulta desse ficheiro.

## Atualizações do Cozy Arrowz

O manifesto público de atualizações do Cozy Arrowz fica em `cozy-arrowz/update.json` e será servido pelo GitHub Pages em:

```text
https://mardsilva.github.io/cozy-arrowz/update.json
```

Sempre que uma nova release do Cozy Arrowz for preparada, atualizar este ficheiro com a versão, o número de build Android, o rótulo apresentado no histórico, a data e as notas nos três idiomas suportados. O campo `minimumSupportedBuildNumber` deve ficar dois builds atrás do mais recente. A aplicação deve comparar os números de build (`versionCode`), porque várias edições podem partilhar a mesma versão pública, como acontece com `0.2.0`.

A aplicação pode interpretar os campos desta forma:

- Build instalado abaixo de `minimumSupportedBuildNumber`: atualização obrigatória.
- Build instalado entre o mínimo e `latestRelease.buildNumber`: atualização disponível, mas opcional.
- Build instalado igual ou superior a `latestRelease.buildNumber`: aplicação atualizada.

No manifesto inicial, o build mais recente é `17` e o mínimo suportado é `15`. Assim, os builds `15` e `16` continuam aceites; o build `14` ou anterior exige atualização.

O campo `storeUrl` abre a página do Cozy Arrowz na Google Play. Durante o teste fechado, a instalação ou atualização continua dependente de a conta ter acesso ao teste.

## Estrutura

- `index.html` e `assets/`: portfólio pessoal servido pelo GitHub Pages.
- `public/`: site institucional da ES Appz servido pelo Firebase Hosting.
- `cozy-arrowz/update.json`: manifesto de atualizações do Cozy Arrowz, servido pelo GitHub Pages.
- `.firebaserc` e `firebase.json`: associação e configuração do Firebase Hosting.
- `app-ads.txt` e `public/app-ads.txt`: declaração de publicidade da ES Appz.
