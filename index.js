let images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let img_container = document.getElementById("img_container");
let i = 0;

for (let index = 0; index < images.length; index++) {
    let current_img = document.createElement("img");
    current_img.setAttribute("src", images[index]);
    if (index == i) {
        current_img.classList.add("active", "w_100");
    }
    current_img.classList.add("w_100");
    img_container.append(current_img);
}

let goLeft = document.getElementById("goLeft");
let goRight = document.getElementById("goRight");

let imgElements = document.querySelectorAll("#img_container img");
console.log(imgElements);

goLeft.addEventListener("click", function(){
    let imgActive = document.querySelector("img.active");
    imgActive.classList.remove("active");
    i--;
    console.log(i);
    if(i < 0){
        i = images.length - 1;
        console.log("Questo è i nel menter: " + i);
    }
    imgElements[i].classList.add("active");
})

goRight.addEventListener("click", function(){
    let imgActive = document.querySelector("img.active");
    imgActive.classList.remove("active");
    i++;
    console.log(i);
    if(i == images.length){
        i = 0;
    }
    console.log("Questo è i dopo: " + i);
    imgElements[i].classList.add("active");
})