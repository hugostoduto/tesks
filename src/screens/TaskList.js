import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles';
import todayImage from '../../assets/today.jpg'
import { Task } from '../components/Task';

export const TaskList = () => {

  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={todayImage}>
        <View style={styles.titleBar}>

          <Text style={styles.title}>Hoje</Text>
          <Text>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>

        <Text>
          <Task desc="Arrumar casa" doneAt={new Date()} />
        </Text>


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  background: {
    flex: 3,

  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secondary,
    marginBottom: 20,
    marginLeft: 20,
  }
})