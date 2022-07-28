const store = {

    desktop: {
        card1: {
            topic: 'Tonic',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag'],
            image: "./images/Snapshoot-Portfolio-desktop-1.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card2: {
            topic: 'Multi-Post Stories',
            technologies: ['html', "Ruby on rails", 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
            image: "./images/Snapshoot-Portfolio-desktop-2.png",
            feature: ["FACEBOOK", './images/Counter.png', 'Full Stack Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card3: {
            topic: 'Facebook 360',
            technologies: ['html', "Ruby on rails", 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
            image: "./images/Snapshoot-Portfolio-desktop-3.png",
            feature: ["FACEBOOK", './images/Counter.png', 'Full Stack Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card4: {
            topic: 'Uber Navigation',
            technologies: ['html', "Ruby on rails", 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag', 'tag'],
            image: "./images/Snapshoot-Portfolio-desktop-4.png",
            feature: ["Uber", './images/Counter.png', 'Load Developer', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        }

    },

    mobile: {
        card1: {
            topic: 'Tonic',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag'],
            image: "./images/Snapshoot.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card2: {
            topic: 'Multi-Post Stories',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag'],
            image: "./images/snapshoot2.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card3: {
            topic: 'Tonic',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag'],
            image: "./images/snapshoot3.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        },

        card4: {
            topic: 'Multi-Post Stories',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls: ['tag', 'tag', 'tag'],
            image: "./images/snapshoot4.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['clients', 'counters', 'roles', 'counters', "years"],
            live: "https://kusilaw.github.io/portfolio/",
            source: "https://github.com/kusiLaw"
        }

    },

    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\
           printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text \
           of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
            when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.\
             Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem\
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
}

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

    let titleH2 = createMyElement('h2', "titleH2")//, "title")

    //close x level 1
    let closeContainer = createMyElement('div', "closeContainer")
    let toggleBtn = createMyElement('img', 'img-close');
    toggleBtn.setAttribute('src', './images/x-black.svg');
    closeContainer.appendChild(toggleBtn)

    const titleClose = createMyElement('div', "titleClose")
    titleClose.appendChild(titleH2)
    titleClose.appendChild(closeContainer)

    let frame2 = createMyElement('div', "Frame-2")//, "frame2")
    let ul = createMyElement('ul', "ul-list")
    frame2.appendChild(ul)

    let primaryText = createMyElement('div', "primaryText",) //"primary-text")
    primaryText.appendChild(titleClose)
    primaryText.appendChild(frame2)

    // the image 1
    let snapShoot = createMyElement('div', "snapShoot",) // "snapshoot")
    let imgDetails = createMyElement('img', "imgDetails",) // 'img-details');
    // imgDetails.setAttribute('src', './../images/x.svg');
    snapShoot.appendChild(imgDetails)

    let primaryTextOfText = createMyElement('div', 'primaryTextOfText',) // "primary-text_text")
    let primaryTextOfTextP = createMyElement('p', "primaryTextOfTextP")
    primaryTextOfText.appendChild(primaryTextOfTextP)

    let tags = createMyElement('div', "", "tags")
    let tagsUl = createMyElement('ul', "tagsUl")
    tags.appendChild(tagsUl)

    let action = createMyElement("div", "actionbtn", "action")
    let btnSLink = createMyElement('a', "action-button-source-link")
    let btnLLink = createMyElement('a', "action-button-live-link")
    
    let liveIcon = createMyElement('img', "liveIcon",) // 'img-details');
    liveIcon.setAttribute('src', './images/live.svg');
    liveIcon.setAttribute('alt', 'live icon');

    let sourceIcon = createMyElement('img', "sourceIcon",) // 'img-details');
    sourceIcon.setAttribute('src', './images/git.svg');
    sourceIcon.setAttribute('alt', 'github icon');

    btnLLink.textContent = "See live"
    btnSLink.textContent = "See Source"

    btnLLink.appendChild(liveIcon)
    btnSLink.appendChild(sourceIcon)
    
    action.appendChild(btnLLink)
    action.appendChild(btnSLink)

    let tagsAndButton = createMyElement("div", "tagsAndButton")// "action")
    tagsAndButton.appendChild(tags)
    tagsAndButton.appendChild(action)


    let leftBlockDescriptions = createMyElement('div', 'leftBlockDescriptions')//, "left-block")
    leftBlockDescriptions.appendChild(primaryTextOfText)
    leftBlockDescriptions.appendChild(tagsAndButton)
    // leftBlockDescriptions.appendChild(action)

    const cardContainer = createMyElement('div', "cardContainer", "card-works dynamic")
    cardContainer.appendChild(primaryText)
    cardContainer.appendChild(imgDetails)
    cardContainer.appendChild(leftBlockDescriptions)
    // cardContainer.appendChild(action)

    console.log(cardContainer)
    return cardContainer
}

function createSkeletonElementStructure2() {

    let titleH2 = createMyElement('h2', "titleH2")//, "title")

    //close x level 1
    let closeContainer = createMyElement('div', "closeContainer")
    let toggleBtn = createMyElement('img', 'img-close');
    toggleBtn.setAttribute('src', './images/x-black.svg');
    closeContainer.appendChild(toggleBtn)

    const titleClose = createMyElement('div', "titleClose")
    titleClose.appendChild(titleH2)
    titleClose.appendChild(closeContainer)

    let frame2 = createMyElement('div', "Frame-2")//, "frame2")
    let ul = createMyElement('ul', "ul-list")
    frame2.appendChild(ul)

    let primaryText = createMyElement('div', "primaryText",) //"primary-text")
    primaryText.appendChild(titleClose)
    primaryText.appendChild(frame2)

    // the image 1
    let snapShoot = createMyElement('div', "snapShoot",) // "snapshoot")
    let imgDetails = createMyElement('img', "imgDetails",) // 'img-details');
    // imgDetails.setAttribute('src', './../images/x.svg');
    snapShoot.appendChild(imgDetails)

    let primaryTextOfText = createMyElement('div', 'primaryTextOfText',) // "primary-text_text")
    let primaryTextOfTextP = createMyElement('p', "primaryTextOfTextP")
    primaryTextOfText.appendChild(primaryTextOfTextP)

    let tags = createMyElement('div', "", "tags")
    let tagsUl = createMyElement('ul', "tagsUl")
    tags.appendChild(tagsUl)

    let action = createMyElement("div", "actionbtn", "action")
    let btnSLink = createMyElement('a', "action-button-source-link")
    let btnLLink = createMyElement('a', "action-button-live-link")

    btnLLink.textContent = "See live"
    btnSLink.textContent = "See Source"

    action.appendChild(btnLLink)
    action.appendChild(btnSLink)

    let leftBlockDescriptions = createMyElement('div', 'leftBlockDescriptions')//, "left-block")
    leftBlockDescriptions.appendChild(primaryTextOfText)
    leftBlockDescriptions.appendChild(tags)
    // leftBlockDescriptions.appendChild()

    const cardContainer = createMyElement('div', "cardContainer", "card-works dynamic")
    cardContainer.appendChild(primaryText)
    cardContainer.appendChild(imgDetails)
    cardContainer.appendChild(leftBlockDescriptions)
    cardContainer.appendChild(action)

    console.log(cardContainer)
    return cardContainer
}


function getDoc(clsOrId) {
    return document.querySelector(clsOrId)
}

function generateUlList(ul, liClass, iter) {
    for (let i = 0; i < iter.length; i += 1) {
        li = createMyElement('li', '', liClass[i]);

        // test if list is a path, then insert with img tag
        if (/.\/\w*/.test(iter[i])) {
            // console.log("image found" + iter[i])
            let a = createMyElement('img');
            a.setAttribute('src', iter[i]);
            a.setAttribute('alt', 'dot');
            li.appendChild(a)
            ul.appendChild(li)
        } else {
            li.textContent = iter[i]
            ul.appendChild(li)
        }


    }
}



function populateContent(desktop_version = null,
    cardNo = null
) {

    if (desktop_version === null) {
        // nothing to populate
        return
    }

    //insert image
    let img = getDoc('#imgDetails')
    img.setAttribute('src', cardNo.image);
    img.setAttribute('alt', "work")

    // set tittle
    getDoc("#titleH2").textContent = cardNo.topic

    // feature
    generateUlList(getDoc("#ul-list"), cardNo.featureLiCls, cardNo.feature)

    //add description
    getDoc("#primaryTextOfTextP").textContent = store.description

    generateUlList(getDoc("#tagsUl"), cardNo.technologiesLiCls, cardNo.technologies)

    // update link
    getDoc("#action-button-live-link").setAttribute("href", cardNo.live)
    getDoc("#action-button-source-link").setAttribute("href", cardNo.source)

}


function plugTOParent() {
     if (!document.querySelector('#cardContainer')){
        document.body.insertBefore(createSkeletonElementStructure(), document.body.children[0]);
        console.log("not there creating")
    }else{
        console.log("there creating removing")
        document.querySelector('#cardContainer').remove()
        document.body.insertBefore(createSkeletonElementStructure(), document.body.children[0]);
     }

}
// plugTOParent()

// let detailContent = document.querySelector('#cardContainer')

document.querySelector('#seeProjectMC1').addEventListener('click', (event) => {

    plugTOParent()
    populateContent(store.mobile, store.mobile.card1)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();
    
    document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove()
    event.stopPropagation();
     });
});
 



document.querySelector('#seeProjectMC2').addEventListener('click', (event) => {

    plugTOParent()
    populateContent(store.mobile, store.mobile.card2)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
    document.querySelector('#cardContainer').remove()
    event.stopPropagation();    
    });
});

document.querySelector('#seeProjectMC3').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.mobile, store.mobile.card3)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });

});

document.querySelector('#seeProjectMC4').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.mobile, store.mobile.card4)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });
});
 
document.querySelector('#seeProjectDC1').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.desktop, store.desktop.card1)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });

  });

document.querySelector('#seeProjectDC2').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.desktop, store.desktop.card2)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });
});

document.querySelector('#seeProjectDC3').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.desktop, store.desktop.card3)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });
});

document.querySelector('#seeProjectDC4').addEventListener('click', (event) => {
    plugTOParent()
    populateContent(store.desktop, store.desktop.card4)
    document.querySelector('#cardContainer').style.display = "flex"
    event.stopPropagation();

    document.querySelector('#img-close').addEventListener('click', (event) => {
        document.querySelector('#cardContainer').remove()
        event.stopPropagation();
         });
});





