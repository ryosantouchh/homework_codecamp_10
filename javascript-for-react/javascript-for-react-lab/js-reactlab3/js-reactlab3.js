/*
1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
*/
    function Rabbit() {}
        Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    // แทรกบรรทัดนี้ด้วยคำสั่งทั้ง 4 แบบแล้วดูว่า จะ alert (rabbit.eats) ได้อะไร
        // Rabbit.prototype = {}; // alert (rabbit.eats) = true
        // Rabbit.prototype.eats = false; // alert (rabbit.eats) = false
        // delete rabbit.eats; // alert (rabbit.eats) = true
        // delete Rabbit.prototype.eats; // alert (rabbit.eats) = undefined


    alert( rabbit.eats ); // true

/*
2.ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
*/
    function OB () {};

    let obj = new OB();
    // obj = OB() {}

    let obj2 = new obj.constructor();

    // เขียนแบบนี้ได้ เพราะเป็นการไปชี้ตัวเดียวกัน

