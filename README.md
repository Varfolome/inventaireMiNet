# inventaireMiNet

## Frontend (en utilisant Angular)

C'est le frontend de l'inventaire Minet fait avec Angular. Vous trouverez si-dessous le menu permettant accéder à differentes parties de ce projet.

## Menu

* [Les téchnologies utilisés](#téchnologies)
* [Intro rapide dans Angular](#introrapide)
* [Architecture](#architecture)

## Les téchnologies utilisés
### Angular
Vous devez installer le [NodeJS](https://nodejs.org/en/) d'abord. Après vérifiez si Node est bien installé et installer Angular en utilisant respectivement les 3 commandes suivantes

```bash
node -v
npm -v
npm install -g @angular/cli
```
### [HTML et CSS](http://fr.html.net/)
### [Typescript](https://www.typescriptlang.org/)
Vous povez toujours lire des tutoriels [là](https://angular.io/tutorial/toh-pt1).

## Intro rapide dans Angular

### Explication

Cette explication est basée sur mon propre éxperience et peut être imprecis. Angular utilise Typescript au lieu de JavaScript. Chaque fois que vous écrivez un programme, il est compilé ou, plutôt, transpilé en JS. A la fin vous aurez la structure standarte de page web (un html, un css et les scripts), c'est pour ça que le code final de projet est illisible. On verra comment créer un projet Angular et rajouter des modules, ainsi que l'architecture de projet inventaireMiNet et le code de ce projet.

### Créer le projet

Choisissez votre fichier avec le projet et executer la commande suivante

```bash
ng new nom_de_projet
```
