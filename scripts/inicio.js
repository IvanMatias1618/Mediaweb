
const cajas = document.querySelectorAll('.checkbox');

cajas.forEach(caja => {
  caja.addEventListener('change', () => {
    if (caja.checked) {
      cajas.forEach(other => {
        if (other !== caja) other.checked = false;
      });
    }
  });
});

  const imagenes = [
    'reloj/Dougie.jpeg',
    'reloj/luna.jpeg',
    'reloj/GG.jpeg',
  // y más rutas mágicas...
];

  const contenedor = document.getElementById('galeria');

  imagenes.forEach(ruta => {
    const li = document.createElement('li');
    li.classList.add('item-imagen'); // estiliza el li si lo deseas
li.style.setProperty('--imagen-url', `url(${ruta
  })`);

    const img = document.createElement('img');
    img.src = ruta;
    img.alt = 'Fragmento simbólico';
    img.classList.add('imagen-ritual');

    li.appendChild(img);
    contenedor.appendChild(li);
});
