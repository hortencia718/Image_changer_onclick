const img = document.querySelector(".img-main");

// get imgs create an array with key and value of key 
let images = [
    {"src": "https://images.unsplash.com/photo-1625575920349-82458c236e7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80y", "alt": "yarn in darky light room"},
    {"src": "https://images.unsplash.com/photo-1625484330583-765d66e85d8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", "alt":  "boats in green waters"},
    {"src": "https://images.unsplash.com/photo-1625475311582-7f4646634a47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" ,"alt":  "women in the water overhead shot"},
    {"src": "https://images.unsplash.com/photo-1625577379705-1545acfd03c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" ,"alt":  "still life photo of wine and pear deep shadows"},
    {"src": "https://images.unsplash.com/photo-1625575986928-bdccd41eb0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80" ,"alt":  "still life of a vase with purple flowers deep shadow"},
    {"src": "https://images.unsplash.com/photo-1625354447849-3fccc6f955d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" , "alt": "jellyfish in dark waters"},
    {"src": "https://images.unsplash.com/photo-1624973192810-e110ad924ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" , "alt": "pink waters white sandy beach"},
    {"src": "https://images.unsplash.com/photo-1549216714-12599d3fa0e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80" ,     "alt": "blurred trees"}
];

// create function for loading image
function loadImage() {
    let src = img.getAttribute("src");
    let imageInfo = images[Math.floor(Math.random() * images.length)];
    while(src === imageInfo.src){
        imageInfo = images[Math.floor(Math.random() * images.length)];
    }

    img.setAttribute("src", imageInfo.src);
    img.setAttribute("alt", imageInfo.alt);

}

// on click "listen for click "
img.addEventListener("click", () => {
    loadImage();
});

document.body.addEventListener("keydown", e => {
    if(e.key === " "){
        loadImage();
    }
});

// call function 
loadImage();