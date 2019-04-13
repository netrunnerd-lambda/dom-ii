const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const groot = select('html'),
      header = select('header'),
      footer = select('footer');

const funBusRave = _ => {
  let r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255);

 groot.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
 header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const ohNoes = _ => {
  groot.style.display = 'none';
}

window.addEventListener('dblclick', ohNoes);
window.addEventListener('mousemove', funBusRave);
window.addEventListener('scroll', funBusRave);