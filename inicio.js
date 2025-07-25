const poemaIframe = document.getElementById("poema");
const cajas = document.querySelectorAll('.cajas');


cajas.forEach(caja => {
  caja.addEventListener('change', () => {
    if (caja.checked) {
      console.log(caja.id);
      poemaIframe.src =caja.id;
      glitchear();
      cajas.forEach(other => {
        if (other !== caja) other.checked = false;
      });
    }
  });
});

const imagenesGlitch = [
  './glitch/mirada.jpeg',
  './glitch/el_tren_no_se_paro.jpeg',
  './glitch/otro_universo.jpeg',
  './glitch/con_paraguas.jpeg',
  './glitch/vacaaaaa.jpeg',
  './glitch/Magia(POV_cuando_recibes_lo_que_no_sabias_que_buscaste_toda_tu_vida).jpeg',
  './glitch/caida.jpeg',
  './glitch/pulpina_y_conejo(no_me_acuerdo_del_nombre).jpeg',
  './glitch/comerciales.jpeg',
  './glitch/tu_ta_ta_tu_ta_ta_tu_ta_ta.jpeg',
  './glitch/esperando.jpeg',
  './glitch/siempre.jpeg',
];

const imagenes = [
    './reloj/maldades.jpeg',
    './reloj/juego_en_las_alturas.jpeg',
    './reloj/Dougie.jpeg',
    './reloj/el_museo_encantado.jpeg',
    './reloj/luna.jpeg',
    './reloj/tatikito.jpeg',
    './reloj/hechizo.jpeg',
    './reloj/Conexion.jpeg',
    './reloj/michelle.jpeg',
    './reloj/pocima.jpeg',
  "./reloj/GG's_Day.jpeg",
    './reloj/your_day.jpeg',
    './reloj/lasagna_familiar.jpeg',
    './reloj/tu_tu.jpeg',
    './reloj/tus_cuadros.jpeg',
    './reloj/tus_manos.jpeg',
    './reloj/Kattiu.jpeg',
    './reloj/betabeles.jpeg',
    './reloj/Cocina.jpeg',
    './reloj/lluvia_de_vacas.jpeg',
    './reloj/crochet.jpeg',
    './reloj/GG.jpeg',
];


const contenedor = document.getElementById('galeria');

// Función para agregar imágenes
function agregarImagenes(lista) {
  contenedor.innerHTML = ''; // Limpia antes de agregar nuevas
  lista.forEach(ruta => {
    const li = document.createElement('li');
    li.classList.add('item-imagen');
    li.style.setProperty('--imagen-url', `url(${ruta
    })`);

    const img = document.createElement('img');
    img.src = ruta;
    img.alt = 'Fragmento simbólico';
    img.classList.add('imagen-ritual');

    li.appendChild(img);
    contenedor.appendChild(li);
  });
}
// Carga inicial
agregarImagenes(imagenes);

const musica = document.getElementById("musica");

function activarMusicaGlitch() {
  musica.src= "https://youtube.com/embed/HPf76nIOfww";
}

function activarMusicaDia() {
  musica.src = "https://youtube.com/embed/VjOzpG2M1CM";
}

// Cambio con glitch
const glitch = document.getElementById("cambio");
function glitchear(){
if (glitch.checked) {
  const secciones = document.querySelectorAll("section");
  secciones.forEach((seccion, index) => {
      seccion.classList.add("glitch");
    });
} else {
  const secciones = document.querySelectorAll("section");
      secciones.forEach((seccion, index) => {
      seccion.classList.remove("glitch");
    });
}
}
glitch.addEventListener('change', () => {
  if (glitch.checked) {
    agregarImagenes(imagenesGlitch);
    poemaIframe.src = "./duelo/amanece.html";
    document.documentElement.classList.add("glitch");
    activarMusicaGlitch();
    glitchear();
    /*alert("Se reproducira sonido, \n No te espantes jj");
    reproductor.src = "";
    reproductor.play();*/
  } else {
    agregarImagenes(imagenes);
    poemaIframe.src = "./Go_kitty.html";
    document.documentElement.classList.remove("glitch");
    activarMusicaDia();
    glitchear();
    /*reproductor.src = "https://youtu.be/iPyzNTAWl6k?si=_CD7SFpyhdik5YgD";
    reproductor.play();*/
  }
});



