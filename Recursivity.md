# Ejercicios de Recursividad

## Búsqueda en un objeto

Escriba una función llamada `contains` que busque por un valor en un objeto anidado de múltiples niveles. Debe retornar `true` si es que el objeto contiene el valor dado.

**Restricciones:**
- El parámetro `needle` siempre será un número o un string.
- El objeto puede estar anidado en múltiples niveles, pero solo contendrá otros objetos o valores primitivos (no arrays).

```js
const contains = (haystack, needle) => {
  // Continue here
}

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

const haystackSimple = {
  uno: {
    dos: {
      tres: {
        cuatro: 'cuatro',
        cinco: 1234
      }
    }
  },
  seis: {
    siete: 'siete'
  }
}

console.log(contains(haystack, 33)); // true
console.log(contains(haystack, "foo")); // false
console.log(contains(haystack, "foo2")); // true
console.log(contains(haystack, 55)); // true

// Pruebas con haystackSimple
console.log(contains(haystackSimple, 'cuatro')); // true
console.log(contains(haystackSimple, 1234)); // true
console.log(contains(haystackSimple, 'siete')); // true
console.log(contains(haystackSimple, 'ocho')); // false
```

