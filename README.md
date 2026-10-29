Proyecto Caliwood - Sistema de Taquilla de Cine

Hola, este es mi proyecto para el Caso A. Consiste en una página web para gestionar la taquilla de un cine, aplicando HTML, CSS y JavaScript.

 ¿Qué hace el sistema?
El sistema está dividido en 5 pantallas que simulan el flujo real de un cine:

Login: El taquillero entra con el usuario Cinecali y la contraseña Estrenos.

Ventas: Se registra la película, la sala y la cantidad de boletas (calculando el total a $12.000 c/u). 
Incluye un efecto de "reloj" al calcular y pide la clave CINE para guardar y limpiar los campos.

Cambio de Asiento: Permite mover al cliente de silla. Si el cambio se hace entre las 3:00 PM y las 6:00 PM, 
el sistema lee la hora real del computador y aplica un recargo del 5%.

Recaudación: Muestra una gráfica de líneas con el dinero total vendido en el día.

Cámara: Enciende la webcam para tomarle una foto de control al operador.


 Ingeniería de Requisitos
1. Requerimientos Funcionales (RF)

    RF01 (Login): El sistema debe permitir el acceso mediante el usuario Cinecali y la contraseña Estrenos. Si los datos son incorrectos, debe mostrar un mensaje de alerta.

    RF02 (Ventas): El sistema debe calcular la recaudación multiplicando la cantidad de boletas (del 1 al 10) por el precio base de $12.000.

    RF03 (Efecto de carga): El sistema debe mostrar un efecto tipo "reloj" de 1 segundo antes de mostrar el resultado de la venta.

    RF04 (Clave de seguridad): Tras calcular, el sistema debe pedir la palabra CINE. Si es correcta, limpia los campos para la siguiente venta. Si es incorrecta, expulsa al usuario de vuelta al Login.

    RF05 (Cambio de asiento): El sistema debe permitir cambiar el asiento. Si el cambio se hace entre las 3:00 PM y 6:00 PM (leyendo la hora del sistema), aplica un recargo del 5%.

    RF06 (Gráfica): El sistema debe guardar cada venta en un arreglo y dibujarla en una gráfica de líneas.

    RF07 (Cámara): El sistema debe encender la cámara web para capturar la foto del operador.


2. Requerimientos No Funcionales (RNF)

    RNF01 (Usabilidad): La interfaz debe ser intuitiva y las alertas deben explicar claramente al usuario qué error cometió.

    RNF02 (Rendimiento): La carga de las pantallas y la generación de la gráfica no deben tardar más de 2 segundos.

    RNF03 (Compatibilidad): El desarrollo debe funcionar correctamente en navegadores modernos (Chrome, Edge, Firefox).


3. Requerimientos de Dominio (RD)

    RD01 (Tratamiento de datos): El sistema debe cumplir con la Ley 1481 de 2012 (Habeas Data). La foto del operador y los datos de ventas se manejan de forma local y privada.

    RD02 (Moneda): El sistema solo debe operar con pesos colombianos (COP). No se aceptan decimales ni monedas extranjeras (ej. si el usuario intenta poner 5.10, el sistema lo rechaza).

    RD03 (Validación de nombres): Los nombres de las películas deben ser texto. El sistema no debe permitir números en este campo.


4. Historias de Usuario

    HU01: Como taquillero, quiero iniciar sesión de forma segura para evitar que personas ajenas manipulen el sistema.

    HU02: Como taquillero, quiero que el sistema calcule el total de la venta de forma automática para atender más rápido a la fila.

    HU03: Como cliente, quiero saber si cambiarme de silla me cuesta más plata para decidir si lo hago o me quedo en mi puesto.

    HU04: Como administrador del cine, quiero ver una gráfica de las ventas para saber qué película está dando más dinero.


 Tecnologías usadas

   HTML5: Estructura de las 5 pantallas.
   
   CSS3: Diseño, animaciones (el sol del login) y colores corporativos de Caliwood.
   
   JavaScript: Lógica de validaciones, cálculos, uso del reloj del sistema y acceso a la cámara.
   
   Chart.js: Librería para dibujar la gráfica de líneas.

¿Cómo probarlo?

Solo debes descargar la carpeta y abrir el archivo login.html en tu navegador. Todo funciona localmente.
