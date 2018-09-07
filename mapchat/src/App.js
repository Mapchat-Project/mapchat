import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="App">
        <Map center={position} zoom={this.state.zoom} touchZoom={true}> 
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
