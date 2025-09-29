function open_modal(){
    document.getElementById("blog-modal").style.display = "flex";
}

function close_modal(){
    document.getElementById("blog-modal").style.display = "none";
}

let slide_index = 1;

show_slides(slide_index);

function plus_slides(n){
    show_slides(slide_index += n);
}

function current_slide(n){
    show_slides(slide_index = n);
}

function show_slides(n){
    let i;
    let slides = document.getElementsByClassName("modal__slide");
    
    if(n > slides.length){
        slide_index = 1;
    }
    if(n < 1){
        slide_index = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slide_index - 1].style.display = "block";
}