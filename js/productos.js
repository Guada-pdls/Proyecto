class Producto{
    constructor(id, nombre, precio, descripcion, cat, oferta, img) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.descrip = descripcion,
        this.cat = cat,
        this.oferta = oferta,
        this.img = img
    }
}

// Lista de productos

const productos = [ new Producto(1, `Guitarra Clasica Valencia Vc204 Natural`, 109, `Una guitarra con gran volumen y claridad. Un instrumento que aporta un amplia gama de tonos para crear diferentes clases de timbre y color en el sonido.

Acabado tapa: Mate
Acabado fondos y aros: Mate
Diapasón: Caoba
Número de trastes: 19
Parte delantera: abeto Sitka.
Parte trasera y laterales: Nato.
Cuello: Palo Rosa y reforzado con tiras de caoba.
Longitud de la escala es de 650 mm y la anchura es de 52 mm.`, `Guitarra`, false, "https://http2.mlstatic.com/D_NQ_NP_691409-MLU42613825741_072020-O.jpg"), new Producto(2, `Guitarra Clásica Yamaha Cg102 Natural`, 359, `La serie Concierto ofrece una gama de guitarras de alto nivel, prestaciones profesionales y un confort excepcional. El reciente rediseño de la serie CG ha dado como resultado unos aros y un fondo ligeramente menos profundos, así como un lacado menos denso para incrementar la respuesta armónica del instrumento. Asimismo, se ha potenciado el confort y el volumen de la guitarra. La nueva CG102 ofrece el mejor punto de partida para los principiantes: una guitarra que, por su precio, ofrece prestaciones muy superiores a sus competidoras.

Forma CG de Yamaha.
Tapa laminada.
Fondo y costados de palosanto.
Mástil de caoba africana.
Diapasón de ébano.`, `Guitarra`, false, "https://http2.mlstatic.com/D_NQ_NP_800705-MLU49792937766_042022-V.jpg"), new Producto(3, `Guitarra Clásica Yamaha C40`, 189, `El modelo C40 ha sido galardonado en la última edición de los premios de la industria musical (M.I.A., Music Industry Awards). Desde su lanzamiento a principios de la década de los ‘90s, nuestra querida C40 ha ido coleccionando premios y reconocimientos, estableciéndose por derecho propio como la guitarra clásica mejor valorada entre profesores, alumnos y guitarristas principiantes, gracias a su increíble relación calidad-precio. La guitarra destaca por su excepcional sonido, confort y prestaciones, dignas de instrumentos de precio superior.

Construcción: Laminada
Tapa armónica: Abeto rojo europeo
Fondo/Aros: Meranti
Color: Natural
Acabado: Natural
Mástil: Nato
Diapasón: Palisandro
Longitud escala: 65 cm
Anchura de la cejilla: 52 mm
Herrajes: Cromado`, `Guitarra`, true, "https://mlbpnjepojsd.i.optimole.com/w:500/h:312/q:mauto/f:avif/https://miguitalele.com/wp-content/uploads/2018/02/comprar-yamaha-c40-lado-min.jpg"), new Producto(4, `Bajo Electrico Yamaha Trbx174 4 Str. Negro`, 419, `TRBX174, la versión más asequible de la gama TRBX, un instrumento cuyas prestaciones están muy por encima de su precio.

4 cuerdas
Cuerpo: caoba
Mástil: arce, atornillado
Diapasón de palisandro (Dalbergia latifolia)
Escala: 864 mm (escala larga)
24 trastes
Ancho de tuerca: 40 mm
Pastillas: 1 x bobina dividida, 1 x bobina simple
Hardware: Yamaha cromo`, `Bajo`, true, "https://f.fcdn.app/imgs/fd1d5a/www.palaciodelamusica.com.uy/pmusuy/8518/original/catalogo/ADKB01PKB-ADKB01PKB_1/460x460/pack-bajo-electrico-memphis-negro-pack-bajo-electrico-memphis-negro.jpg"), new Producto(5, `Bajo Electrico Ibanez Gsr200`, 349, `Modelo GSR200BK.
Mastil: GSR4.
Cuerpo: de Agathis.
Trastes: Medium.
Ecualizador: Phat II.
Mastil delgado y rápido.
Electrónica activa polivalente y poderosa.`, `Bajo`, false, "https://http2.mlstatic.com/D_NQ_NP_705948-MLU52025822726_102022-O.jpg"), new Producto(6, `Bajo Eléctrico Fender Squier Affinity Pj Bass`, 590, `Mástil de arce con perfil en C y diapasón de palosanto de 20 trastes
Pastilla del puente Standard Jazz Bass de bobina simple y pastilla Precision Bass® de bobina simple dividida
Controles de volumen independientes para cada pastilla
Golpeador en color negro`, `Bajo`, false, "https://cdn.shopify.com/s/files/1/0266/8534/1738/products/53052080_1_700x700.png?v=1661554186"), new Producto(7, `Teclado / Organo Yamaha Psre373`, 449, `El PSR-E373 es el nuevo estándar de los teclados de iniciación. Está cargado de versátiles funciones y un expresivo teclado con sensibilidad a la pulsación, para que los principiantes aprendan disfrutando y más rápidamente.
El PSR-E373 es el nuevo estándar de los teclados de iniciación. Está cargado de versátiles funciones y un expresivo teclado con sensibilidad a la pulsación, para que los principiantes aprendan disfrutando y más rápidamente.`, `Teclado`, false, "https://http2.mlstatic.com/D_NQ_NP_675332-MLU50184603559_062022-O.jpg"), new Producto(8, `Órgano Yamaha Psrew425`, 915, `El PSR-EW425 es el instrumento perfecto para aprender a tocar o incluso para dar tus primeros conciertos; su teclado de 76 teclas que hará las delicias de los teclistas más exigentes. El nuevo PSR-EW425 ofrece un nuevo motor de audio que entrega un sonido impresionante, además de efectos de alta calidad como delays, y un órgano muestreado directamente de la serie YC de Yamaha.

820 Voices y Super Articulation Lite Voices
Sonido de órgano premium
290 Styles
2 canales/41 typos de efectos de inserción DSP
Muestreo rápido
Groove Creator
Perillas de control en vivo, funcionalidad de Motion Effect, rueda de pitch bend
Mega Boost
Botones de acceso directo a categorías
Interfaz/Grabación de audio USB
Entrada de micrófono y efectos vocales
Salidas L/R individuales
Potentes altavoces de 12 W + 12 W`, `Teclado`, false, "https://http2.mlstatic.com/D_NQ_NP_829953-MLU50787024439_072022-O.jpg"), new Producto(9, `Piano Digital Artesia Performer Black`, 370, `Está equipado con 88 teclas sensibles al tacto, semi-pesadas, de tamaño completo en un diseño liviano que ahorra espacio. Con un peso de menos de 20 libras, es la configuración perfecta para la movilidad del piano. El diseño funcional con solo unos pocos botones permite a los usuarios elegir fácilmente entre una de las muestras de sonido integradas y comenzar a tocar en segundos. El adaptador de corriente está incluido, así que simplemente conecte su piano y comience a tocar nada más sacarlo de la caja sin configuración.
Está equipado con 88 teclas sensibles al tacto, semi-pesadas, de tamaño completo en un diseño liviano que ahorra espacio. Con un peso de menos de 20 libras, es la configuración perfecta para la movilidad del piano. El diseño funcional con solo unos pocos botones permite a los usuarios elegir fácilmente entre una de las muestras de sonido integradas y comenzar a tocar en segundos. El adaptador de corriente está incluido, así que simplemente conecte su piano y comience a tocar nada más sacarlo de la caja sin configuración.`, `Teclado`, false, "https://http2.mlstatic.com/D_NQ_NP_652683-MLU31370188489_072019-O.jpg"), new Producto(10, `Wisemann Trompeta Dtr-250`, 449, `Clave: Bb.
Acabado laqueado.
Pistón de acero inoxidable.
Deslizadores Níquel plateado.
Tubo de plomo rosado.
Campana de latón.
Brazalete de latón amarillo.
Waterkey de 2 piezas.
Tamaño de la campana: 125 mm Diámetro interior: 11.8 mm.
Boquilla: incluida.`, `Trompeta`, true, "https://http2.mlstatic.com/D_NQ_NP_661318-MLA43175887559_082020-O.webp"), new Producto(11, `Saxo Alto Lincoln Jyas1102 Laqueado`, 725, `Afinación: Eb con llave de Fa# agudo
Características: detalles labrados en la campana y botones de nácar en sus llaves, zapatillas de cuero, terminación laca oro, cuerpo yellow brass.
Incluye un estuche rígido forrado en cuero en su exterior y revestido de pana acolchada en su interior, boquilla, caña, guantes, paño de limpieza y correa.`, `Saxofón`, false, "https://f.fcdn.app/imgs/685564/www.palaciodelamusica.com.uy/pmusuy/34dd/original/catalogo/JBAS200L-JBAS200L_1/460x460/saxo-alto-power-beat-jbas200l-saxo-alto-power-beat-jbas200l.jpg"), new Producto(12, `Acordeon A Piano Hohner 60 Bajos Red 26 Teclas`, 1633, `Teclas del piano: 26
Numero de notas: 26, H - C
Clase: cromático
Voces: 2
Número de registros: 2
Colores de tono: 2
Bajos estándar: 60 60
Voces de bajo estándar: 4 4
Talla: 31 x 18.5 cm / 12.2 "x 7.3"
Peso: 5,1 kg
Color: rojo
Calidad de placa de lámina: estándar
Correas: Correas estándar`, `Acordeón`, false, "https://http2.mlstatic.com/D_NQ_NP_656160-MLU32030103866_082019-O.jpg"), new Producto(13, `Flauta Dulce Yamaha Yrs23 Digitación Directa German`, 9, `Esta flauta dulce, que probablemente sea el modelo más popular del mundo, es muy fácil de tocar y ofrece un tono claro y suave. Es perfecta para su uso en conservatorios.`, `Flauta`, false, "https://http2.mlstatic.com/D_NQ_NP_893593-MLU50955439655_082022-O.jpg"), new Producto(14, `Cajón Peruano Memphis Con Funda`, 137, `Tamaño standard
Madera enchapada
2 bordonas de tension ajustable
Incluye funda`, `Cajón Peruano`, false, "https://http2.mlstatic.com/D_NQ_NP_684828-MLU44593595558_012021-O.jpg"), new Producto(15, `Conga Memphis Wine Red`, 489, `Quinto y conga (10" y 11")
En madera
Incluyen soporte individual`, `Quinto y Conga`, false, "https://f.fcdn.app/imgs/889fc6/www.palaciodelamusica.com.uy/pmusuy/c9dc/original/catalogo/FTC8801WINERED-FTC8801WINERED_1/2000-2000/conga-memphis-wine-red-conga-memphis-wine-red.jpg")]

