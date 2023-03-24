---
layout: "../../layouts/PostLayout.astro"
title: "Variables"
description: "Una variable es una caja donde podemos almacenar valores, y así utilizarlos o modificarlos cuando nos haga falta"
pubDate: "Marzo 24 2023"
heroImage: "/placeholder-hero.jpg"
topics: ['Programación']
draft: false
---

## ¿Qué son las variables?

Las variables son los bloques fundamentales que aparecen en todos los programas y se usan para cualquier cosa que tenga que ver ocn programación. Es uno de los fundamentos de la programación y por eso, es este post, vamos a entenderlas, crearlas y ver como podemos utilizarlas para nuestro beneficio.

Vidas en un videojuego, la posición de nuestro personaje, el dinero de tu cuenta bancaria, tu nombre el los registros del gobierno, albolutamente con todos los campos que te puedas imaginar de ese tipo se trabaja con variables. 

Las variables no son más que una forma en la que podemos guardar un valor, ya sea un numero, un texto en una palabra. HAcer que una palabra, al nosotros mencionarla podamos obtener el valor de ese número o lo que sea que tengamos dentro para cualquier cosa que necesitemos. A lo mejor una de las formas en las que ya has trabajado con variables ha sido si has dadno álgebra en clase. PERO QU ENO CUNDA EL PÁNICO.  

Unos de los ejemplos que se ven más claros son los siguientes:
```
a = 2
b = 3
c = a - b
```

En este caso estamos utilizando 3 variables, le estamos dando a la variable ``a`` el valor de 2, a la variable ``b`` el valor de 3 y estamos diciendo que vamos a usar esas 2 variables para (Este sería un ejemplo camtibién de como usar las variables) crear una tercera variable ``c``.

Ahora tómate un segundo para intentar averiguar cuanto vale ``c`` una vez lo tengas y espero que lo hayas hecho bien te darás cuenta de que el valor de nuestra variable ``c`` es ``-3``. 

Si has resondido bien felicidades, si no ha sido el caso no te preocuper, todavía queda mucho camino por delaten y lo mejor es que no estás en una carrera. Al mimso timepo que digo que aprender a programar es una de las mejores inversiones que de tiempo que puedes hacer eso no significa que tengas que acelerate e ir más rapido de lo que hace falta. Ten en mente que aunque se vaya lento y por mucho tiempo que tome todo el tiempo invertido es uno de los mejores usos que le puedes dar a tu tiempo.

## ¿Como creo una variable?
Esto dependerá del lenguaje de programación que estemos usando, en algunos lenguajes tenemos que especificar el tipo de la variable que queremos crear [veremos los tipos de variables aquí](#que-tipos-de-variables-hay). 

Por lo general el crear una variable suele tener 2 partes. (Usamos JavaScript para este ejemplo)

### Declarar
En nuestra primera parte vamos a utilizando la palabra reservada por el lenguaje de programación para crear variables y dandoles un nombre ya sería suficiente. En el caso de JavaScript la palabra reservada es ``let``

``` 
    let miPrimeraVariable 
```
Felicidades, ya has creado tu primera variable!

### Inicializar
Ahora, hasta aquí todo es funcional, podriamos dejar la variable de esta manera y tendremos una variable sin ningñun valor (Pero la tenemos!) Pero aquí es cuando la cosa se pone interesante, la variable además de crearla queremos que contenga algún valor para que podemos hacer algo con ella.

Cuando inicializamos una variable es cuando le damos ese valor inicial a misma. Esta parte se suele hacer de la siguiente con el símbolo ``=``. Un ejemplo de ello sería.

```
miPrimeraVariable = 3
```

Acabamos de decir que cuando empieze una nueva partida voy a tener 3 vidas (Por ejemplo)

### Mezclar
Ahora estos 2 pasos se pueden combinar dentro de un solo paso, juntando los 2 códigos en uno de la siguiente manera:
```
    let miPrimeraVariable = 3
```

## ¿Que tipos de variables hay?
Vale, sabemos lo que es una variable, pero esto no puede ser tan facil... De hecho las variables pueden ser de varios tipos. Por simplicidad nos quedaremos con que pueden ser de 3 tipos e iremos expandiendo a partir de ellos. 

Además en cada lenguage de programación puede cambiar como trabajamos con las variables, y los tipos de variables que hay, así que lo dejaremos simple u veremos 3 que se encuentran en la mayoría de los lenguajes de programación que te vas a encontrar a lo largo de tu carrera.


### Números
Estas variables se pueden llamar de muchos tipos, ``int, float, number`` pero al fin de al cabo representan un numero. ya sea un numero entero ``int``, decimal, para lo que en algunos lenguajes usaremos ``float`` o si el lenguaje con el que estamos trabajando lo reprensetande de un modo más genérico como ``number``.

Por lo general para crear un crear una variable de este tipo tendremos que indicar su tipo, ponerle un nombre

### String
### Booleans



## ¿Como acceder al valor de una variable?

## ¿Como cambiar el valor de una variable?



Además, al igual que podemos modificar el contenido de una caja, podemos cambiar el valor almacenado en una variable. Por ejemplo, si la edad de la persona cambia, podemos actualizar el valor de la variable "edad" para reflejar este cambio.

En resumen, una variable en programación es como una caja que se utiliza para almacenar valores y que puede ser referenciada por su nombre. Al igual que una caja, una variable puede contener diferentes valores en diferentes momentos y puede ser modificada para reflejar cambios en el programa.
