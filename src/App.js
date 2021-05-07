import { useState } from 'react';

import FormAccount from './components/FormAccount'
import Lign from './components/Lign';
import './App.css';

function App() {
  const [account, setAccount] = useState([]);
  const [showList, setShowList] = useState(false);


  const showMe = () => {
    setShowList(true)
  }

  const resultFunction = (result) => {
    const array = []
    
    for (let i = 0; i < result.duration; i++) {
      let MonthlyTotal;
      if (result.amount === 0 ) {
        MonthlyTotal = result.initialAmount + result.monthlyAmmount
      } else {
        MonthlyTotal = result.amount + result.monthlyAmmount
      }
      let interestPerMonth = MonthlyTotal * (result.interest / 100);
      result.amount = MonthlyTotal + interestPerMonth
      array.push(result.amount)
      setAccount(array)
    }
  }

  return (
    <>
      <h1>Your Bank Account</h1>
      <FormAccount addResult={resultFunction} isShow={showMe} />
      {showList && <Lign amount={account} />}
    </>
  );
}

export default App;
