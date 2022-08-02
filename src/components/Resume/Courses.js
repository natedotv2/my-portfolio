import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.platform > b.platform) ret = -1;
  else if (a.platform < b.platform) ret = 1;
  else if (a.instructor > b.instructor) ret = 1;
  else if (a.instructor < b.instructor) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    instructor: PropTypes.string,
    link: PropTypes.string,
    platform: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
