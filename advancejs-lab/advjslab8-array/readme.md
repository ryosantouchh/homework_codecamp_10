### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. ผลลัพธ์ของความยาว array คืออะไร
        ```
        let fruits = ["Apple", "Pear", "Orange"];
        
        let shoppingCart = fruits;
        shoppingCart.push("Banana");

        alert( fruits.length );
        ```


    2. ให้ทำตามขั้นตอนต่อไปนี้
        - สร้าง array ชื่อ styles ที่มี items ชื่อ "Jazz" และ "Blues"
        - เพิ่ม "Rock-n-Roll" ต่อท้าย
        - นำค่า Classics ไปทับค่าตรงกลางของ Array
        - นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก Array
        - เพิ่ม "Rap" และ "Reggae" ไปข้างหน้าของ Array


    3. เขียนฟังก์ชัน sumInput() ที่
        - ใช้ prompt รับ value มาเก็บใน Array
        - หยุดถามเมื่อเจอค่าที่ไม่ใช่ตัวเลข
        - คำนวณผลรวมของตัวเลขทั้งหมดใน Array

    
    4. Maximal contiguous subarray
        - ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

        getMaxSubSum( [-1, 2, 3, -9] ) == 5
        getMaxSubSum( [2, -1, 2, 3, -9] ) == 6
        getMaxSubSum( [-1, 2, 3, -9, 11] ) == 11
        getMaxSubSum( [-2, 1, 1, 2] ) == 3
        getMaxSubSum( [100, -9, 2, -3, 5] ) == 100
        getMaxSubSum( [1, 2, 3] ) == 6
