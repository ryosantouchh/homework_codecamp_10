### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์การบ้าน

    1. ให้เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิมแต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่


    2. เขียนฟังก์ชัน checkSpam โดยถ้าข้อความดังกล่าว มีคำว่า "xxx" หรือ "viagra" ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false


    3. เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทนข้อความต่อจากนั้นด้วย "..."

        truncate ("what I'd like to tell on this topic is:",20) = "What I'd like to te..."
        truncate ("Hi everyone!",20) = "Hi everyone!"

    
    4. เขียนฟังก์ชันที่ extractCurrencyValue(string,rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ให้เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเงินบาทเป็นเงินไทย โดยอิง rate จาก parameters ตัวที่ 2

        alert ( extractCurrencyValue('$120' , 30.5) === 3660 ) // true