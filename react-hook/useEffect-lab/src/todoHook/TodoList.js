import React, { useState, useEffect } from "react";
import "../App.css";
import arrow from "./arrow.png";

export const TodoList = () => {
  const [text, textUpdate] = useState("");
  const [list, listUpdate] = useState([]);
  const [done, doneUpdate] = useState([]);
  const [api, apiUpdate] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) // แปลงเป็น json ก่อน
      .then(json => {
        apiUpdate(json)
      })

  }, []) // ถ้าไม่ใส่ค่า state อะไรไว้ ก็ทำงานแค่ครั้งแรกครั้งเดียวเหมือน didMount

    // useEffect( callback fn , state ) : ใช้ในการ track ข้อมูลที่เราเขียนไว้ได้

  useEffect(() => {
    console.log("list or done change");
  }, [list, done])

  useEffect(() => {
    console.log("track list");
  }, [list]) // track list ไว้ก่อน ทำงานหลายครั้งเมื่อ update : เหมือน UpdateMount

  useEffect(() => {
    console.log("track done");
  }, [done])

  useEffect(() => {
    console.log("update");
  })

  const clickAdd = () => {
    listUpdate([...list, text]);
    textUpdate("");
  };

  const clickDone = (index) => {
    let data = [...list];
    let move = data.splice(index, 1);
    doneUpdate([...done, ...move]);
    listUpdate(data);
  };

  // ------------------------------------------------------

  // ทั้งหมดนี้คือเขียนให้เกิด confirm การ delete โดยใน react จะต้องกำหนดเป็น window.confirm

  const deleteWhat = (x, index) => {
    console.log(`Confirmed Delete = ${x} , index = ${index}`);
    alert(`You delete ${x}`);
  };
  // เขียน function ที่รับค่าที่ delete ไปใช้ใน deleteDone เป็น callback function

  const deleteConfirm = (index, deleteDone, deleteNothing) => {
    // fn นี้เขียนเป็น callback fn ไปเรียกเอา deleteDone กับ deleteNothing มาใช้งาน
    const confirmBox = window.confirm(
      "Do you wanna delete it?"
    )
    
    if (confirmBox === true) {
      deleteDone(index)
    } else {
      deleteNothing()
    }
  };
  
  const deleteDone = (index) => {
    let data = [...done];
    let x = data.splice(index, 1);
    doneUpdate(data);
    deleteWhat(x, index)
    // บรรทัดนี้ลองเขียนเอง อยากรู้ว่าจะรู้ได้ยังไงว่า delete ค่าไหนไป เผื่อลั่นลบจะได้รู้ได้จาก log
    // ทำเป็น callback fn
  };

  const deleteNothing = () => {
    console.log("Delete Nothing");
  };

  //----------------------------------------------------------------

  const clickBack = (index) => {
    let data = [...done];
    let move = data.splice(index, 1);
    listUpdate([...list, ...move]);
    doneUpdate(data);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "300px 300px",
        justifyItems: "center",
        gap: "10px",
      }}
    >
      <div>
        <h3>Todo List</h3>
        <ul style={{ listStyle: "none" }}>
          {list.map((text, index) => (
            <li>
              {text}{" "}
              <span onClick={() => clickDone(index)}>
                {/* ถ้าจะส่ง parameter เข้าไปด้วย ในที่นี้คือ index ให้ทำการใส่ arrow function ไว้ด้วย
                ถ้าเขียน clickDone(index) เฉยๆ มันจะทำงานอัตโนมัติ */}
                <img src={arrow} style={{ width: "15px", cursor: "pointer" }} />
              </span>{" "}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => textUpdate(e.target.value)}
          />
          {/* event.target.value => หมายความว่า รับ value เข้ามาแล้ว trigger */}
          <button onClick={clickAdd}>Add Text</button>
          {/* { () => clickAdd() } มีค่าเท่ากับ {clickAdd} ถ้าไม่ได้ส่ง parameter เขียนแบบนี้ได้*/}
        </div>
      </div>

      <div>
        <h3>Done Task</h3>
        <ul style={{ listStyle: "none" }}>
          {done.map((text, index) => (
            <li>
              {text}
              <span>
                <button onClick={() => deleteConfirm(index, deleteDone, deleteNothing)}> delete </button>
                <button onClick={() => clickBack(index)}> back </button>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
          {api.map( obj => {
            return (<tr>
              <td>{obj.userId}</td>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
            </tr>)
          } )}
        </table>
      </div>

    </div>
  );
};
