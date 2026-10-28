# Ingeniería de Requisitos - Proyecto Caliwood

## 1. Requerimientos Funcionales (RF)
*   **RF01 (Login):** El sistema debe permitir el acceso mediante el usuario `Cinecali` y la contraseña `Estrenos`. Si es incorrecto, debe mostrar un mensaje de alerta.
*   **RF02 (Registro de Ventas):** El sistema debe permitir registrar el nombre de la película, la sala y la cantidad de boletas (máximo 10), calculando el total con una tarifa base de $12.000 COP.
*   **RF03 (Efecto Reloj):** El sistema debe mostrar un efecto visual de carga (reloj) de 1 segundo antes de mostrar el resultado de la recaudación.
*   **RF04 (Clave de Seguridad):** Tras el cálculo, el sistema solicitará la clave `CINE`. Si es correcta, limpiará los campos. Si es incorrecta, expulsará al usuario al Login.
*   **RF05 (Cambio de Asiento):** El sistema debe permitir modificar el asiento de un cliente. Si el cambio se realiza entre las 3:00 PM y 6:00 PM (leyendo la hora del sistema), se aplicará un recargo del 5%.
*   **RF06 (Gráfica):** El sistema debe almacenar las recaudaciones y dibujar una gráfica de líneas dinámica.
*   **RF07 (Cámara):** El sistema debe permitir tomar una foto al operador mediante la cámara web.

## 2. Requerimientos No Funcionales (RNF)
*   **RNF01 (Usabilidad):** La interfaz debe ser intuitiva, con alertas claras para guiar al usuario en caso de errores.
*   **RNF02 (Rendimiento):** La carga de las pantallas y la generación de la gráfica no deben superar los 2 segundos.
*   **RNF03 (Compatibilidad):** El sistema debe funcionar correctamente en navegadores modernos (Chrome, Edge, Firefox).

## 3. Requerimientos de Dominio (RD)
*   **RD01 (Tratamiento de Datos):** El sistema debe cumplir con la Ley 1481 de 2012 (Habeas Data), garantizando que la captura de foto del operador y el registro de ventas se manejen de forma confidencial y no se compartan con terceros sin consentimiento.
*   **RD02 (Moneda):** El sistema debe operar exclusivamente en Pesos Colombianos (COP). No se permiten decimales ni monedas extranjeras.

## 4. Historias de Usuario
*   **HU01:** Como *Taquillero*, quiero *iniciar sesión con credenciales seguras* para *evitar que personas no autorizadas manipulen la taquilla*.
*   **HU02:** Como *Taquillero*, quiero *calcular la recaudación de boletas automáticamente* para *agilizar la atención en la fila*.
*   **HU03:** Como *Cliente*, quiero *saber si mi cambio de asiento tiene un costo extra* para *decidir si me cambio o no de silla*.
*   **HU04:** Como *Gerente de Cine*, quiero *ver una gráfica de las ventas del día* para *tomar decisiones sobre qué películas mantener en cartelera*.
