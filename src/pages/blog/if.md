---
layout: "../../layouts/PostLayout.astro"
title: "La Estructura If"
description: "Los 'if' son herramientas que permiten a los programas tomar decisiones basadas en condiciones establecidas."
pubDate: "Abril 2 2023"
heroImage: "/placeholder-hero.jpg"
topics: ['Programación']
draft: false
---

## ¿Qué es "if" en JavaScript y cómo funciona?

El operador "if" es una estructura de control de flujo en JavaScript que permite que el código tome decisiones basadas en una condición. En otras palabras, "if" permite que el programa realice ciertas acciones si se cumple una condición dada.

Veamos un ejemplo:
```
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

En este ejemplo, estamos utilizando "if" para comprobar si la variable "edad" es mayor o igual a 18. Si se cumple la condición, se ejecuta el primer bloque de código (en este caso, la consola mostrará "Eres mayor de edad"). Si no se cumple, se ejecutará el segundo bloque de código (la consola mostrará "Eres menor de edad").

## Estructura

Es importante tener en cuenta que, en JavaScript, el código que queremos que se ejecute si se cumple una condición debe estar encerrado entre llaves {}. Esto es lo que se conoce como un bloque de código.

Veamos un ejemplo:
```
let hora = 14;

if (hora < 12)
  console.log("Buenos días");
console.log("Hora actual: " + hora);
```
En este ejemplo, estamos utilizando "if" para comprobar si la variable "hora" es menor que 12. Si se cumple la condición, se ejecutará el primer bloque de código (la consola mostrará "Buenos días"). Sin embargo, la segunda línea de código (console.log("Hora actual: " + hora);) se ejecutará siempre, independientemente de si se cumple o no la condición del "if".

Para evitar este problema, debemos encerrar todas las líneas de código que queramos que se ejecuten si se cumple la condición entre llaves, como se muestra en el siguiente ejemplo:

```
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
  console.log("Hora actual: " + hora);
}
```

En este caso, si la hora es menor que 12, se ejecutarán ambas líneas de código que están dentro del bloque de código del "if".

Recuerda siempre usar llaves {} alrededor de los bloques de código en "if" para evitar confusiones en el código.


## Condiciones y operadores lógicos

En JavaScript, podemos establecer una variedad de condiciones utilizando diferentes operadores lógicos. Algunos de los más comunes son:

* Igualdad (==): comprueba si dos valores son iguales, sin tener en cuenta su tipo de dato.
* Estrictamente igual (===): comprueba si dos valores son iguales, teniendo en cuenta su tipo de dato.
* Desigualdad (!=): comprueba si dos valores no son iguales, sin tener en cuenta su tipo de dato.
* Estrictamente desigual (!==): comprueba si dos valores no son iguales, teniendo en cuenta su tipo de dato.
* Mayor que (>): comprueba si un valor es mayor que otro.
* Menor que (<): comprueba si un valor es menor que otro.
* Mayor o igual que (>=): comprueba si un valor es mayor o igual que otro.
* Menor o igual que (<=): comprueba si un valor es menor o igual que otro.

```
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
  console.log("num1 es mayor que num2");
} else if (num1 < num2) {
  console.log("num1 es menor que num2");
} else {
  console.log("num1 y num2 son iguales");
}
```

En este ejemplo, estamos utilizando los operadores lógicos "mayor que" y "menor que" para comparar las variables "num1" y "num2". Si "num1" es mayor que "num2", se ejecutará el primer bloque de código, si "num1" es menor que "num2", se ejecutará el segundo bloque de código, y si son iguales, se ejecutará el tercer bloque de código.



## El poder de los ifs anidados
Además de "if", en JavaScript también podemos utilizar "else". Esta estructura nos permite ejecutar un bloque de código en caso de que la condición del "if" no se cumpla.
```
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```
En este ejemplo, estamos utilizando "if" para comprobar si la variable "edad" es mayor o igual que 18. Si se cumple la condición, se ejecutará el primer bloque de código (la consola mostrará "Eres mayor de edad"). Si no se cumple la condición, se ejecutará el bloque de código del "else" (la consola mostrará "Eres menor de edad").

También podemos encadenar varias condiciones utilizando "else if". Por ejemplo:
```
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```
En este ejemplo, estamos comprobando si la variable "hora" es menor que 12. Si se cumple la condición, se ejecutará el primer bloque de código. Si no se cumple, se comprobará si "hora" es menor que 20. Si se cumple la segunda condición, se ejecutará el segundo bloque de código. Si no se cumple ninguna de las dos condiciones anteriores, se ejecutará el bloque de código del "else".


## Errores comunes y cómo evitarlos
En JavaScript, también podemos anidar "if" dentro de otros "if". Sin embargo, esto puede hacer que nuestro código sea más complejo y difícil de entender.
```
let nombre = "Juan";
let edad = 25;

if (nombre === "Juan") {
  if (edad >= 18) {
    console.log("Bienvenido, Juan. Eres mayor de edad");
  } else {
    console.log("Bienvenido, Juan. Eres menor de edad");
  }
} else {
  console.log("No eres Juan. No puedes entrar");
}
```
En JavaScript, los "if" pueden ser anidados para comprobar varias condiciones. Sin embargo, anidar demasiados "if" puede hacer que el código sea más complejo y difícil de leer. En el ejemplo proporcionado, primero comprobamos si la variable "nombre" es igual a "Juan" y luego, dentro de ese bloque, comprobamos si la variable "edad" es mayor o igual a 18. Si se cumplen las condiciones, se ejecutará el bloque de código correspondiente. En general, es recomendable evitar anidar demasiados "if" y tratar de escribir un código lo más sencillo y claro posible.

## Ejemplos prácticos de uso
Una vez que se ha entendido cómo funciona el operador "if" y se ha practicado su uso en algunos ejemplos sencillos, es hora de ver cómo se puede aplicar en situaciones más complejas. A continuación, se presentan algunos ejemplos prácticos del uso de "if" en diferentes situaciones y contextos.

Uno de los usos más comunes de "if" en una aplicación web es la validación de las entradas del usuario en un formulario. Por ejemplo, si un usuario envía un formulario sin completar un campo obligatorio, el código de validación puede utilizar "if" para comprobar si se ha introducido un valor en el campo correspondiente y mostrar un mensaje de error si no se ha hecho.

```
if (nombre === '') {
  alert('Por favor, introduce tu nombre.');
} else {
  alert('Todo OK!');
}
```

Este código utiliza "if" para comprobar si el valor de la variable "nombre" es una cadena vacía. Si es así, se muestra un mensaje de alerta pidiendo al usuario que introduzca su nombre. Si la variable "nombre" tiene algún valor, se muestra un mensaje de alerta diciendo "Todo OK!".