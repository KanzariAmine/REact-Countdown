import React, { Component } from 'react';
import moment from 'moment';

class DatePicker extends Component{
  state = {
    date: '',
    valid: true,
    dirty: false
  }

  handleDateChange = ({target:{value}}) => {
    const date = moment(value),
          valid = date.isValid() && date.isAfter(moment())


    this.setState({
      valid,
      date: value,
      dirty: true
    })   


    valid && this.props.onDateRest(date)
  }



  render(){
    let {date, valid, dirty} = this.state,
          classes = 'input is-medium is-rounded'

      valid && dirty && (classes += ' is-success')
      !valid && dirty &&(classes += ' is-danger')



    return(
      
      <div className="field has-addons has-addons-centered" style={{marginBottom: '40px'}}>
        <p className="control has-text-centered">
          <input 
                className={classes} 
                value={date} 
                onChange={this.handleDateChange} 
                placeholder="Type a Date..."
          />
          {!valid && <i className="help is-danger is-size-6">Pleas type a valid (! In the Future) date</i>}
        </p>
      </div>
    )
  }
}
export default DatePicker