### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. ถ้าเรามี Object

        ```
        let user = {
            name : 'John',
            years : 30
        };
        ```

        - ให้เขียน destructuing assignment ที่ให้
            1. property ที่ชื่อ name ไปอยู่ในตัวแปร name
            2. property ที่ชื่อ years ไปอยู่ในตัวแปร age
            3. property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)


    2. ถ้าเรามี Object ชื่อ salaries
    
            ```
            let salaries = {
                'John' : 100,
                'Pete' : 300,
                'Mary' : 250,
            };
            ```

        - ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสุงสุด
            1. ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
            2. ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน