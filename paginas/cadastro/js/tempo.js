import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 250}}
        date={this.state.date}
        mode="date"
        showIcon = {false}
        format="DD-MM-YYYY"
        onDateChange={(date) => {this.setState({date: date})}}
      />
      
    )
  }
}