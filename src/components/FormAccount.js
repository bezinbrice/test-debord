import React, {  useRef } from 'react';

import classes from './FormAccount.module.css';

function FormAccount(props) {

    const initialAmountRef = useRef('');
    const monthlyAmmountRef = useRef('');
    const interestRef = useRef('');
    const durationRef = useRef('');


    function submitHandler(event) {
        event.preventDefault();

        const result = {
            amount: 0,
            initialAmount: parseInt(initialAmountRef.current.value),
            monthlyAmmount: parseInt(monthlyAmmountRef.current.value),
            interest: parseInt(interestRef.current.value),
            duration: parseInt(durationRef.current.value),
        }
        
        props.addResult(result);
        props.isShow();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='initialAmount'>Your initial amount</label>
                <input type='number' id='initialAmount' ref={initialAmountRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='monthlyAmmount'>monthly Ammount</label>
                <input type='number' id='monthlyAmmount' ref={monthlyAmmountRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='interest'>Your interest (in %)</label>
                <input type='number' id='interest' ref={interestRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='duration'>The duration</label>
                <input type='number' id='duration' ref={durationRef} />
            </div>
            <button>See my account</button>
        </form>
    );
}

export default FormAccount;
