# USO

Instalación

Para utilizar express-expeditious, sigue los siguientes pasos:

    Instala el paquete desde npm usando el siguiente comando:

bash

npm install express-expeditious

    Importa la función getExpeditiousCache en tu archivo:

javascript

import getExpeditiousCache from 'express-expeditious';

Uso básico

A continuación se muestra un ejemplo básico de cómo utilizar express-expeditious en tu aplicación Express:

javascript

// objeto donde ponemos la config por defecto
const defaultOptions = {
    namespace: 'expresscache', // Nombre o clave donde se guardarán los datos en caché
    defaultTtl: '20 days', // Tiempo de vida predeterminado para los datos en caché
    statusCodeExpires: {
        404: '5 minutes', // Tiempo de vida para respuestas de estado 404 (no encontrado)
        500: 0 // Desactivar la caché para respuestas de estado 500 (error del servidor)
    }
};

const cacheInit = getExpeditiousCache(defaultOptions);

export default cacheInit;

En este ejemplo, se importa la función getExpeditiousCache de express-expeditious y se define un objeto defaultOptions con la configuración por defecto. namespace define el nombre o clave donde se guardarán los datos en caché. defaultTtl define el tiempo de vida predeterminado para los datos en caché. statusCodeExpires especifica el tiempo de vida para respuestas de estado específicas, como 404 y 500. En este ejemplo, se establece un tiempo de vida de 5 minutos para las respuestas de estado 404 y se desactiva la caché para las respuestas de estado 500.

Luego, se utiliza la función getExpeditiousCache junto con las opciones por defecto para inicializar el caché. El resultado cacheInit se puede utilizar como middleware en las rutas de tu aplicación Express para habilitar la caché.
