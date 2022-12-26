import { FC } from 'react';
import classes from './TacoTruckNearByMe.module.css';
import GoogleMapReact from 'google-map-react';


interface IProps {
}

export const TacoTruckNearByMe: FC<IProps> = ({ }) => {

    const defaultProps:any = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
	
	return (
	  <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
       
      </GoogleMapReact>
    </div>
	);
};