// Funciones

const mostrarProductos = (productos, nodo) => {
    productos.forEach(producto => {
        const card = document.createElement("div")
        card.className = "card m-2 d-flex align-items-center"
        card.innerHTML = `
        <img src=${producto.img} class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <div class="texto">
                      <p class="card-text descrip">${producto.descrip}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-baseline boton">
                      <button class="btn btn-primary" id="${producto.id}">Añadir al carrito</button>
                      <p class="me-4">USD ${producto.precio}</p>
                  </div>
                </div>
              </div>`
        nodo.appendChild(card)
    })
}

const ModoOscuro = () => {
    const body = document.querySelector("body")
    const botones = document.querySelectorAll(".btn")
    const cards = document.querySelectorAll(".card")
    body.classList.toggle("modo-oscuro")
    botones.forEach( boton => { boton.classList.toggle("btn-dark") })
    cards.forEach( card => { card.classList.toggle("dark-card") })
}

let carrito = []
const Carrito = () => {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    for (let producto of carrito) {
        const cardCarrito = document.createElement("div")
        cardCarrito.className = "card m-3"
        cardCarrito.innerHTML = `
        <h5 class="card-title px-3 pt-3">${producto.nombre}</h5>
        <h7 class="card-subtitle px-3 pb-3">USD ${producto.precio}</h7>
        <button class="btn btn-primary" id="${producto.id}">X</button>
        `
        main.appendChild(cardCarrito)
    }
}