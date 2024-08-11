const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];



// ! Спосіб 1 //
const createNewTags = (pictures) => {
  const listEl = document.createElement("li");
  listEl.classList.add("list-item");

  const imgEl = document.createElement("img");
  imgEl.classList.add("img");
  imgEl.src = pictures.url;
  imgEl.alt = pictures.alt;

  listEl.append(imgEl);

  return listEl;
};

const galleryArr = images.map((image) => createNewTags(image));

const galleryList = document.querySelector(".gallery");
galleryList.append(...galleryArr);

console.log(galleryList);



// ! Спосіб 2 //
// const list = document.querySelector('.gallery');

// const markup = images
//   .map(image => `<li class='list-item'><img class='img' src='${image.url}' alt='${image.alt}' /></li>`)
//   .join('');
// console.log(markup);

// list.innerHTML = markup;
// console.log(list);



// ! Спосіб 3 //
// const list = document.querySelector('.gallery');

// const markup = images
//   .map(image => `<li class='list-item'><img class='img' src='${image.url}' alt='${image.alt}' /></li>`)
//   .join('');
// console.log(markup);

// list.insertAdjacentHTML('afterbegin', markup);
// console.log(list);
