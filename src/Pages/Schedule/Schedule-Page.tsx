import './Styles/Schedule-Page.css'
import {Navigation} from "../../Components/Navigation/Navigation"
import {WeekDaySchedule} from "./WeekDaySchedule"

export function SchedulePage() {
    return(
        <div id={'schedule-wrapper'}>
            <Navigation/>
            <div className={'container'}>
                <h1 className={'title'}>Schedule</h1>
                <div className={'content flex-property-set_between'}>
                    <div className={'content__column'}>
                        <WeekDaySchedule weekDay={'Monday'} />
                        <WeekDaySchedule weekDay={'Wednesday'} />
                        <WeekDaySchedule weekDay={'Friday'} />
                    </div>
                    <div className={'content__column'}>
                        <WeekDaySchedule weekDay={'Tuesday'} />
                        <WeekDaySchedule weekDay={'Thursday'} />
                    </div>
                </div>
            </div>
        </div>
    )
}