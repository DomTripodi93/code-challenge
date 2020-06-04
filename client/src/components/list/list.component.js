import React, {useState} from "react";


const List = () => {
    const [list, setList] = useState([]);
    const [val, setVal] = useState("");

    const addToList = () => {
        setList([
            ...list, 
            {
                value: val,
                id: list.length + 1
            }
        ]);
        setVal("");
    }

    const valChanged = event => {
        const { value } = event.target;

        setVal(value);
    }

    return (
        <div className="centered">
            <h4>A List That Updates As Values Are Added</h4>
            <br/>
            <h4>Every 3rd Value Will Have Red Text, All Others Will Be Black Text</h4>
            <br/>
            {list.length > 0 ?
                <ul>
                    {list.map(item =>(
                        <li>
                            {item.id % 3 === 0 ?
                                <h5 className="red">
                                    {item.value}
                                </h5>
                                :
                                <h5 className="black">
                                    {item.value}
                                </h5>
                            }
                        </li>
                    ))}
                </ul>
                :
                <h5>
                    Add an item below to see your list here
                </h5>
            }
            <input 
                type="text"
                onChange={valChanged}
                value={val}
            />
            <button onClick={addToList}>Update</button>
        </div>
    )

}

export default List;