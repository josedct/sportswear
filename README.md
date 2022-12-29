![image](public/assets/sportswear.gif)
##### E-commerce
# _SportsWear_ 
##### React
SportsWear es un proyecto realizado en react, que simula una tienda online o e-commerce de ropa deportiva.
## Funciones
Las funciones que se muestran en el proyecto son las siguientes:
- Despliegue de un catálogo general
- Despliegue de productos por categoría
- Despliegue de detalles del producto
- Selección de talla de producto
- Un carrito de compra accesible en todo momento
- Formulario con validación de los datos básicos de un cliente
- Despliegue de los detalles del pedido
- Obtención de datos desde firebase
- Guardado de datos en firebase
## Funcionamiento
El usuario ingresa a la pagina desde el home o pagina principal del sitio que muestra una barra de navegación y despliega una lista con todos lo productos de ejemplo, en la barra de menú se muestra un icono de la marca que redirecciona a la pagina de inicio, del lado izquierdo se muestran las categorías que al dar clic sobre cada una se aplica un filtro a la consulta que obtiene los datos de firebase y muestra ciertos productos en particular, por ultimo se encuentra un botón o widget que redirecciona al carrito de compra.

En los catálogos de productos se listan los productos con una imagen, el nombre, el modelo, el precio y un botón que redirecciona a los detalles del producto.

Al dar clic en los botones para ver detalles, se redirecciona a una vista donde se muestran mas detalles del producto como lo son una descripción, el resumen, más imágenes, la categoría, las tallas disponibles y un contador para la cantidad de productos que se desea comprar más un botón de agregar al carrito que después de agregar al carrito muestra las opciones disponibles para redirigir al usuario.

Cada ves que se agrega un producto se muestra una actualización al widget del carrito al momento, al ir al carrito de compra se despliega una lista con las características básicas de los productos comprado, entre los que se incluye, la talla, la cantidad y el precio, también se muestra el total y algunas opciones básicas para el usuario como borrar producto, ver el producto y vaciar el carrito, para finalizar la compra el usuario debe llenar un formulario con datos básicos, dicho formulario se valida antes de enviar la compra y el botón de  hacer pedido permanece desactivado hasta que se validen los datos correctamente.

Después de enviar o hacer la compra, se redirige a una página donde se muestran los datos del pedido que se obtienen después de registrase en firebase.

## Estructura de firebase
En firebase se tiene una estructura de los datos de la siguiente forma:
### Colecciones
Categorias
~~~
categories (id) {
    icon, 
    link, 
    text
}
~~~
Productos
~~~
products (id) {
    category,
    color, 
    description[], 
    image[], 
    model, 
    name, 
    price,
    stock [
        {
            quantity, 
            size
        }
    ], 
    summary[]
}
~~~
Pedidos
~~~
orders (id) {
    buyer {
        email,
        name, 
        phone
    }, 
    date, 
    ítems [
        {
            model, 
            name, 
            price, 
            quantity, 
            size
        }
    ],
    total
}
~~~
## Dependencias
Las dependencias usadas en este proyecto son las siguientes:
|Dependencia |Versión|
| ------ | ------ |
|firebase| 9.15.0|
|react| 18.2.0|
|react-dom |18.2.0|
|react-router-dom |6.4.4|
## Demo Online
Para ver el demo visite el siguiente enlace: [sportswear]( https://effervescent-elf-d5fec8.netlify.app/)
## Prueba Local
- Para probarlo en local
- Descargue el repositorio como archivo zip
- Descomprímalo e una ubicación conveniente
- Ábralo con Visual Studio Code
- Ejecute en la carpeta del proyecto el comando *npm install*
- Por último, ejecute el comando *npm run dev*
