import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import TotalAppts from './TotalAppts';
import OnlineAppts from './OnlineAppts';
import TotalSales from './TotalSales';
import AverageSales from './AverageSales';

const Analytics = props => {
  return (
    <ScrollView>
      <TotalAppts />
      <OnlineAppts />
      <TotalSales />
      <AverageSales />
    </ScrollView>
  );
};

Analytics.propTypes = {};

export default Analytics;
