---
layout: "../../layouts/PostLayout.astro"
title: "Las variables"
description: "Una variable es una caja donde podemos almacenar valores, y así utilizarlos o modificarlos cuando nos haga falta"
pubDate: "24/03/2023"
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

Por lo general para crear un crear una variable de este tipo tendremos que indicar su tipo(uno de los que hemos indicado en el parrafo de arriba), ponerle un nombre y por lo general queremos incicializarlas con un valor, un ejemplo en Javascript sería `` let miNumero = 0`` mientas que en Java (En lenguaje que necesita el tipo de la varaible antes) sería ``int miNumero = 0``.

Como podemos ver hay mucho parecido entre las 2, por eso creo que esta guía deberia de ayudarte a encontrar el mayor número de similitudes posible.

### String

En este tipo de variable lo que almacenamos son textos: nombres, frases, un libro, lo que sea. Por lo general se inicializan así:
`` let miString = ""``, En este caso es **MUY IMPORTANTE** que añadamos las dobles comillas para rodear la palabra. Eso es lo que le va a indicar al ordenador que queremos un tipo de variable ``string``


### Booleans
Esta es un poco especial, solo puede valer Verdadero o False. Dentro de estas variables solo podemos meter esos 2 valores ```let mi Variable = true``, son 2 palabras reservadas. Importante fijarse que el true no va entre comillas, si lo fuese sería una variable de tipo String.

## ¿Como acceder al valor de una variable?
Para acceder al nombre de la variable simplemente escribe su nombre en el código! En el ejemplo anterior, cuando deciamos lo de ``c = a - b`` para acceder al valor de ve valía con escribir la letra ``b`` y automantimanete el ordenador ya sabe a donde ir.


## ¿Como cambiar el valor de una variable?
Para cambiar el valor de una variable basta con usar el símbolo ``=``. Este simbolo se usa al darle un valor inicial a la variable, pues lo mismo en este caso, siempre que queramos cambiar el valor de la variable vamos a usar ese símbolo.
