"use strict";

const images = [
  { id: "1", url: "./imgs/freeza.webp" },
  { id: "2", url: "./imgs/goku.jpg" },
  { id: "3", url: "./imgs/majin-buu-01.jpg" },
  { id: "4", url: "./imgs/piccolo.jpg" },
  { id: "5", url: "./imgs/vegeta.jpg" },
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, containerItems) => {
  images.forEach((images) => {
    containerItems.innerHTML += `

        <div class="item">

        <img src= '${images.url}'
        </div>
        
        `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = ()=>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}


const next = () =>{

    const lastItem = items[items.length -1]

    containerItems.insertBefore(lastItem, items[0])

    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)
