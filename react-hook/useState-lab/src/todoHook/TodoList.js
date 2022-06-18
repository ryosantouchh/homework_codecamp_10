import React, { useState, useEffect } from "react";
import "../App.css";
import arrow from "./arrow.png";

export const TodoList = () => {
  const [text, textUpdate] = useState("");
  const [list, listUpdate] = useState([]);
  const [done, doneUpdate] = useState([]);

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

  const deleteDone = (index) => {
    let data = [...done];
    data.splice(index, 1);
    doneUpdate(data);
  };

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
                <button onClick={() => deleteDone(index)}> delete </button>
                <button onClick={() => clickBack(index)}> back </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
