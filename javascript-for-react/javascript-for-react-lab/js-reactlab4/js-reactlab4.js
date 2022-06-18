/*
1.ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน
โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
*/

    function f() {
        alert("Hello!");
    }

    Function.prototype.defer = function(ms) {
        setTimeout(this,ms)
    };
    // ทวนบ่อยๆ ตรงนี้จะเขียน method เข้าไปใน function prototype >> มองคล้ายๆ object
    
    f.defer(1000);

/*
2.ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน
โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
*/

    function f(a, b) {
        alert( a + b );
    };

    Function.prototype.defer = function(ms) {
        let f = this;
        
        return function(a,b) {
            setTimeout( () => f(a,b),ms )
            // setTimeout( function() { return f(a,b) } , ms ) อันเดียวกัน
        }
    };
    
    f.defer(1000)(1, 2); 