### Online Codecamp 10

1. Kittitat Suntimak
2. โจทย์ที่ได้รับ

    1. ให้แปลง function ด้านล่างนี้ให้อยู่ในรูปของ arrow function

        ```
        function ask(question, yes, no) {
            if(confirm(question)) yes()
            else no();
        }

        ask(
            "Do you agree?",
            function() {alert("You agreed.");},
            function() {alert("you cancaled the execution.");}
        );
        ```