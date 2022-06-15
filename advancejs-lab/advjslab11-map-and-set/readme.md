### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. ให้ arr เป็น Array
        - สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
            ```
            function unique(arr) {
                //...your code...//
            };  
            let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];  
            alert( unique(values) ); // Hare, Krishna, :-O
            ```


    2. Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน (optional)
            ```
            let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
            alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
            ```


    3. เราได้ array จาก maps.keys() แต่ไม่สามารถใช้ push ได้ เราจะทำยังไงให้ keys.push สามารถทำงานได้
            ```
            let map = new Map();
            map.set("name", "John");
            let keys = map.keys();
            // Error: keys.push is not a function
            keys.push("more");
            ```