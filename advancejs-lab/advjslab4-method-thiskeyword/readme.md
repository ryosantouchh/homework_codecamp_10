### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. การทำงานของ code ดังกล่าวได้ อะไรออกมา
        ```
        let user = {
            name: "John",
            go: function() { alert(this.name) }
        };

        (user.go)()
        ```


    2. การทำงานของ code ดังกล่าวได้อะไรออกมา
        ```
        function makeUser() {
            return {
                name: "John",
                ref: this
            };
        };

        let user = makeUser();

        alert( user.ref.name ); // what's the result??
        ```


    3. สร้าง object calculator จาก 3 methods นี้:
        - read() ใช้ prompt สำหรับรับค่ามา 2 ค่า และเก็บเป็น object properties
        - sum() คืนค่าผลบวกของ 2 ค่านั้น
        - mul() คืนค่าผลคูณของ 2 ค่านั้น

        ```
        let calculator = {
            // ... your code ...
        };

        calculator.read()
        alert( calculator.sum() );
        alert( calculator.mul() );
        ```


    4. ให้ object ชื่อ ladder มี method ขึ้นและลง

        ```
        let ladder = {
            step = 0,
            up() {
                this.step++;
            },
            down() {
                this.step--;
            },
            showStep: function() { // shows the current step
                alert( this.step );
            }
        };
        ```

        โดยให้สามารถเรียก function แบบนี้ได้
        ```
        ladder.up().up().down().showStep(); // 1
        ```