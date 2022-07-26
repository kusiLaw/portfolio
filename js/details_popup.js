let store = {

    desktop: {
        card1: {
            topic: 'Tonic',
            technologies: ['html', 'css', 'javaScript'],
            technologiesLiCls:['tag','tag','tag'],
            image: "./images/Snapshoot-Portfolio-desktop-1.png",
            feature: ["Canopy", './images/Counter.png', 'Back End Dev', './images/Counter.png', '2022'],
            featureLiCls: ['client','counter','role','counter',"year"],
            live: "",
            source: ""
        },

        card2: {
            topic: 'Multi-Post Stories',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        },

        card3: {
            topic: 'Facebook 360',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        },

        card4: {
            topic: 'Uber Navigation',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        }

    },

    mobile: {
        card1: {
            topic: 'Uber Navigation',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        },

        card2: {
            topic: 'Uber Navigation',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        },

        card3: {
            topic: 'Uber Navigation',
            technologies: ['html', 'css', 'javaScript'],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
        },

        card4: {
            topic: 'Uber Navigation',
            technologies: [],
            image: "./images/",
            feature: [],
            live: "",
            source: ""
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
    const cardContainer = createMyElement('div', "cardContainer", "card-works dynamic")
    //close x
    let closeContainer = createMyElement('div', "closeContainer")
    let toggleBtn = createMyElement('img', 'img-close');
    toggleBtn.setAttribute('src', './images/x.svg');
    closeContainer.appendChild(toggleBtn)

    let snapShoot = createMyElement('div', "snapShoot", "snapshoot")
    let imgDetails = createMyElement('img', "imgDetails", 'img-details');
    // imgDetails.setAttribute('src', './../images/x.svg');
    snapShoot.appendChild(imgDetails)


    let leftBlockDescriptions = createMyElement('div', 'leftBlockDescriptions', "left-block")
    let primaryText = createMyElement('div', "primaryText", "primary-text")
    let titleH2 = createMyElement('h2', "titleH2", "title")
    
    let frame2 = createMyElement('div', "Frame-2", "frame2")
    let ul = createMyElement('ul', "ul-list")
    frame2.appendChild(ul)

    primaryText.appendChild(titleH2)
    primaryText.appendChild(frame2)

    let primaryTextOfText = createMyElement('div', 'primaryTextOfText', "primary-text_text")
    let primaryTextOfTextP = createMyElement('p', "primaryTextOfTextP")
    primaryTextOfText.appendChild(primaryTextOfTextP)

    let tags = createMyElement('div', "", "tags")
    let tagsUl = createMyElement('ul', "tagsUl")
    tags.appendChild(tagsUl)

    let action = createMyElement("div", "", "action")
    let actionBtnSource = createMyElement("button", "action-button")
    let actionBtnLive = createMyElement("button", "action-button")
    actionBtnLive.textContent = "See live"
    actionBtnSource.textContent = "See Source"
    action.appendChild(actionBtnLive)
    action.appendChild(actionBtnSource)
    

    leftBlockDescriptions.appendChild(primaryText)
    leftBlockDescriptions.appendChild(primaryTextOfText)
    leftBlockDescriptions.appendChild(tags)
    leftBlockDescriptions.appendChild(action)

    cardContainer.appendChild(closeContainer)
    cardContainer.appendChild(snapShoot)
    cardContainer.appendChild(leftBlockDescriptions)

    console.log(cardContainer)
    return cardContainer
}

function plugTOParent(){
    document.querySelector("#my-works").appendChild(createSkeletonElementStructure())
}

function getDoc(clsOrId){
    return document.querySelector(clsOrId)
}

function generateUlList(ul, liClass, iter){
    for(let i = 0; i< iter.length; i += 1){
        li = createMyElement('li', '',liClass[i]);
        
        // test if list is img, then insert with img tag
        if (/.\/\w*/.test(iter[i])){
            // console.log("image found" + iter[i])
            let a = createMyElement('a');
            a.setAttribute('src', iter[i]);
            a.setAttribute('alt', 'dot');
            li.appendChild(a)
            ul.appendChild(li)
        }else{
            li.textContent = iter[i]
            ul.appendChild(li)
        }

        
    }
}

plugTOParent()

function populateContent(desktop_version = null,
    cardNo = null
){
    
    if (desktop_version === null){
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
}

populateContent(store.desktop, store.desktop.card1)
// console.log(createSkeletonElementStructure())