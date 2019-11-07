import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calcHeight, deviceHeight } from '../../../utils/DeviceDimensions';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';
const Income = props => {
  const [chartHW, setChartHW] = useState({
    height: 0,
    width: 0
  });
  const [textH, setTextH] = useState({
    height1: 0,
    height2: 0
  });
  const data = {
    labels: [
      'Nov 11',
      'Nov 12',
      'Nov 13',
      'Nov 14',
      'Nov 15',
      'Nov 16',
      'Nov 17'
    ],
    datasets: [
      {
        data: [202, 456, 282, 805, 994, 434, 102]
      }
    ]
  };

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: '#333',
    backgroundGradientTo: '#666',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 1
  };

  return (
    <Card>
      <View
        style={styles.wrapperStyle}
        onLayout={e =>
          setChartHW({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
          })
        }
      >
        <Text
          onLayout={e =>
            setTextH({
              ...textH,
              height1: e.nativeEvent.layout.height
            })
          }
          style={styles.header}
        >
          Income
        </Text>
        <Text
          onLayout={e =>
            setTextH({
              ...textH,
              height2: e.nativeEvent.layout.height
            })
          }
          style={{ marginBottom: 10, fontSize: 10 }}
        >
          Last 7 days
        </Text>
        <View>
          <LineChart
            style={styles.graphStyle}
            data={data}
            width={chartHW.width}
            height={chartHW.height - textH.height1 - textH.height2}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero={true}
            yAxisLabel={'$'}
          />
        </View>
      </View>
    </Card>
  );
};

Income.propTypes = {};
const styles = StyleSheet.create({
  wrapperStyle: { height: deviceHeight / 1.67 },
  header: {
    fontSize: calcHeight(4),
    fontWeight: 'bold'
  },
  graphStyle: { borderRadius: 16 }
});

export default Income;
