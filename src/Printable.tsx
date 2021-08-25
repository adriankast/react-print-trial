import React from "react";

const Printable = () => {
    const testData = [];
    for(let i = 0; i<20; i++) {
        testData.push({name: "varName" + i, value: i * 1.375})
    }
    return (<>
    <div style={{backgroundColor:"aliceblue",width: "100px", height:"20px", fontSize:"12pt", color: "red", margin: "50px"}}>
        print text
        </div>
        <table>
            <thead><th>Name</th><th>Value</th></thead>
            <tbody>{testData.map(el => (<tr key={el.name}><td>{el.name}</td><td>{el.value}</td></tr>))}</tbody>
        </table>
        </>)
}

export default Printable;
