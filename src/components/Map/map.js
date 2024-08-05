import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';


const GoogleMap = ({ children, ...props }) => (
  <div style={{width:"100%", height:"10%"}}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "",
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
