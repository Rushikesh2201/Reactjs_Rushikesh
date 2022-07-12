import React from "react";
import { DateRangePicker } from 'rsuite';
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import moment from "moment";

const Ranges = [
    {
        label: 'Last 30 days',
        value: [startOfDay(subDays(new Date(), 31)), endOfDay(addDays(new Date(), -1))]
    },
    {
        label: 'yesterday',
        value: [startOfDay(addDays(new Date(), -1)), endOfDay(addDays(new Date(), -1))]
    },
    {
        label: 'last7Days',
        value: [startOfDay(subDays(new Date(), 7)), endOfDay(addDays(new Date(), -1))]
    }
];

const CustomDateRangePicker = (props) => {
{console.log(props)}
    return (<DateRangePicker showOneCalendar placeholder="Default" size="lg" value={props.filterDateRange} onOk={(e) => { props.onChangeDateFilter(e) }}
        ranges={Ranges} cleanable={false} placement='auto' disabledDate={date => moment().isBefore(date, subDays(new Date(), 1))} 
        className={[...props.className].join(" ")}/>
    )
}

export { CustomDateRangePicker };