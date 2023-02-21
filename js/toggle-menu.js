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
  const toggleBtnContainer = createMyElement('div', 'close-button-container');
  const toggleBtn = createMyElement('img', 'img-close');
  toggleBtn.setAttribute('src', './images/x.svg');
  toggleBtnContainer.appendChild(toggleBtn);
  container.appendChild(toggleBtnContainer);

  // create menu list
  const ul = createMyElement('ul', 'js_nav', 'js-nav');
  let li;
  let a;
  const content = ['Projects', 'About', 'Contact'];
  const innerLinks = ['#my-works', '#me', '#contact'];
  // create individual li and aattact to ul
  for (let i = 0; i < content.length; i += 1) {
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
  const toggleImgContainer = createMyElement('div', 'menu-img');
  const toggleImg = createMyElement('img');
  toggleImg.setAttribute('src', './images/Shape.png');
  toggleImgContainer.appendChild(toggleImg);

  container.appendChild(toggleImgContainer);

  //   console.log(container)
  return container;
}

function insertToPage() {
  document.body.insertBefore(createMyMenu(), document.body.children[0]);
}

function removeFromPage(el) {
  el.remove();
}

const btn = document.querySelector('#toggle-menu');

btn.addEventListener('click', (event) => {
  // const btnMob = document.querySelector('#toggle-menu');
  btn.style.visibility = 'hidden';
  insertToPage();
  const firstToRemove = document.body.firstElementChild;
  const closeImg = document.getElementById('img-close');

  event.stopPropagation();
  closeImg.addEventListener('click', () => {
    btn.style.visibility = 'visible';
    removeFromPage(firstToRemove);
    // btnMob.style.display = 'inline';

    event.stopPropagation();
  });

  document.querySelector('#Projects').addEventListener('click', () => {
    removeFromPage(firstToRemove);
    // btnMob.style.display = 'inline';
    btn.style.visibility = 'visible';
    event.stopPropagation();
  });

  document.querySelector('#About').addEventListener('click', () => {
    removeFromPage(firstToRemove);
    // btnMob.style.display = 'inline';
    btn.style.visibility = 'visible';
    event.stopPropagation();
  });

  document.querySelector('#Contact').addEventListener('click', () => {
    removeFromPage(firstToRemove);
    // btnMob.style.display = 'inline';
    btn.style.visibility = 'visible';
    event.stopPropagation();
  });
});

const btnLanguage = document.querySelector('#btn-language');

btnLanguage.addEventListener('click', () => {
  document.querySelector('.lang-list').classList.toggle('hide');
  btnLanguage.firstElementChild.classList.toggle('hide');
  btnLanguage.lastElementChild.classList.toggle('hide');
});

const btnFramework = document.querySelector('#btn-framework');

btnFramework.addEventListener('click', () => {
  document.querySelector('.list-framework').classList.toggle('hide');
  btnFramework.firstElementChild.classList.toggle('hide');
  btnFramework.lastElementChild.classList.toggle('hide');
});

const btnSkills = document.querySelector('#btn-skills');

btnSkills.addEventListener('click', () => {
  document.querySelector('.list-skills').classList.toggle('hide');
  btnSkills.firstElementChild.classList.toggle('hide');
  btnSkills.lastElementChild.classList.toggle('hide');
});
