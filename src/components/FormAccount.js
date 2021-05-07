import React, { useState, useRef } from 'react';

import classes from './FormAccount.module.css';

function FormAccount() {

    const [account, setAccount] = useState(0);
    const [totalAccount, setTotalAccount] = useState(null);
    const initialAmountRef = useRef('');
    const monthlyAmmountRef = useRef('');
    const interestRef = useRef('');
    const durationRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        let initialAmount = parseInt(initialAmountRef.current.value);
        let monthlyAmmount = parseInt(monthlyAmmountRef.current.value);
        let interest = parseInt(interestRef.current.value);
        let duration = parseInt(durationRef.current.value);

        for (let i = 1; i <= duration; i++) {
            let MonthlyTotal;
            if(totalAccount) {
                MonthlyTotal = totalAccount + monthlyAmmount
            } else {
                MonthlyTotal = initialAmount + monthlyAmmount
            }
            
            let interestPerMonth = MonthlyTotal * (interest / 100);
            setTotalAccount(MonthlyTotal + interestPerMonth);            
          
        }

        setAccount(totalAccount);

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
            <div className={classes.control}>{account}</div>
        </form>
    );
}

export default FormAccount;
