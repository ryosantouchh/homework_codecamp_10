### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา

        ```
        function Rabbit() {}
            Rabbit.prototype = {
            eats: true
        };

        let rabbit = new Rabbit();

        // แทรกบรรทัดนี้ด้วยคำสั่งทั้ง 4 แบบแล้วดูว่า จะ alert (rabbit.eats) ได้อะไร
            // Rabbit.prototype = {}; // alert (rabbit.eats) = ?
            // Rabbit.prototype.eats = false; // alert (rabbit.eats) = ?
            // delete rabbit.eats; // alert (rabbit.eats) = ?
            // delete Rabbit.prototype.eats; // alert (rabbit.eats) = ? 

        alert( rabbit.eats ); // true
        ```


    2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
    
        ```
        let obj2 = new obj.constructor();
        ```