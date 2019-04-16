const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const groot = select('html'),
      header = select('header'),
      nav = select('.nav-container nav'),
      navLinks = selectAll('.nav-container nav .nav-link'),
      footer = select('footer p');

const funBusRave = _ => {
  let r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255);

  groot.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  groot.style.color = `rgb(${r + 25}, ${g + 25}, ${b + 25})`;
  header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const ohNoes = _ => {
  window.removeEventListener('mousemove', funBusRave);
  window.removeEventListener('resize', funBusRave);
  window.removeEventListener('scroll', funBusRave);
  window.removeEventListener('wheel', funBusRave);

  groot.style.backgroundColor = '';
  groot.style.color = '';

  header.style.backgroundColor = '';
  footer.style.backgroundColor = '';
}

window.addEventListener('dblclick', ohNoes);
window.addEventListener('keydown', ohNoes);

window.addEventListener('load', _ => {
  navLinks.forEach(link => {
    const r = Math.floor(Math.random() * 255),
          g = Math.floor(Math.random() * 255),
          b = Math.floor(Math.random() * 255);

    link.style.color = `rgb(${r}, ${g}, ${b})`;
    link.style.fontWeight = 'bold';

    setTimeout(_ => {
      link.style.color = '';
      link.style.fontWeight = '';
    }, 1000);
  });
});

window.addEventListener('mousemove', funBusRave);
window.addEventListener('resize', funBusRave);
window.addEventListener('scroll', funBusRave);
window.addEventListener('wheel', funBusRave);

header.addEventListener('click', _ => console.log('YEET'));

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    console.log('AYE');
  });

  link.addEventListener('mouseover', _ => {
    link.style.color = 'red';

    setTimeout(_ => {
      link.style.color = '';
    }, 1000);
  });
});

footer.addEventListener('drag', e => console.log(e));
footer.addEventListener('drop', e => console.log(e));

footer.appendChild(document.createElement('br'));
footer.appendChild(document.createElement('textarea'));

const footerText = select('footer textarea');

footerText.addEventListener('focus', e => console.log(e));
footerText.addEventListener('select', e => console.log(e));