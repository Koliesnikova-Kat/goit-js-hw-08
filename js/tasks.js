/*
? Деструктуризуй об'єкт таким чином, щоб отримати значення username, firstName, lastName 
*/

// const user = {
//   id: 1,
//   username: "harry_potter",
//   profile: {
//     firstName: "Harry",
//     lastName: "Potter",
//     age: 25,
//   },
// };

// const {
//   username,
//   profile: { firstName, lastName },
// } = user;

// console.log(`Ім'я користувача (за нікнеймом): ${username}`);
// console.log(`Ім'я користувача: ${firstName}`);
// console.log(`Прізвище користувача: ${lastName}`);





/*
? Допиши функцію таким чином, щоб кожна властивість об'єкта product була незалежним параметром 
*/

// const product = {
//   title: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

//* Деструктуризація в середині функції

// function displayProductlnfo(ProductInfo) {
//   const {
//     title,
//     price,
//     category,
//     details: { brand, color, weight },
//   } = product;

//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log(`Деталі:`);
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Baгa: ${weight} кг`);
// };

// displayProductlnfo(product);

//? Деструктуризація в параметрах функції

// function displayProductlnfo({
//   title,
//   price,
//   category,
//   details: { brand, color, weight },
// }) {
//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log(`Деталі:`);
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Baгa: ${weight} кг`);
// }

// displayProductlnfo(product);





/*
? Необхідно зробити рефакторинг функції calculateHousePerimeter так, щоб вона приймала об'єкт з параметрами будинку, 
? включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.
*/

// // function calculateHousePerimeter(sides) {
// //   return sides.sideA + sides.sideB + sides.sideC + sides.sideD;
// // };

// function calculateHousePerimeter({sideA, sideB, sideC, sideD}) {
//   return sideA + sideB + sideC + sideD;
// };

// const houseSides = {
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// };

// const perimeter = calculateHousePerimeter(houseSides);

// console.log(`Периметр будинку: ${perimeter}`);





/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
*/

// const transformUsername = user => {
//   const { firstName, lastName, ...newUser } = user;
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...newUser,
//   }
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercenamail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );