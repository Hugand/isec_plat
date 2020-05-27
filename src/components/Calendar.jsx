import React from 'react'

class Calendar extends React.Component{

    constructor(props){
        super(props)
        this.months = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ]
        this.state = {
            currMonth: props.month,
            currYear: props.year,
            days: this.getDaysInMonth(props.month, props.year),
            selected_day: null,
        }

        console.log(this.state.days)

    }

    getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        var days = [];
        const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
        while (date.getMonth() === month) {
            days.push({
                week_day: new Date(date).getDay(),
                month_day: new Date(date).getDate()
            });
            date.setDate(date.getDate() + 1);
        }
        let firstDayWeekIndex = days[0].week_day
        console.log(firstDayWeekIndex)
        for(let i = 0; i < firstDayWeekIndex; i++){
            days.unshift(-1);
        }

        let daysByWeeks = []

        while(days.length > 1){
            daysByWeeks.push(days.splice(0, 7))
        }

        return daysByWeeks;
    }

    handleDaySelection = (day) => this.setState({selected_day: day})

    navigateCalendar = (action) => {
        let {currMonth, currYear} = this.state
        
        if(action === 'forward'){
            if(currMonth === 11){
                currMonth = 0
                currYear++
            }else
                currMonth++
        }else if(action === 'backwards'){
            if(currMonth === 0){
                currMonth = 11
                currYear--
            }else
                currMonth--
        }
        
        const newMonthData = this.getDaysInMonth(currMonth, currYear)

        this.setState({
            currMonth: currMonth,
            currYear: currYear,
            days: newMonthData
        })
    }

    getDateString = (day, month, year) => 
    `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`

    render(){
        return (
            <div className="calendar-container">
                <div className="calendar">
                    <div className="calendar-header"><h2>{this.months[this.state.currMonth]} {this.state.currYear}</h2></div>
                    <div className="calendar-left-nav"> <button onClick={() => this.navigateCalendar('backwards')}><img src={require('../assets/left_arrow.svg')}/></button> </div>
                    <div className="calendar-days">
                        {
                            (this.state.days.map(week =>(
                                <div className="calendar-row">
                                    {week.map(day => (
                                        <button
                                        className={
                                            "calendar-day "
                                            +((this.state.selected_day !== null && this.state.selected_day.month_day === day.month_day)
                                                ? 'calendar-selected-day': '')
                                            +((this.props.data[this.getDateString(day.month_day, this.state.currMonth, this.state.currYear)] !== undefined) ? ' calendar-marked-day' : '')
                                            +((day === -1) ? ' calendar-filler' : '')} 
                                            
                                            onClick={() => (day !== -1) ?  this.handleDaySelection(day) : ''}
                                                >{(day !== -1) ? day.month_day : ""}</button>
                                    ))}
                                </div>
                                )
                            ))
                        }
                    </div>
                    <div className="calendar-right-nav"> <button onClick={() => this.navigateCalendar('forward')}><img src={require('../assets/right_arrow.svg')}/></button></div>
                </div>

                {(this.state.selected_day !== null 
                && this.props.data[
                    this.getDateString(this.state.selected_day.month_day, this.state.currMonth, this.state.currYear)
                ] !== undefined ) ? (
                    <div className="day-info-display">
                        <h2>
                            {this.props.data[
                                this.getDateString(this.state.selected_day.month_day, this.state.currMonth, this.state.currYear)
                            ].nome}
                        </h2>
                        <label>
                            {this.getDateString(this.state.selected_day.month_day, this.state.currMonth, this.state.currYear)}
                        </label>
                    </div>
                ) : ""}
                
            </div>
        )
    }
}

export default Calendar