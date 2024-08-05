
import React from 'react';
import PropTypes from 'prop-types';


const Marker = ({ text, onClick }) => (
//   <Wrapper
//     alt={text}
//     onClick={onClick}
//   />
  <div onClick={onClick} style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 18,
    height: 18,
    backgroundColor: "#000",
    border: "2px solid #fff",
    borderRadius: "100%",
    userSelect: "none",
    transform: "translate(-50%, -50%)",
    cursor: `${(props) => (onClick ? 'pointer' : 'default')}`,
    
  }}>{text}</div>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
