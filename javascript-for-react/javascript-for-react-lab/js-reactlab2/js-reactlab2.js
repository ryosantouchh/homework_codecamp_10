/*

แบบฝึกหัด
1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร

*/
    let animal = {
        jumps: null
    };

    let rabbit = {
        __proto__: animal,
        jumps: true
    };


    alert( rabbit.jumps ); // true (1)

    delete rabbit.jumps;

    alert( rabbit.jumps ); // null (2)

    delete animal.jumps;

    alert( rabbit.jumps ); // undefined (3)

/*

2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ pockets → bed → table → head.

*/
    let pockets = {
        money: 2000,
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__ : pockets
    };
    
    let table = {
        pen: 3,
        __proto__ : bed
    };
    
    let head = {
        glasses: 1,
        __proto__ : table
    };



/*

3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

*/

    let animals = {
        eat() {
        this.full = true;
        }
    };
    
    let rabbits = {
        __proto__: animals
    };
    
    rabbits.eat();

    // rabbits ได้ไป เนื่องจาก animals เป็น prototype ของ rabbits

/*

4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี

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


*/

    let hamster = {
        eat(food) {
            if (!this.stomach) {
                this.stomach = []; // ให้สร้าง property to this มี value เป็น array structure (obj before the dot !! ***)
                this.stomach.push(food);
            }
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

    speedy.eat("apple");
    alert( speedy.stomach ); // apple

    alert( lazy.stomach ); // undefined
  
  