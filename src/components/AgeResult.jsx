import React from 'react'
import PropTypes from 'prop-types';


const AgeResult = ({ age }) => {
  return(
    <h4>
      You are {age.years} years, {age.months} months, and {age.days} days old.
      Current month: {age.currentMonth}, Current day: {age.currentDay}.
   </h4>
  )
}

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    currentMonth: PropTypes.number.isRequired,
    currentDay: PropTypes.number.isRequired
  })
}
export default AgeResult
