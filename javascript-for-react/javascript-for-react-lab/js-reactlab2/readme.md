### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร

        ```
        let animal = {
            jumps: null
        };

        let rabbit = {
            __proto__: animal,
            jumps: true
        };


        alert( rabbit.jumps );

        delete rabbit.jumps;

        alert( rabbit.jumps );

        delete animal.jumps;

        alert( rabbit.jumps );

        ```


    2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ pockets → bed → table → head.

        ```
        let pockets = {
            money: 2000,
        };

        let bed = {
            sheet: 1,
            pillow: 2,
        };
        
        let table = {
            pen: 3,
        };
        
        let head = {
            glasses: 1,
        };
        ```


    3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

        ```
        let animals = {
            eat() {
            this.full = true;
            }
        };
    
        let rabbits = {
            __proto__: animals
        };
    
        rabbits.eat();
        ```


    4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี

        ```
        let hamster = {
            stomach: [],

            eat(food) {
                this.stomach.push(food);
            }
        };

        let speedy = {
            __proto__: hamster
        };

        let lazy = {
            __proto__: hamster
        };

        // This one found the food
        speedy.eat("apple");
        alert( speedy.stomach ); // apple

        // This one also has it, why? fix please.
        alert( lazy.stomach ); // apple
        ```

