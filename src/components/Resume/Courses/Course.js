import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.platform}:</h4>
      <p className="course-name">{data.title}</p>
      <p className="course-name">{data.instructor}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
