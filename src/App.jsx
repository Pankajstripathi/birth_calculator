import React, { useState } from 'react';
import './App.css';
import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import { differenceInYears } from 'date-fns';
import { differenceInMonths } from 'date-fns';
import { differenceInDays } from 'date-fns';


function App() {
  const [age, setAge] = useState(null); 

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj); 
    const ageMonths = differenceInMonths(today, birthDateObj); 
    const ageDays = differenceInDays(today, birthDateObj); 
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    console.log(ageYears);
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
      currentMonth: currentMonth,
      currentDay: currentDay

    }); 
  };

  return (
    <>
      <div>
        <h5>Age Calculator</h5>
        <AgeCalculatorForm calculateAge={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </>
  );
}

export default App;
