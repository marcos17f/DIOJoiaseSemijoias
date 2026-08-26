# DIO Joias & Semijoias — redesign visual

Site estático (HTML/CSS/JS puro, sem build) reproduzindo a estrutura atual da loja
(https://dio-joiase-semijoias.vercel.app/) com 4 melhorias visuais:

1. Ícones lineares dos cards de categoria e produto trocados por fotografia still-life.
2. Hero com imagem de fundo em tela cheia (antes: 3 blocos sobre gradiente).
3. Wordmark serifado "Dio Joias & Semijoias" reforçado no header/footer; monograma "DIO"
   mantido como versão reduzida (favicon/mobile).
4. Menu, categorias, preços, faixa de preço, avaliações, newsletter, WhatsApp e barra de
   benefícios mantidos sem alteração de conteúdo ou estrutura.

## ⚠️ Imagens são placeholders

Todas as fotos de still-life (cards de categoria, cards de produto e o hero) são fotos
de banco de imagens (Unsplash, uso livre) usadas **apenas para preencher o layout**.
Elas **não são fotos reais das peças da DIO** — troque cada uma pelas fotos reais do
ateliê antes de publicar.

As fotos ficam salvas localmente em `assets/products/*.jpg` e `assets/hero.jpg` (não são
mais links remotos) — o site funciona 100% offline, sem depender de internet. Pra trocar
por uma foto real, basta substituir o arquivo `.jpg` correspondente mantendo o mesmo nome,
ou apontar o `src` da tag `<img>` (em `index.html`) pro novo arquivo, mantendo o mesmo
`alt` e proporção (cards de categoria são 3:4, cards de produto são 1:1, hero é wide).

Como o banco de imagens grátis tem poucas fotos de still-life de prata/moissanite em
fundo escuro que realmente combinam com a marca, **algumas fotos se repetem em vários
cards** (ex.: o mesmo pingente prateado aparece em quase todos os cards de "colar" e
"choker"). Isso é só para preencher o layout — ao trocar pelas fotos reais, cada peça
deve ganhar sua própria foto.

## Rodar localmente

Não precisa de build. Basta abrir `index.html` no navegador, ou servir a pasta com
qualquer servidor estático:

```
npx serve .
```

## Subir pro Git + Vercel

```
git init
git add .
git commit -m "Redesign visual DIO Joias"
git remote add origin <url-do-seu-repo>
git push -u origin main
```

Na Vercel: "Add New Project" → importar o repositório → framework preset "Other"
(site estático) → Deploy. Não precisa configurar build command nem output directory.
