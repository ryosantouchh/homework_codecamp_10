/*
1. Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป
    return ค่า ออกมาเป็น “call : argument1, agrument2”

    function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
        }
        work = spy(work);
        work(1, 2); // 3
        work(4, 5); // 9
        for (let args of work.calls) {
            alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
        }
*/

    function work(a, b) {
        console.log( a + b );
    };

    function spy(func) {

        wrapper.calls = []

        function wrapper (...arr) {
            wrapper.calls.push(arr);
            func.apply(this,arr)
        }

        return wrapper

    };

    work = spy(work);
    work(1, 2); // 3
    work(4, 5); // 9
    for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
    };

    // สรุปเข้าใจง่ายๆ ถ้ากลับมาทวน มอง wrapper เท่ากับ spy(func) เพราะ return wrapper ออกมา
    // แล้วเทียบ func = spy(func) = wrapper
    // then wrapper.calls = work.calls เพียงแต่ wrapper เป็นการใช้งานใน function เลยต้อง return ค่าออกมา




/*
2. Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ delay () รับค่า argument 2 ตัว
    เป็น f และ เวลาในการ delay เป็นหน่วย มิลลิวินาที 

    function f(x) {
        alert(x);
    }
    // ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);
    f1000("test"); // แสดง "test" หลังจาก 1000ms
    f1500("test"); // แสดง "test" หลังจาก 1500ms

*/

    function f(x) {
        alert(x);
    };

    function delay(func,ms) {
        
        return function (...arr) {
            setTimeout( () => func.apply(this,arr),ms )
        }

    };

    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);

    // let ตัวแปรใหม่มารับค่า

    f1000("test");
    f1500("test");

    // f = delay(f,3000) ใส่แบบนี้ให้ wrap ไว้ยาวๆเลยก็ได้

