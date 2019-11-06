import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HrLine from './HrLine';

const DrawnGrid = ({ staff }) => {
  return (
    <View style={styles.drawnGridContainer}>
      {staff.map((s, i) => {
        return (
          <View
            style={(styles.drawnGridCol, [{ width: `${100 / staff.length}%` }])}
            key={i}
          >
            {[...Array(24)].map((val, i) => (
              <HrLine key={i} />
            ))}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  drawnGridContainer: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  drawnGridCol: {}
});

DrawnGrid.defaultProps = {
  staff: [{ name: 'Hoang Le' }]
};
export default DrawnGrid;
