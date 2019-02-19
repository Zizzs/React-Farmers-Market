import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';

function ScheduleList(props){
  return (
    <div>
        <p>Schedule:</p>
        {props.scheduleList.map((schedule, index) =>
          <Schedule day={schedule.day}
          location={schedule.location}
          hours={schedule.hours}
          booth={schedule.booth}
          key={index}
          />
            )}
    </div>
  );
}

ScheduleList.propTypes = {
    scheduleList: PropTypes.array
}
export default ScheduleList;