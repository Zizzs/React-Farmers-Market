import React from 'react';
import PropTypes from 'prop-types';


function Schedule(props){
  return (
    <div>
        <hr/>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hour}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  );
}

Schedule.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hour: PropTypes.string,
    booth: PropTypes.string
};
export default Schedule;