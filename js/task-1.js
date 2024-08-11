const categoriesCount = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesCount.length);

categoriesCount.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
