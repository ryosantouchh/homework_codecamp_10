/*

1. มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs 
    ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma

*/

    // let dictionary = Object.create(null); ของเดิมเป็นแบบนี้ ให้เขียนแบบใหม่ด้านล่าง

    let dictionary = Object.create( null , { // property descriptor
        toString : {
            value() {
                return Object.keys(this).join(',')
                // Object.keys > ได้ Array ออกมา
            }
        }
    });

    // add some data
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__ is a regular property key here

    // only apple and __proto__ are in the loop
    for(let key in dictionary) {
        alert(key); // "apple", then "__proto__"
    }

    // your toString in action
    alert(dictionary); // "apple,__proto__"


/*

2. สร้าง object rabbit ด้วย new keyword

*/

    function Rabbit(name) {
        this.name = name;
    }

    Rabbit.prototype.sayHi = function() {
        alert(this.name);
    };
    
    let rabbit = new Rabbit("Rabbit");

    // คำถามคือ code คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่ ????

    rabbit.sayHi(); // Rabbit
    Rabbit.prototype.sayHi(); // undefined เพราะ Rabbit ไม่มี name เป็นของตัวเอง
    Object.getPrototypeOf(rabbit).sayHi(); // undefined
    // Object.getPrototypeOf(rabbit) === Rabbit.prototype > true
    // Object.getPrototypeOf(obj) คือการเป็นดึงเอาค่า prototype
    rabbit.__proto__.sayHi(); // undefined



  