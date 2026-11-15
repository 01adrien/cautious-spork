# Algo de la semaine

Un défi d'algo par semaine, entre Adrien et Alexandre.

## Le principe

- **Fréquence** : un nouvel énoncé chaque dimanche soir.
- **Délai** : une semaine pour le résoudre, chacun de son côté (jusqu'au dimanche suivant).
- **Numérotation** : les défis sont numérotés à la suite à partir de 001.
- **Qui choisit ?** On alterne selon le numéro du défi :
  - numéro impair (001, 003, 005…) →  Adrien
  - numéro pair (002, 004, 006…)   →  Alexandre
- **Le choix du sujet** : quelque chose d'intéressant, qui sort un peu de l'ordinaire (une structure de données qu'on connaît mal, un algo classique qu'on n'a jamais codé, un problème piège, un truc cool…).
- **Le langage** : libre.

## Documenter 

Une solution qui marche, c'est bien. Une solution accompagnée de quelques lignes sur comment on y est arrivé et ce qu'on a appris, c'est mieux. Dans un fichier `NOTES.md`, on peut par exemple parler de :

- l'approche choisie
- la complexité en temps / en mémoire
- les pièges rencontrés
- les ressources utiles (articles, vidéos...)

## Organisation du repo

```
.
├── README.md
├── 001/
│   ├── ENONCE.md          # l'énoncé, posté par l'auteur du défi
│   ├── adrien/            # solution d'Adrien
│   │   ├── solution.xx
│   │   └── NOTES.md
│   └── alexandre/         # solution d'Alexandre
│       ├── solution.xx
│       └── NOTES.md
├── 002/
│   └── ...
└── ...
```

## Calculer le temps et l'espace
 
Pour pouvoir comparer nos solutions d'un défi à l'autre, on utilise tous les deux la même méthode.
 
- **Notation** : on exprime la complexité en notation `O(...)`, en fonction d'une taille `n` qu'on définit clairement à chaque défi (nombre d'éléments, longueur de la chaîne, nombre de sommets, etc.). S'il y a plusieurs tailles, on utilise plusieurs variables (`n`, `m`, ...).
- **Cas** : on indique le pire cas en priorité. On peut ajouter le cas moyen ou le meilleur cas quand c'est intéressant.
- **Temps** : on compte le nombre d'opérations élémentaires (comparaisons, accès, affectations) en fonction de `n`, sans se soucier des constantes. Pour une structure de données, on donne la complexité de chaque opération.
- **Espace** : on distingue deux choses :
  - l'**espace total**, qui inclut l'entrée et/ou les données stockées ;
  - l'**espace supplémentaire** (auxiliaire), c'est-à-dire la mémoire ajoutée par notre algorithme en plus de ce qu'il faut de toute façon stocker. C'est lui qu'on compare en priorité.
- **Pièges à ne pas oublier** : la pile d'appels d'une récursion compte dans l'espace, et les copies de tableaux ou de chaînes aussi.
