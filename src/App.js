import React, { useState } from "react";
import "./App.css"

export default function App() {
    const [text, setText] = useState([]);
    const [newText, setnewText] = useState("");
    const [count, setcount] = useState(0);

    function handleAdd() {
        if (newText !== "") {
            const newtext = [...text, { elem: newText, completed: false }];
            setText(newtext);
            setnewText("");
            setcount(count + 1);
        }
    };

    function handleonDelete(index) {
        const newtext = [...text];
        if (!newtext[index].completed) {
            setcount(count - 1);
        }
        newtext.splice(index, 1);
        setText(newtext);
    };

    const handleonComplete = (index) => {
        const newtext = [...text];
        console.log(newtext[index]);
        if (newtext[index].completed === false) {
            newtext[index].completed = true
            setText(newtext);
            count > 0 && setcount(count - 1);
        }
        setText(newtext);
        console.log(newtext)
    };
    return (
        <div className="App">
            <div className="outer-main">
                <div className="main-box">
                    <div>
                        <div> List Of Items ({count})</div>
                        {text.map((elem, index) => (
                            <div key={index}>
                                {elem.completed ? (
                                   <s>{elem.elem}</s>
                                ) : (
                                    elem.elem
                                )}
                                <button onClick={() => handleonComplete(index)}>Complete</button>
                                <button onClick={() => handleonDelete(index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setnewText(e.target.value)}
                    />
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    );
};

