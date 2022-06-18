### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
        - ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma

    
    2. สร้าง object rabbit ด้วย new keyword

        ```
        function Rabbit(name) {
            this.name = name;
        }

        Rabbit.prototype.sayHi = function() {
            alert(this.name);
        };
        
        let rabbit = new Rabbit("Rabbit");
        ```

        - คำถามคือคำสั่งทั้งหมดทำงานเหมือนกันหรือไม่
        
        ```
        rabbit.sayHi();
        Rabbit.prototype.sayHi();
        Object.getPrototypeOf(rabbit).sayHi();
        rabbit.__proto__.sayHi();
        ```