import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    const { latitude, longitude } = this.props;

    const mapStyles = {
      width: "100%",
      height: "400px",
    };

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyASuHB3mHDPuwK6-umuauZJQBe38VKKaOg", // Replace with your actual API key
})(MapContainer);
