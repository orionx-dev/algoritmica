# Primer Duplicado

Dado un arreglo `a` que contiene sólo numeros en el rango de `1` a `a.length`, encuentre el primer **número** duplicado para el cual la segunda ocurrencia tiene el mínimo índice. En otras palabras, si hay más de un número duplicado, se debe retornar el número duplicado que tenga su segunda ocurrencia en un índice menor. Si no hay tales elementos, retorne `-1`.

## Ejemplos

- Para `a = [2, 1, 3, 5, 3, 2]`, el output debería ser `firstDuplicate(a) = 3`.

  Hay 2 duplicados: numeros 2 y 3. La segunda ocurrencia de 3 tiene un índice menor que la segunda ocurrencia de 2, entonces la respuesta es 3.


- Para `a = [2, 4, 3, 5, 1]`, el output debería ser `firstDuplicate(a) = -1`


## Input / Output (Entrada y salida)

- **[Input] array.integer a**

  *Restricciones garantizadas*
  
  `1 <= a.length <= 10^5`

  `1 <= a[i] <= a.length`

- **[output] integer**

  El elemento en `a` que se aparece más de una vez en el arreglo y tiene el índice menor para su segunda ocurrencia. Si no hay tal elemento, retornar `-1`

## Conjunto de prueba

`a = [2, 1, 3, 5, 3, 2] // 3`

`a = [2, 4, 3, 5, 1] // -1`

`a = [1] // -1`

`a = [2, 2] // 2`

`a = [2, 1] // -1`

`a = [2, 1, 3] // -1`

`a = [2, 3, 3] // 3`

`a = [3, 3, 3] // 3`

`a = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8] // 6`

`a = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3] // -1`

`a = [1, 1, 2, 2, 1] // 1`
