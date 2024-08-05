import React from "react";
import GoogleMapReact from 'google-map-react';
import places from './places.json'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap=()=>{
  const defaultProps = {
    center: {
      lat: 50.4501,
      lng: 30.5234
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '70vw', marginTop:100, justifyContent:"center", display:"block" }}>
        <div style={{margin:20, textAlign:"center"}}>
            Text box
        </div>
        
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
       {places.map(item=>(
        <AnyReactComponent
          lat={item.lat}
          lng={item.lan}
          text={item.text}
        />
       )) }
      </GoogleMapReact>
   
    </div>
  );
}

export default SimpleMap