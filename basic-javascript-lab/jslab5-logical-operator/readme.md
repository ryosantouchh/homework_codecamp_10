### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์ที่ได้รับ

    1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
        ```
        alert(null || 2 || undefined); 
        alert( alert(1) || 2 || alert(3) );
        alert(1 && null && 2);
        alert( alert(1) && alert(2) ); 
        alert( null || 2 && 3 || 4 ); 
        ```


    2. เขียนคำสั่ง if เช็คอายุระหว่าง 18-60 
    3. เขียนคำสั่ง if ที่เช็คอายุไม่อยู่ในระหว่าง 18-60


    4. คำสั่งไหน alert จะถูกรันบ้าง
        ```
        if (-1 || 0) alert('first');
        if (-1 && 0) alert('second');
        if (null || -1 && 0) alert('third');
        ```


    5. ให้เขียนระบบ login
        - ให้ใช้ prompt ในการถามใครเป็น login
        - ถ้าผู้ใช้กรอกว่า "Admin" ให้ใช้ prompt ถาม password
            - วิธีเช็ค password
            - ถ้า string นั้นเป็น "codecamp#5" ให้ alert "ยินดีต้อนรับ"
            - ถ้า string เป็นอย่างอื่นให้ alert เป็น "Wrong password"
            - ถ้า string ว่าง หรือ กด cancel ให้ alert ว่า "ยกเลิก"
        - ถ้าผู้ใช้กรอกอย่างที่ไม่ใช่ "Admin" ให้ alert ว่า "ผมไม่รู้จักคุณ"
        - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า "ยกเลิก"