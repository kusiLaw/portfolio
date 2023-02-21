const store = {

  desktop: {
    card1: {
      topic: 'Food Recipe',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologiesLiCls: ['tag', 'tag', 'tag'],
      image: './images/recipe.png',
      feature: ['Web', './images/Counter.png', 'Front End Dev', './images/Counter.png', '2022'],
      featureLiCls: ['clients', 'counters', 'roles', 'counters', 'years'],
      live: 'https://kusilaw.github.io/food_recipies/dist/',
      source: 'https://github.com/kusiLaw/food_recipies',
      description: 'Food Recipe is a capstone project app that displays food recipes for a restaurant using APIs.'
      + ' Users can leave comments, like, and make reservations.',

    },

    card2: {
      topic: 'Web Dev Courses',
      technologies: ['HTML', 'Rails', 'CSS', 'JavaScript'],
      technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
      image: './images/webdevl.png',
      feature: ['Web', './images/Counter.png', 'Full Stack Dev', './images/Counter.png', '2022'],
      featureLiCls: ['clients', 'counters', 'roles', 'counters', 'years'],
      live: 'https://kusilaw.github.io/web-dev-course/',
      source: 'https://github.com/kusiLaw/web-dev-course',
      description: ' A simple demo web development website that allows users to sign up for a course.'
      + ' For demonstration purposes, only the home and about section has been fully implemented on different screen sizes.',
    },

    card3: {
      topic: 'Countries Fact',
      technologies: ['React', 'CSS', 'JavaScript'],
      technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
      image: './images/contry_fact.png',
      feature: ['Web', './images/Counter.png', 'Full Stack Dev', './images/Counter.png', '2022'],
      featureLiCls: ['clients', 'counters', 'roles', 'counters', 'years'],
      live: 'https://mellifluous-begonia-3df97c.netlify.app/',
      source: 'https://github.com/kusiLaw/countries_information',
      description: 'Countries Fact is a simple react capstone project that displays information about each country around the world. '
     + ' Users can sort the countries according to continents. Built with React.',

    },

    card4: {
      topic: 'Budget App',
      technologies: ['Rails', 'CSS', 'HTML'],
      technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
      image: './images/budget.png',
      feature: ['Web', './images/Counter.png', 'Full Stack Dev', './images/Counter.png', '2022'],
      featureLiCls: ['clients', 'counters', 'roles', 'counters', 'years'],
      live: 'https://budgisee.onrender.com/',
      source: 'https://github.com/kusiLaw/budget_app',
      description: ' BudgiSEE is a simple mobile web application for managing budgets.'
      + ' Users can create a new category and add all expenses that belong to that category. Built with Ruby on Rails.',
    },

  },

  mobile: {

    card2: {
      topic: 'Web Dev Courses',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologiesLiCls: ['tag', 'tag', 'tag'],
      image: './images/webdevl.png',
      feature: ['Web', './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
      featureLiCls: ['clients', 'counters', 'roles', 'counters', 'years'],
      live: 'https://kusilaw.github.io/web-dev-course/',
      source: 'https://github.com/kusiLaw/web-dev-course',
      description: 'A simple demo web development website that allows users to sing up to a course.'
      + 'For demonstration purposes, only the home and about section has been fully implemented on different screen sizes',
    },
  },
};

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

function createSkeletonElementStructure() {
  const titleH2 = createMyElement('h2', 'titleH2');// , "title")

  // close x level 1
  const closeContainer = createMyElement('div', 'closeContainer');
  const toggleBtn = createMyElement('img', 'img-close');
  toggleBtn.setAttribute('src', './images/x-black.svg');
  closeContainer.appendChild(toggleBtn);

  const titleClose = createMyElement('div', 'titleClose');
  titleClose.appendChild(titleH2);
  titleClose.appendChild(closeContainer);

  const frame2 = createMyElement('div', 'Frame-2');// , "frame2")
  const ul = createMyElement('ul', 'ul-list');
  frame2.appendChild(ul);

  const primaryText = createMyElement('div', 'primaryText'); // "primary-text")
  primaryText.appendChild(titleClose);
  primaryText.appendChild(frame2);

  // the image 1
  const snapShoot = createMyElement('div', 'snapShoot'); // "snapshoot")
  const imgDetails = createMyElement('img', 'imgDetails'); // 'img-details');
  // imgDetails.setAttribute('src', './../images/x.svg');
  snapShoot.appendChild(imgDetails);

  const primaryTextOfText = createMyElement('div', 'primaryTextOfText'); // "primary-text_text")
  const primaryTextOfTextP = createMyElement('p', 'primaryTextOfTextP');
  primaryTextOfText.appendChild(primaryTextOfTextP);

  const tags = createMyElement('div', '', 'tags');
  const tagsUl = createMyElement('ul', 'tagsUl');
  tags.appendChild(tagsUl);

  const action = createMyElement('div', 'actionbtn', 'action');
  const btnSLink = createMyElement('a', 'action-button-source-link');
  const btnLLink = createMyElement('a', 'action-button-live-link');
  btnSLink.setAttribute('target', '_blank');
  btnLLink.setAttribute('target', '_blank');

  const liveIcon = createMyElement('img', 'liveIcon'); // 'img-details');
  liveIcon.setAttribute('src', './images/live.svg');
  liveIcon.setAttribute('alt', 'live icon');

  const sourceIcon = createMyElement('img', 'sourceIcon'); // 'img-details');
  sourceIcon.setAttribute('src', './images/git.svg');
  sourceIcon.setAttribute('alt', 'github icon');

  btnLLink.textContent = 'See live';
  btnSLink.textContent = 'See Source';

  btnLLink.appendChild(liveIcon);
  btnSLink.appendChild(sourceIcon);

  action.appendChild(btnLLink);
  action.appendChild(btnSLink);

  const tagsAndButton = createMyElement('div', 'tagsAndButton');// "action")
  tagsAndButton.appendChild(tags);
  tagsAndButton.appendChild(action);

  const leftBlockDescriptions = createMyElement('div', 'leftBlockDescriptions');// , "left-block")
  leftBlockDescriptions.appendChild(primaryTextOfText);
  leftBlockDescriptions.appendChild(tagsAndButton);
  // leftBlockDescriptions.appendChild(action)

  const cardContainer = createMyElement('div', 'cardContainer', 'card-works dynamic');
  cardContainer.appendChild(primaryText);
  cardContainer.appendChild(imgDetails);
  cardContainer.appendChild(leftBlockDescriptions);
  // cardContainer.appendChild(action)

  // console.log(cardContainer);
  return cardContainer;
}

function getDoc(clsOrId) {
  return document.querySelector(clsOrId);
}

function generateUlList(ul, liClass, iter) {
  let li;
  for (let i = 0; i < iter.length; i += 1) {
    li = createMyElement('li', '', liClass[i]);

    // test if list is a path, then insert with img tag
    if (/.\/\w*/.test(iter[i])) {
      // console.log("image found" + iter[i])
      const a = createMyElement('img');
      a.setAttribute('src', iter[i]);
      a.setAttribute('alt', 'dot');
      li.appendChild(a);
      ul.appendChild(li);
    } else {
      li.textContent = iter[i];
      ul.appendChild(li);
    }
  }
}

function populateContent(desktopMobversion = null,
  cardNo = null) {
  if (desktopMobversion === null) {
    // nothing to populate
    return;
  }

  // insert image
  const img = getDoc('#imgDetails');
  img.setAttribute('src', cardNo.image);
  img.setAttribute('alt', 'work');

  // set tittle
  getDoc('#titleH2').textContent = cardNo.topic;

  // feature
  generateUlList(getDoc('#ul-list'), cardNo.featureLiCls, cardNo.feature);

  // add description
  getDoc('#primaryTextOfTextP').textContent = cardNo.description;

  generateUlList(getDoc('#tagsUl'), cardNo.technologiesLiCls, cardNo.technologies);

  // update link
  getDoc('#action-button-live-link').setAttribute('href', cardNo.live);
  getDoc('#action-button-source-link').setAttribute('href', cardNo.source);
}

function plugTOParent() {
  if (!document.querySelector('#cardContainer')) {
    document.body.insertBefore(createSkeletonElementStructure(), document.body.children[0]);
  } else {
    document.querySelector('#cardContainer').remove();
    document.body.insertBefore(createSkeletonElementStructure(), document.body.children[0]);
  }
}
// plugTOParent()

// let detailContent = document.querySelector('#cardContainer')

document.querySelector('#seeProjectMC1').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card4);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectMC2').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.mobile, store.mobile.card2);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectMC3').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card3);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectMC4').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card1);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

// ------------------------
document.querySelector('#seeProjectDC1').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card4);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectDC2').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card2);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectDC3').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card3);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});

document.querySelector('#seeProjectDC4').addEventListener('click', (event) => {
  plugTOParent();
  populateContent(store.desktop, store.desktop.card1);
  document.querySelector('#cardContainer').style.display = 'flex';
  event.stopPropagation();

  document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove();
    event.stopPropagation();
  });
});