const canciones = [
  "./Tacomendaciones/A Tapdancer's Dilema.mp3",
  "./Tacomendaciones/Across The Universe.mp3",
  "./Tacomendaciones/Agust D - People Pt.2.mp3",
  "./Tacomendaciones/All You Need Is Love.mp3",
  "./Tacomendaciones/August's Rhapsody.mp3",
  "./Tacomendaciones/Beethoven quartet no. 15 in A minor, op. 132, 3rd mov. (Molto adagio).mp3",
  "./Tacomendaciones/Blackbird.mp3",
  "./Tacomendaciones/Bob Dylan - Blowin' in the Wind.mp3",
  "./Tacomendaciones/Bossa Love Songs - Can't Help Falling In Love.mp3",
'./Tacomendaciones/Bright Eyes-First Day of My Life.mp3',
'./Tacomendaciones/Canserbero - Únetenos.mp3',
'./Tacomendaciones/Canserbero - Vida.mp3',
'./Tacomendaciones/Christopher Tin - Baba Yetu.mp3',
'./Tacomendaciones/Christopher Tin - Sogno di Volare.mp3',
'./Tacomendaciones/cinnamons evening cinema - summertime.mp3',
'./Tacomendaciones/Coeur de Pirate - Comme des enfants.mp3',
'./Tacomendaciones/Cœur de pirate - Corbeau.mp3',
'./Tacomendaciones/Colour Me In.mp3',
'./Tacomendaciones/Cry for the Moon.mp3',
'./Tacomendaciones/Cuando Nada Me Quede.mp3',
'./TacomnedacionesDonde Descansa La Esperanza.mp3',
'./Tacomendaciones/Dos Mundos.mp3',
'./Tacomendaciones/El Gato Lopez.mp3',
'./Tacomendaciones/El Gran Varón.mp3',
'./Tacomendaciones/Eminem - Darkness.mp3',
'./Tacomendaciones/Eminem - Guts Over Fear ft. Sia.mp3',
'./Tacomendaciones/Flower Face - Bedhead.mp3',
'./Tacomendaciones/Flower Face - Cornflower Blue.mp3',
'./Tacomendaciones/Gaia.mp3',
'./Tacomendaciones/George Harrison-Give Me Love.mp3',
'./Tacomenaciones/Given Up.mp3',
 './Tacomendaciones/Good Charlotte - I Just Wanna Live.mp3',
'./Tacomendaciones/i love you more than you will ever know.mp3',
'./Tacomendaciones/Is There Still Anything That Love Can Do.mp3',
'./Tacomendaciones/Jane Doe.mp3',
  "./Tacomendaciones/Jason Mraz - I Won't Give Up.mp3",
'./Tacomendaciones/Je veux.mp3',
'./Tacomendaciones/Jeff Buckley - Hallelujah.mp3',
'./Tacomendaciones/Jónsi - Boy Lilikoi.mp3',
'./Tacomendaciones/Jónsi - Go Do.mp3',
'./Tacomendaciones/Kickapoo.mp3',
'./Tacomendaciones/La Costa del Silencio-Mägo de Oz.mp3',
'./Tacomendaciones/La gusana ciega - Tornasol.mp3',
'./Tacomendaciones/Ladrando a la luna.mp3',
'./Tacomendaciones/Last Nite - The Strokes.mp3',
'./Tacomendaciones/Life Goes On - August D.mp3',
'./Tacomendaciones/Life Goes On - BTS.mp3',
'./Tacomendaciones/Life Is Wonderful.mp3',
'./Tacomendaciones/Like a scent.mp3',
'./Tacomendaciones/Like Toy Soldiers.mp3',
'./Tacomendaciones/Lo Estoy Intentando.mp3',
'./Tacomendaciones/Louis Armstrong - La Vie En Rose.mp3',
'./Tacomendaciones/Louis Armstrong What A Wonderful World.mp3',
'./Tacomendaciones/Lucha De Gigantes.mp3',
'./Tacomendaciones/Lytos - Léelo del Revés.mp3',
'./Tacomendaciones/MAGO DE OZ  (CREO).mp3',
'./Tacomendaciones/Mägo de Oz - Hoy toca ser feliz.mp3',
'./Tacomendaciones/Mago de oz - La Rosa de los Vientos.mp3',
'./Tacomendaciones/Man in the Mirror.mp3',
'./Tacomendaciones/MC-solaar - la vie est belle.mp3',
'./Tacomendaciones/Mikrocosmos.mp3',
'./Tacomendaciones/Mr. Curiosity.mp3',
'./Tacomendaciones/My Chemical Romance - SING.mp3',
'./Tacomendaciones/Nach - Gratis.mp3',
'./Tacomendaciones/NACH, QUIERO CONTARTE.mp3',
'./Tacomendaciones/Nanna - Disaster Master.mp3',
'./Tacomendaciones/Nanna - Godzilla.mp3',
'./Tacomendaciones/Nanna - Igloo.mp3',
'./Tacomendaciones/Nanna - Milk.mp3',
'./Tacomendaciones/Never Shout Never - first dance.mp3',
'./Tacomendaciones/New Radicals - You Get What You Give.mp3',
'./Tacomendaciones/Ob-La-Di, Ob-La-Da.mp3',
'./Tacomendaciones/Of Monsters And Men - Love Love Love.mp3',
'./Tacomendaciones/One Love Bob Marley.mp3',
  "./Tacomendaciones/One Ok Rock - Notes'n'Words.mp3",
'./Tacomendaciones/Porter Robinson ft. Amy Millan - Divinity.mp3',
'./Tacomendaciones/Qué Puedo Decir.mp3',
'./Tacomendaciones/Queen - Dont Stop Me Now.mp3',
'./Tacomendaciones/Queen - Love Of My Life.mp3',
'./Tacomendaciones/RADWIMPS - Kaiko.mp3',
'./Tacomendaciones/RADWIMPS - MAKAFUKA.mp3',
'./Tacomendaciones/RADWIMPS Kanata Haruka.mp3',
'./Tacomendaciones/RADWIMPS Utakata uta.mp3',
'./Tacomendaciones/Rusted Rood - Send me on my way.mp3',
'./Tacomendaciones/Scene Eight The Spirit Carries On.mp3',
'./Tacomendaciones/Sie7e - Tengo tu love.mp3',
'./Tacomendaciones/Sigur Rós - Ára Bátur.mp3',
'./Tacomendaciones/Sigur Ros - Glósóli.mp3',
'./Tacomendaciones/Sigur Ros - Hoppipolla.mp3',
'./Tacomendaciones/Solaar Pleure.mp3',
  "./Tacomendaciones/Stayin' Alive.mp3",
'./Tacomendaciones/Sticks & Stones.mp3',
'./Tacomendaciones/Stir It Up.mp3',
'./Tacomendaciones/The Final Countdown.mp3',
'./Tacomendaciones/The Long And Winding Road.mp3',
'./Tacomendaciones/This Is Home.mp3',
'./Tacomendaciones/Tipling Rock - Love Without a Reason.mp3',
'./Tacomendaciones/To the sky.mp3',
'./Tacomendaciones/Toploader - Dancing in the Moonlight.mp3',
'./Tacomendaciones/Trusty and True.mp3',
'./Tacomendaciones/un palido punto azul - Carl Sagan.mp3',
'./Tacomendaciones/Untitled #3 - sigur ros.mp3',
'./Tacomendaciones/Untitled #4 (Njósnavélin).mp3',
'./Tacomendaciones/Ven a mi Inuyasha.mp3',
'./Tacomendaciones/Will You Be There.mp3',
'./Tacomendaciones/Zaz - Port Coton.mp3',
];

let indiceActual = 0;
const reproductor = document.getElementById("reproductor");

function cargarCancion(index) {
  if (index >= 0 && index < canciones.length) {
    reproductor.src = canciones[index
    ];
    reproductor.play();
    indiceActual = index;
  }
}


document.getElementById("anterior").onclick = () => cargarCancion(indiceActual - 1);
document.getElementById("siguiente").onclick = () => cargarCancion(indiceActual + 1);

// Iniciamos con la primera canción
cargarCancion(indiceActual);


const nombresLimpiados = canciones.map(c => c.split("./Tacomendaciones/").pop().replace(".mp3",
""));

const datalist = document.getElementById("buscadorCancion");
nombresLimpiados.forEach(nombre => {
  const opcion = document.createElement("option");
  opcion.value = nombre;
  datalist.appendChild(opcion);
});
document.getElementById("inputCancion").addEventListener("change",e => {
  const nombre = e.target.value;
  const ruta = canciones.find(c => c.includes(nombre));
  reproductor.src = ruta;
  reproductor.play();
})
glitchear();
