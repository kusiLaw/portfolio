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
        a = create_element('a', content[i])
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

    // console.log(container)
    return container

}

function insert_to_page() {
    document.body.insertBefore(create_menu(), document.body.children[0])

}

function remove_element(el){
    el.remove()
}



btn = document.querySelector('#toggle-menu');
btn.addEventListener("click", function(event){
    this.style.display = "none";
    insert_to_page();
    let first_rem = document.body.firstElementChild
    let img_close = document.getElementById('img-close')
    // let click = true
    event.stopPropagation()
    
    // if(!click) {
    let links  = document.querySelector('.js_nav li');
    img_close.addEventListener("click", function(){
        // console.log(event.currentTarget)
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()

    })
    
    document.querySelector('#Portfolio').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
   
    document.querySelector('#About').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
    document.querySelector('#Contact').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
})


function remove_element(el){
    el.remove()
}



btn = document.querySelector('#toggle-menu');
btn.addEventListener("click", function(event){
    this.style.display = "none";
    insert_to_page();
    let first_rem = document.body.firstElementChild
    let img_close = document.getElementById('img-close')
    // let click = true
    event.stopPropagation()
    
    // if(!click) {
    let links  = document.querySelector('.js_nav li');
    img_close.addEventListener("click", function(){
        // console.log(event.currentTarget)
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()

    })
    
    document.querySelector('#Portfolio').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
   
    document.querySelector('#About').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
    document.querySelector('#Contact').addEventListener("click", function(){
        remove_element(first_rem )
        btn.style.display = "inline";
        event.stopPropagation()
    })
})