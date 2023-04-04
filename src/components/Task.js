import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import commonStyles from '../commonStyles';






export const Task = ({ desc, doneAt, estimateAt }) => {
  const doneOrNot = !doneAt ? { textDecorationLine: 'line-through' } : {}
  return (
    <View style={styles.taskContainer}>
      <View style={styles.checkContainer}>
        {getCheckView(doneAt)}
      </View>
      <View>

        <Text style={[styles.desc, doneOrNot]}>{desc}</Text>
        <Text style={styles.date}>{doneAt + ''}</Text>
      </View>

    </View>
  )
}
const getCheckView = (done) => {
  return (

    !done ?
      <View style={styles.done}>
        <Text>X</Text>
      </View>
      :
      <View style={styles.padding}></View>

  )
}
const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    border: '#aaa',
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',

  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  padding: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555'
  },
  done: {

    height: 25,
    width: 25,
    borderRadius: 13,
    borderColor: '#555',
    backgroundColor: "#4d7031",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
    fontSize: 30,


  },
  desc: {
    color: commonStyles.colors.mainText,
    fontSize: 15,

  },
  date: {
    color: commonStyles.colors.subText,
    fontSize: 12

  }
})