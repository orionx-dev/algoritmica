# Ejercicios de Recursividad

## Búsqueda en un objeto

Escriba una función llamada `contiene` que busque por un valor en un objeto anidado de múltiples niveles. Debe retornar `true` si es que el objeto contiene el valor dado.

```js
const objetoAnidado = {
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

const loContiene = contiene(objetoAnidado, 33); // true
const noLoContiene = contiene(objetoAnidado, "foo"); // false
```