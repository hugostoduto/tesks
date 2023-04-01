import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import commonStyles from '../commonStyles';



export const Task = ({ desc, doneAt, estimateAt }) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>

        <Text>{desc}</Text>
        <Text>{doneAt + ''}</Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    border: '#aaa',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 10,

  }
})