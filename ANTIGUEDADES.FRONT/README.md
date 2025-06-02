# Antigüedades Sthandier

Este proyecto tiene como objetivo crear una página web informativa para el emprendimiento **Antigüedades Sthandier**, que se especializa en la venta de antigüedades vintage. La página web incluirá secciones sobre los productos, información sobre el negocio, preguntas frecuentes y un formulario de contacto.

## Estructura del Proyecto

```
antiguedades-sthandier
├── public
│   └── index.html          # Punto de entrada HTML principal
├── src
│   ├── api
│   │   └── index.js        # Funciones para obtener datos de una API
│   ├── assets
│   │   └── images          # Imágenes utilizadas en el proyecto
│   ├── components
│   │   ├── Carousel.js     # Componente de carrusel de imágenes
│   │   ├── ContactForm.js   # Componente del formulario de contacto
│   │   ├── FAQ.js          # Componente de preguntas frecuentes
│   │   ├── Navbar.js       # Componente de navegación
│   │   ├── ProductCard.js   # Componente de tarjeta de producto
│   │   └── Section.js      # Componente contenedor para secciones
│   ├── pages
│   │   ├── Home.js         # Página de inicio
│   │   ├── Productos.js     # Página de productos
│   │   ├── QuienesSomos.js  # Página sobre el negocio
│   │   └── PreguntasFrecuentes.js # Página de preguntas frecuentes
│   ├── styles
│   │   └── main.css        # Estilos principales del proyecto
│   ├── utils
│   │   └── validation.js    # Funciones de validación
│   ├── App.js              # Componente principal de la aplicación
│   ├── index.js            # Punto de entrada de la aplicación React
│   └── variables.js        # Variables comunes del proyecto
├── .gitignore              # Archivos y directorios a ignorar por Git
├── package.json            # Metadatos del proyecto y dependencias
├── README.md               # Documentación del proyecto
└── yarn.lock               # Bloqueo de versiones de dependencias
```

## Instrucciones de Instalación

1. Clona el repositorio en tu máquina local:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd antiguedades-sthandier
   ```
3. Instala las dependencias:
   ```
   yarn install
   ```
4. Inicia la aplicación:
   ```
   yarn start
   ```

## Guía de Uso de Componentes

- **Carousel**: Utiliza el componente `Carousel` para mostrar imágenes de productos de manera rotativa.
- **ContactForm**: Implementa el componente `ContactForm` para permitir a los usuarios enviar consultas.
- **FAQ**: Usa el componente `FAQ` para mostrar preguntas frecuentes.
- **ProductCard**: Utiliza `ProductCard` para mostrar información sobre cada producto, incluyendo un botón de "Contáctanos".

## Ejemplos de Código

### Ejemplo de uso del componente ProductCard

```javascript
<ProductCard 
  image="ruta/a/la/imagen.jpg" 
  title="Candelabro Vintage" 
  description="Un hermoso candelabro de la época victoriana." 
/>
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea una rama para cada funcionalidad y realiza un pull request para revisión.

## Licencia

Este proyecto está bajo la Licencia MIT.