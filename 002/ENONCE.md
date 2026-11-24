# Défi 002 : Best Time to Buy and Sell Stock

**dates** : 22/11/2026 -> 29/11/2026 

**Proposé par** : Alexandre 

**Source** : [LeetCode 121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (Easy)

## Énoncé

On vous donne un tableau `prices` où `prices[i]` est le prix d'une action donnée le `i`-ème jour.

Vous voulez maximiser votre profit en choisissant un seul jour pour acheter une action, et un autre jour, dans le futur, pour la vendre.

Renvoyer le profit maximum que vous pouvez réaliser avec cette transaction. Si aucun profit n'est possible, renvoyer `0`.

## Exemples

### Exemple 1

```
Entrée : prices = [7,1,5,3,6,4]
Sortie : 5
```

Explication : acheter le jour 2 (prix = 1) et vendre le jour 5 (prix = 6), profit = 6 - 1 = 5.

Attention : acheter le jour 2 et vendre le jour 1 n'est pas autorisé, car il faut acheter avant de vendre.

### Exemple 2

```
Entrée : prices = [7,6,4,3,1]
Sortie : 0
```

Explication : dans ce cas, aucune transaction n'est faite et le profit maximum est 0.

## Contraintes

* `1 <= prices.length <= 10^5`
* `0 <= prices[i] <= 10^4`
