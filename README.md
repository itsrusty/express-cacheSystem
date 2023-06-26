# cacheMemorySystem

Instalación

Para utilizar express-expeditious, sigue los siguientes pasos:

    Instala el paquete desde npm usando el siguiente comando:

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
