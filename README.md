# 🤖 Robot Discord

Un bot Discord haute performance, entièrement typé en **TypeScript**, utilisant **Prisma ORM** pour une gestion fluide de la base de données **MariaDB**.

## 🚀 Fonctionnalités

* **Architecture Modulaire** : Handlers de commandes et d'événements automatisés avec support des sous-dossiers.
* **Déploiement Hybride** : Script indépendant pour le déploiement des commandes (Local/Global) via l'API Discord.
* **Base de Données Robuste** : Intégration **MariaDB** via **Prisma ORM** avec génération de types personnalisée.
* **Typage Strict** : Développement sous **TypeScript** avec un `ExtendedClient` sur mesure et un linting rigoureux via **ESLint** (Flat Config).

---

## 🛠️ Installation

### 1. Prérequis
* [Node.js](https://nodejs.org/) v24.13.0 ou supérieur (pour le support natif de `--env-file`).
* [pnpm](https://pnpm.io/) (recommandé) ou npm/yarn.
* Une instance de serveur [MariaDB](https://mariadb.org/).

### 2. Clonage et dépendances
```bash
git clone [https://github.com/votre-pseudo/votre-depot.git](https://github.com/votre-pseudo/votre-depot.git)
cd votre-depot
pnpm install
```

### 3. Configuration de l'environnement
Créez un fichier .env à la racine :
```bash
DISCORD_TOKEN="votre_token"
CLIENT_ID="votre_client_id"
GUILD_ID="votre_guild_id"
DATABASE_URL="mysql://user:password@localhost:3306/nom_db"
```

### 4. Base de données (Prisma)
Synchronisez votre schéma avec votre base MariaDB existante :
```bash
pnpm db:pull
pnpm db:gen
```

## Structure du projet
```text
.
├── dist/                 # Code compilé du robot pour l'exécution en production
├── Docker/
│   └── Dockerfile        # Fichier de création de l'image Docker pour le robot
├── logs/                 # Répertoire de toutes les logs du robot
├── prisma/               # Schéma de la base de données
│   └── schema.prisma
├── src/
│   ├── commands/         # Commandes Slash (ex: /info/ping.ts)
|   |   ├── admin/
|   |   |   └── init.ts
|   |   ├── info/
|   |   |   ├── search.ts
|   |   |   └──ping.ts
|   |   └── users/
|   |   |   └── config_profil.ts
|   |   |   └── profil.ts
│   ├── events/           # Événements Discord (ex: /client/ready.ts)
|   |   ├── client/
|   |   |   └── ready.ts
|   |   ├── interactions/
|   |   |   └── interactionCreate.ts
│   ├── structures/       # Classes étendues
|   |   └── ExtendedClient.ts
│   ├── types/            # Définitions TypeScript et augmentation de modules
|   |   ├── discord.d.ts
|   |   └── index.ts
│   ├── utils/            # Utilitaires et modèles
│   |   ├── anilist/      # Tout ce qui concerne l'API AniList
|   |   |   ├── embeds.ts
|   |   |   ├── index.ts
|   |   |   ├── query.ts
|   |   |   └── types.ts
│   |   ├── database.ts
│   |   ├── dataManager.ts
│   |   ├── guildGuard.ts
│   |   ├── logger.ts
│   |   ├── siteConfig.ts
|   |   └── templates.ts
│   ├── config.ts         # Configuration centrale du bot
│   ├── deploy.ts         # Script de déploiement vers l'API Discord
│   └── index.ts          # Point d'entrée de l'application
├── .dockerignore         # Fichiers et répertoires ignorés lors de la compilation en image Docker
├── .env.example          # Fichier d'exemple avec les variables d'environnement nécessaires au robot à compléter
├── .gitignore            # Fichiers et répertoires ignorés lors du déploiement
├── .npmrc                # Configuration du gestionnaire de paquets, rendre accessible Prisma à la racine de node_modules
├── docker-compose.yml    # Création du conteneur Docker
├── eslint.config.js      # Configuration ESLint (Flat Config)
├── package.json          # Scripts pnpm et dépendances
├── pnpm-lock.yaml        # Configuration des versions des paquets et de leur intégrité
├── prisma.config.ts      # Fichier de configuration de Prisma
└── tsconfig.json         # Configuration du compilateur TypeScript
```

## Scripts disponibles
| Commande           | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| pnpm dev           | Lance le robot en mode développement avec `tsx watch`.                           |
| pnpm deploy:local  | Déploie les commandes uniquement sur votre serveur de test.                      |
| pnpm deploy:global | Déploie les commandes sur l'ensemble de l'API Discord.                           |
| pnpm build         | Compile le projet en JavaScript dans le dossier `/dist`.                         |
| pnpm start         | Lance le robot compilé en production.                                            |
| pnpm db:pull       | Introspection de la base de données MariaDB.                                     |
| pnpm db:gen        | Génération du schéma Prisma de la base de données MariaDB.                       |
| pnpm lint          | Analyse le code et liste les erreurs.                                            |
| pnpm lint:fix      | Essaie de corriger automatiquement les erreurs de formatage ou de style simples. |

## License
Projet distribué sous la licence GPL-3.0. Voir le fichier `LICENCE` pour plus d'informations.