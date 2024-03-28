// try {
//     console.log("work");

//     throw new Error("Xato")
// } catch (error) {
//     console.log(error.message);
// }
// finally{
//     console.log("Finally");
// }

// let product = {
//     id: 523,
//     title: "Plisos avalon",
//     price: 450000,
//     desc: "Plisos zo'r ishledi, narxi ham hamyonbop"
// }

// let mapObj = new Map();

// mapObj.set("id", 523);
// mapObj.set("title", "Plisos avalon");
// console.log(mapObj.get("title")); // get qidirib topadi
// console.log(mapObj.has("title")); // has malumot bor yoki yoqligini aytadi, treu yoki false
// console.log(mapObj.size); // size huddi length ga o'xshab ishledi, obyektni ichida nechta malumot borligini qaytaradi
// mapObj.forEach((value, key) => {
//     console.log(value, key);
// })

// let setObj = new Set([1,2,3,3,5,6,6,7])

// let id = Math.floor(Math.random() * 1000);

// let newProduct = {
//     product_id: id,
//     shop: "Avalon",
//     village: "Fergana",
//     ...product,
// }

// ... 3 ta nuqta bu spread operatori bo'lib nusxalab berish vazifasini bajaradi

// console.log(newProduct);

// function math_max(x, y, ...items) {
//     console.log(Math.max(x, y, ...items));
// }

// math_max(1,2,2,3,4,5,6,7);

//  destructuring 

// let product = {
//     id: 523,
//     title: "Plisos avalon",
//     price: 450000,
//     desc: "Plisos zo'r ishledi, narxi ham hamyonbop",
//     types: ["1000w", "2000w"]
// }

// // product.title // shunday qilib title ni olib olmasdan, qisqartirib uni 1 ta obyektni ichiga berib, anashu obyektni nomini tepadagi obyekt nomi bilan bir xil qilib qo'yishimiz kerak

// let {id, title: newTitle, price, desc, types: [item1, item2]} = product; 
// console.log(id);

// *****************************

// HOMEWORK

// 1

// let arr = [1,2,3,3,4,6,6,4,8,7];
// let setObj = new Set(arr)
// console.log(setObj);

// 2

// function Set(obj){

// }

// 3

// let product = {
//     id: 523,
//     title: "Plisos avalon",
//     price: 450000,
//     desc: "Plisos zo'r ishledi, narxi ham hamyonbop"
// }

// let mapObj = new Map();

// mapObj.set("id", 523);
// mapObj.set("title", "Plisos avalon");
// console.log(mapObj.has("title"));

// 4

// let setObj = new Set([1,2,3,3,5,6,6,7])
// let newObj = setObj.add([11,22,33,55]);
// console.log(newObj);

// 5 

// let product = {
//     id: 523,
//     title: "Plisos avalon",
//     price: 450000,
//     desc: "Plisos zo'r ishledi, narxi ham hamyonbop"
// }

// let mapObj = new Map();

// mapObj.set("id", 523);
// mapObj.set("title", "Plisos avalon");
// console.log(mapObj.size);

// 6
// let arr = [54]
// let setObj = new Set([1,2,3,3,5,6,6,7, ...arr])
// let newObj = setObj.delete(...arr);
// console.log(setObj);

// 7 

// let arr = [1,2,3];
// let newArr = new Set([1,2,3,4,5,6]);
// console.log(newArr.has(arr));

// 8

// let set1 = new Set("apple")
// let set2 = new Set("orange")
// let set3 = set1.add(set2);
// console.log(set3);

// 9 

// let arr = [1,2,3,4,5];
// let newMap = new Map(arr);  
// newMap.set(arr)
// console.log(newMap);