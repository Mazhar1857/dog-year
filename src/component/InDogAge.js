import React, { useState, useEffect } from 'react';
import './InDogAge.css';

export default function InDogAge({ text }) {

    /*if we use the below commented part in place of useEffect it work all good */
    // let dogAge;
    // const firstTwoYear = 2 * 10.5;
    // const remainingYear = () => {
    //     return (text - 2) * 4;
    // };
    // if (text > 2) {
    //     dogAge = firstTwoYear + remainingYear();
    // } else {
    //     dogAge = text * 10.5;
    // }



    const [dogAge, setDogAge] = useState('')

    useEffect(() => {
        const firstTwoYear = 2 * 10.5;
        const remainingYear = (text - 2) * 4;

        if (text > 2) {
            setDogAge(firstTwoYear + remainingYear);
        } else {
            setDogAge(text * 10.5);
        }
    }, [text]);


    return (
        <div className='dog-age'>
            <img src="/dog.png" alt="" />
            {text?<p>{`your age is equivalent to ${dogAge} year old dog`}</p>:<p>Enter your age above to know your age in dog year</p>}

            {/* {text !== '' && <p>{`your age is equivalent to ${dogAge} year old dog`}</p>} */}

        </div>
    )
}
