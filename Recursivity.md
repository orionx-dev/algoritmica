# Ejercicios de Recursividad

## Búsqueda en un objeto

Escriba una función llamada `contains` que busque por un valor en un objeto anidado de múltiples niveles. Debe retornar `true` si es que el objeto contiene el valor dado.

```js
const haystack = {
  data: {
    informacion: {
      alguna: {
        cosa: {
          muy: {
            anidada: {
              numeroMagico: 33,
              otraCosa: 'foo2'
            }
          }
        },
        otraCosa: {
          noTanAnidada: 55
        }
      }
    }
  }
}

console.log(contains(haystack, 33)); // true
console.log(contains(haystack, "foo")); // false
console.log(contains(haystack, "foo2")); // true
console.log(contains(haystack, 55)); // true

```
