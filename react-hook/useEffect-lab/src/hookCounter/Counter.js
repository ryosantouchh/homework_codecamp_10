import React, { useState } from 'react'

export const Counter = () => {
    const [count, counterUpdate] = useState(0)
    // มองเป็น Array Destructuring count > state , counterUpdate > function(newState)
    // function useState (state) {
    //     return [ state, function(newState){ state = newState } ]
    // }

    console.log(useState(0))
    return (
        <div style={{ textAlign: "center" }}>
            <h3>{count}</h3>
            <div>
                <button onClick={() => counterUpdate(count + 1)}>plus</button>
                <button onClick={() => counterUpdate(count - 1)}>minus</button>
                <button onClick={() => counterUpdate(0)}>reset</button>
            </div>
        </div>
    )
}



//state class component
// state = {
//     count : 0,
//     age: 0,
//     name: "name"
// }
// compare state
// count == this.state.count
// compare function update state
// counterUpdate("....."), ageUpdate("....."), nameUpdate("....") == this.setState({count : "....", name : "....", age: "...."})

// ************ วิธีเขียนแบบ class
/*
import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
        <div style={{ textAlign: "center" }}>
        <h3>{this.state.count}</h3>
        <div>
            <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button>
            <button onClick={() => this.setState({count: this.state.count - 1})}>minus</button>
            <button onClick={() => this.setState({count: 0})}>reset</button>
        </div>
        </div>
    )
  }
}
*/


// count (จาก Hook) === this.state.count (จาก class component)

// counterUpdate(...) , ageUpdate(...) , nameUpdate(...) == this.setState({count : value , name : "..." , age : "..."})
// >> setState รับ object

// setState เก็บเป็น object มี properties เปลี่ยนค่าได้หลายค่าพร้อมกัน เก็บใน state ได้หลายค่า
// Hook > useState = เก็บได้ตัวเดียวต่อการสร้าง 1 ครั้ง และเปลี่ยนค่าได้ทีละ 1 ตัวเท่านั้น

// const [count, countUpdate] = useState(0);

// useState มองแบบนี้
// function useState (state) {
//     return [ state, function(newState){ state = newState } ]
// }