import React, { PureComponent } from 'react';
import GoogleMapLoader from './GoogleMapLoader';

class GoogleMapFancyLoader extends PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return <GoogleMapLoader isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick} />;
  }
}

export default GoogleMapFancyLoader;
