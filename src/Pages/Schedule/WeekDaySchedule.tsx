type PropsType = {
    weekDay: string
}

export function WeekDaySchedule({weekDay}: PropsType) {
    return(
        <div className={'column__item'}>
            <h3 className={'small-title'}>{weekDay}</h3>
            <hr className={'item__line'}/>
            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
            <p className={'item__txt'}>Homework: 14:00-15:00</p>
            <p className={'item__txt'}>Checking homework: 15:20-16:20</p>
        </div>
    )
}