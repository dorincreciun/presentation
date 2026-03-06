# Prezentări — Florărie & Gym

Două site-uri statice într-un singur repo, publicate ca pagini separate pe GitHub Pages.

## Activează GitHub Pages (o singură dată)

1. Repo → **Settings** → **Pages**
2. La **Build and deployment** → **Source**: alege **Deploy from a branch**
3. **Branch**: selectează `gh-pages`, folder **/ (root)**
4. Salvează (Save)

La primul push pe `main`, workflow-ul creează branch-ul `gh-pages`; după ce apare, repetă pașii 2–3 dacă nu vezi încă `gh-pages` în listă.

## După fiecare push pe `main`

Workflow-ul publică conținutul pe branch-ul `gh-pages` și Pages îl afișează.

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
