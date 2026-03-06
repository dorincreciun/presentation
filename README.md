# Prezentări — Florărie & Gym

Două site-uri statice într-un singur repo, publicate ca pagini separate pe GitHub Pages.

## Activate GitHub Pages (o singură dată)

1. Repo → **Settings** → **Pages**
2. La **Build and deployment** → **Source**: alege **GitHub Actions**
3. Salvează

## După fiecare push pe `main`

Workflow-ul `Deploy to GitHub Pages` rulează și actualizează site-ul.

## URL-uri

După deploy (înlocuiește `USER` și `REPO` cu numele tău de user și al repo-ului):

| Pagină   | URL |
|----------|-----|
| Portal   | `https://USER.github.io/REPO/` |
| Florărie | `https://USER.github.io/REPO/florarie/` |
| Gym      | `https://USER.github.io/REPO/gym/` |

Exemplu: dacă repo-ul e `https://github.com/ionprezentari/presentation`, atunci:
- Florărie: **https://ionprezentari.github.io/presentation/florarie/**
- Gym: **https://ionprezentari.github.io/presentation/gym/**

## Structură repo

```
presentation/
├── .github/workflows/deploy-pages.yml   # CI/CD
├── index.html                           # Portal cu linkuri către cele 2 proiecte
├── florarie/                            # Site florărie (e-commerce)
│   ├── index.html
│   ├── galerie.html
│   ├── despre-noi.html
│   ├── contact.html
│   ├── css/
│   └── js/
└── gym/                                 # Site sală de sport
    ├── index.html
    ├── abonamente.html
    ├── program.html
    ├── despre-noi.html
    ├── contact.html
    ├── css/
    └── js/
```
