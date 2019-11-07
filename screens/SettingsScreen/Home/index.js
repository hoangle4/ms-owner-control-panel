import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import UpComAppt from './UpComAppt';
import UpComApptChart from './UpComApptChart';

import ApptActivity from './ApptActivity';
import Income from './Income';

const Home = props => {
  return (
    <ScrollView>
      <UpComAppt />
      <ApptActivity />
      <UpComApptChart />
      <Income />
    </ScrollView>
  );
};

Home.propTypes = {};

export default Home;
