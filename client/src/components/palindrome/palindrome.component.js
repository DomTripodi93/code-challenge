import React, {useState} from "react";


const Palindrome = () => {
    const [numberOf, setNumberOf] = useState(0);
    const [val, setVal] = useState("");
    const [lastVal, setLastVal] = useState("");

    const CheckForPalindromes = () => {
        let holdNumberOf = val.length;
        setNumberOf(holdNumberOf);
        for (let i=1; i < val.length; i++){
            for (let j=0; j < val.length-i; j++){
                let substring = val.substring(j, j+i+1)
                if (isPalindrome(substring)){
                    holdNumberOf++;
                    setNumberOf(holdNumberOf);
                }
            }
        }
        setLastVal(val);
        setVal("");
    }

    const isPalindrome = (value) => {
        return value === value.split("").reverse().join("");
    }

    const valChanged = event => {
        const { value } = event.target;

        setVal(value);
    }

    return (
        <div className="centered">
            {numberOf > 0 ?
                <h5>
                    There are {numberOf} palindromes within {lastVal}.
                </h5>
                :
                <h5>
                    Submit a string below for evaluation, and the number of palindromes 
                    within the string will appear here.
                </h5>
            }
            
            <input 
                type="text"
                onChange={valChanged}
                value={val}
            />
            <button onClick={CheckForPalindromes}>Update</button>
        </div>
    )

}

export default Palindrome;