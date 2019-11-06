import React, { Component } from 'react';
import { View } from 'react-native';
import AppContext from '../../../context/Appointment/AppointmentContext';

class NowBar extends Component {
  state = {
    calc_pad: 0
  };

  componentDidMount() {
    const { hour_size } = this.props;
    var int_ms = 900000 - 6000 * hour_size; // set an interval trigger based on size of an hour

    this._setHeight();
    var that = this;

    this._interval = setInterval(() => {
      that._setHeight();
    }, int_ms);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _setHeight() {
    const { hour_size } = this.props;
    var midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    var now = new Date();
    var hours = (now - midnight) / 3600000;
    var calc_pad = hours * hour_size - 1;

    this.setState({
      calc_pad: calc_pad
    });
  }

  render() {
    const { calc_pad } = this.state;
    return (
      <AppContext.Consumer>
        {context => {
          if (!sameDay(context.date, new Date())) {
            return null;
          }
          return (
            <View
              style={{
                width: '100%',
                paddingTop: calc_pad,
                borderBottomColor: '#007Aff',
                borderBottomWidth: 2,
                position: 'absolute',
                zIndex: 0
              }}
            />
          );
        }}
      </AppContext.Consumer>
    );
  }
}

const sameDay = (d1, d2) => {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
};

export default NowBar;
