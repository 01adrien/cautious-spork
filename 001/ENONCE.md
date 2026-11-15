# Défi 001 : Min Stack

**dates** : 15/11/2026 -> 22/11/2026 

**Proposé par** : Adrien 

**Source** : [LeetCode 155. Min Stack](https://leetcode.com/problems/min-stack/) (Medium)

## Énoncé

Concevoir une pile qui supporte les opérations `push`, `pop`, `top`, ainsi que la récupération de l'élément minimum, le tout en temps constant.

Implémenter la classe `MinStack` :

* `MinStack()` initialise l'objet pile.
* `void push(int value)` ajoute l'élément `value` sur la pile.
* `void pop()` retire l'élément au sommet de la pile.
* `int top()` renvoie l'élément au sommet de la pile.
* `int getMin()` renvoie l'élément minimum de la pile.

Chacune des fonctions doit avoir une complexité en temps de `O(1)`.

## Exemple

```
Entrée
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Sortie
[null,null,null,null,-3,null,0,-2]
```

Explication :

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // renvoie -3
minStack.pop();
minStack.top();    // renvoie 0
minStack.getMin(); // renvoie -2
```

## Contraintes

* `-2^31 <= val <= 2^31 - 1`
* Les méthodes `pop`, `top` et `getMin` sont toujours appelées sur une pile non vide.
* Au maximum `3 * 10^4` appels seront faits à `push`, `pop`, `top` et `getMin`.

## Pour aller plus loin (bonus, optionnel)

L'énoncé ne fixe aucune contrainte d'espace. Les éléments de la pile doivent de toute façon être stockés, donc l'espace total est au minimum en `O(n)`, avec `n` le nombre d'éléments présents dans la pile.

Ce qui peut varier d'une solution à l'autre, c'est la **mémoire supplémentaire** : celle utilisée pour gérer le minimum, en plus du stockage des éléments eux-mêmes.

Une fois votre solution validée, le défi bonus est de réduire cette mémoire supplémentaire au maximum, sans dépasser `O(1)` en temps pour chaque opération.

Pour comparer vos solutions, vous pouvez :

* exprimer la mémoire supplémentaire en notation `O(...)` dans le pire cas, en fonction de `n` ;
* la compter plus précisément en nombre d'entiers stockés en plus des éléments de la pile ;
* regarder si elle dépend de l'ordre dans lequel les valeurs sont empilées (par exemple valeurs croissantes, décroissantes, toutes identiques).