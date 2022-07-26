function createMyElement(el, ids = '', cl = '') {
  const doc = document.createElement(el);

  if (ids !== '') {
    doc.id = ids;
  }

  if (cl !== '') {
    doc.className = cl;
  }
  return doc;
}

function createMyMenu() {
  const container = createMyElement('div', 'nav-toggle');

  // create button
  const toggle_btn_container = createMyElement('div', 'close-button-container');
  const toggle_btn = createMyElement('img', 'img-close');
  toggle_btn.setAttribute('src', './../images/x.svg');
  toggle_btn_container.appendChild(toggle_btn);
  container.appendChild(toggle_btn_container);

  // create menu list
  const ul = createMyElement('ul', 'js_nav', 'js-nav');
  let li; let
    a;
  const content = ['Portfolio', 'About', 'Contact'];
  const innerLinks = ['#my-works', '#me', '#contact'];

  // create individual li and aattact to ul
  for (let i = 0; i < content.length; i++) {
    li = createMyElement('li', '', 'js-nav-items');
    a = createMyElement('a', content[i]);
    a.setAttribute('href', innerLinks[i]);
    a.textContent = content[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  // add ul to container
  container.appendChild(ul);

  // create buttom img
  const toggle_img_container = createMyElement('div', 'menu-img');
  const toggle_img = createMyElement('img');
  toggle_img.setAttribute('src', './../images/Shape.png');
  toggle_img_container.appendChild(toggle_img);

  container.appendChild(toggle_img_container);

  // console.log(container)
  return container;
}

function insert_to_page() {
  document.body.insertBefore(createMyMenu(), document.body.children[0]);
}

function remove_element(el) {
  el.remove();
}

const btn = document.querySelector('#toggle-menu');
btn.addEventListener('click', function (event) {
  this.style.display = 'none';
  insert_to_page();
  const first_rem = document.body.firstElementChild;
  const img_close = document.getElementById('img-close');

  event.stopPropagation();
  const btn_mob = document.querySelector('#toggle-menu');
  const links = document.querySelector('.js_nav li');

  img_close.addEventListener('click', () => {
    // console.log(event.currentTarget)
    remove_element(first_rem);
    btn_mob.style.display = 'inline';
    event.stopPropagation();
  });

  document.querySelector('#Portfolio').addEventListener('click', () => {
    remove_element(first_rem);
    btn_mob.style.display = 'inline';
    event.stopPropagation();
  });

  document.querySelector('#About').addEventListener('click', () => {
    remove_element(first_rem);
    btn_mob.style.display = 'inline';
    event.stopPropagation();
  });

  document.querySelector('#Contact').addEventListener('click', () => {
    remove_element(first_rem);
    btn_mob.style.display = 'inline';
    event.stopPropagation();
  });
});