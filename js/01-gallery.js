import { galleryItems } from "./gallery-items.js";
//import * as basicLightbox from "basiclightbox";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance = null;
function createGallery(listImage) {
  const gallery = listImage
    .map(
      (image) =>
        //`<li class="gallery__image"> <img src=${image.preview} alt=${image.description}> </li>`
        `<li> <div><a href=""><img class="gallery__image"  src=${image.preview} data-source=${image.original} alt="${image.description}"></a></div> </li>`
      //console.log(image.original)
    )
    .join("");

  return gallery;
}
function addElement(callback, listElement, querySelector) {
  querySelector.insertAdjacentHTML("beforeend", callback(listElement));
}
function maxImage(eve) {
  const choseImage = galleryItems.find(
    (element) => element.description === eve.target.alt
  );

  eve.preventDefault();

  instance = basicLightbox.create(`
     <img src=${choseImage.original} width="800" height="600">
 `);
  instance.show();
}
function closeMaxImage(eve) {
  if (eve.key === "Escape") {
    instance.close();
  }
}

addElement(createGallery, galleryItems, gallery);
gallery.addEventListener("click", maxImage);
gallery.addEventListener("keydown", closeMaxImage);
