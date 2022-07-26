const btn = document.querySelector('#toggle-menu');

function create_element(el, ids = "", cl = "") {
    let doc = document.createElement(el)
    
    if (ids !== "") {
        doc.id = ids
    }

    if (cl !== "") {
        doc.className = cl
    }
    return doc
}

function create_menu() {
    let container = create_element("div", "nav-toggle")

    // create button
    const toggle_btn_container = create_element('div', 'close-button-container')
    const toggle_btn = create_element('img', 'img-close')
    toggle_btn.setAttribute('src', './../images/x.svg')
    toggle_btn_container.appendChild(toggle_btn)
    container.appendChild(toggle_btn_container)

    // create menu list
    let ul = create_element('ul', "js_nav", 'js-nav');
    let li, a;
    let content = ["Portfolio", "About", "Contact"];
    let inner_links = ["#my-works", "#me", "#contact"]
    
    // create individual li and aattact to ul
    for (let i = 0; i < content.length; i++) {
        li = create_element('li', "", 'js-nav-items')
        a = create_element('a', "", 'nav-items-a')
        a.setAttribute('href', inner_links[i] );
        a.textContent = content[i]
        li.appendChild(a)
        ul.appendChild(li)
    }
    // add ul to container
    container.appendChild(ul)

    //create buttom img
    const toggle_img_container = create_element('div', 'menu-img')
    const toggle_img = create_element('img')
    toggle_img.setAttribute('src', './../images/Shape.png')
    toggle_img_container.appendChild(toggle_img)

    container.appendChild(toggle_img_container)

    console.log(container)
    return container

}

function remove_menu(obj){
    obj.remove()
}

function main() {
    //hide menu
    btn.style.display = "none"
    // console.log(btn)
    // const insert_place = document.querySelector('.main');

    // document.body.appendChild(create_menu())
    document.body.insertBefore(create_menu(), document.body.children[0])

    // const mobile_menu_css = document.createElement('link');
    // mobile_menu_css.setAttribute('rel', 'stylesheet');
    // mobile_menu_css.setAttribute('href', './css/mobile_menu.css'); 
    // document.head.appendChild(mobile_menu_css);
}

btn.addEventListener("click", main)
let toggle_btn = document.querySelector('#nav-toggle')
console.log('--------')
console.log(toggle_btn)
document.getElementById('nav-toggle').onclick = toggle_btn.remove(); // modify

// toggle_btn.addEventListener('click',document.body.removeChild(toggle_btn))