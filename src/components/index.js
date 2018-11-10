import React, { Component } from 'react';
import Moment from 'moment';
import 'moment-holiday'
import Timer from './timer';
import Controls from './controls';
import DatePicker from './datePicker';
import moment  from 'moment';
import HolidaysModal from './holidaysModal'

class CounterDown extends Component {
  state = {
    currentDate: moment(),
    nextDate: moment({year: moment().year() + 1}),
    paused: false,
    showHolidays: false,
  }

  componentDidMount(){
    this.resume()
  }

  componentWillMount(){
    this.pause()
  }

  getRemainingTime(){
    let {currentDate, nextDate} = this.state,
        diff = nextDate.diff(currentDate);
    
         return Moment.duration(diff)
  }



  handleTogglePaused = () => {
    this.setState((prevState, props) => {
      const paused = ! prevState.paused

      if(paused){
        this.pause()
      }else{
        this.resume()
      }
      return {paused}
    })
  }


  getHolidays = () =>{

    const { currentDate, nextDate } = this.state
     return moment(currentDate).holidaysBetween(nextDate)
  }

  
  handleDateRest = nextDate => {
    this.setState({
      nextDate
    })
  }



  handleHloidaysToggle = () => {
    this.setState({
      showHolidays: !this.state.showHolidays
    })
  }



  pause = () => {
    clearInterval(this.interval)
  }




  resume = () => {
    this.interval = setInterval(() => {
      this.setState({
        currentDate: moment()
      })
    }, 1000)
  }



  render(){
    
    const {paused, nextDate, showHolidays} = this.state,
          duration = this.getRemainingTime(),
          getHolidays = this.getHolidays()
    return(
      <section className="hero is-dark is-info is-bold is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { nextDate.calendar() } is Coming Up !
            <button 
              className="button is-small is-rounded is-ligth" 
              style={{margin: '5px 0 0 10px'}}
              onClick={this.handleHloidaysToggle}
              >
                Holidays
            </button>
          </h1>
          <section className="section">
            <Timer duration={duration}/>
          </section>
            <DatePicker onDateRest={this.handleDateRest}/>
            <Controls pause={paused} onTogglePaused={this.handleTogglePaused}/>
            <HolidaysModal 
                        holidays= {getHolidays} 
                        active={showHolidays} 
                        onToggle={this.handleHloidaysToggle}/>
          </div>
        </div>
      </section>
    )
  }
}

export default CounterDown;