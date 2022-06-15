### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    # 4.6

    1. ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
        - ชื่อของผู้เรียน เป็น string
        - อายุของผู้เรียน เป็น number
        - บ้านของตัวเอง เป็น string
        - โสดหรือไม่โสด เป็น boolean
        - คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)

    ---

    # 4.18

    1. ให้ทำตามคำสั่งต่อไปนี้
        - สร้าง object เปล่าขึ้นมา
        - เพิ่ม properties name เข้าไปและให้ value เป็น "Sonter"
        - เพิ่ม properties surname เข้าไปและให้ value เป็น "Pakorn"
        - เปลี่ยน properties name เป็น "Boy"
        - ลบ properties name ออกจาก Object


    2. ให้เขียน function ชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ function นี้จะเช็คว่า obj นี้มี properties ไหม
        - ถ้ามีให้คืนค่า true
        - ถ้าไม่มีให้คืนค่า false

    
    3. การเขียนข้างล่างดังต่อไปนี้ error หรือไม่
        ```
        const user = {
            name: "John",
        };

        user.name = "Pete";
        ```
    

    4. จงเขียน function sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นเชื่อพนักงานและมี value เป็นเงินเดือน ให้ function คืนค่าเป็นผลรวมของพนักงานทั้งหมด
        ```
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130,
        };
        ```
    

    5. จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คูณ value นั้นด้วย times ถ้าเป็นข้อมูลอย่างอื่นไม่ต้องทำอะไร
        ```
        // before the call
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        }

        multiplyNumeric(menu);
        
        // after the call
        menu = {
            width: 400,
            height: 600,
            title: "My menu"
        };
        ```

    