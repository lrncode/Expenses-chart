import React from 'react'
import ChartElement from './ChartElement'
import {v4} from 'uuid'

export default function Chart(props) {
    const {day,data} = props
  return (
    <div className='chart__list'>
      {data.map(element =>
        data.indexOf(element) === day
        ? <ChartElement currentDay={true} key={v4()} data={element} />
        : <ChartElement currentDay={false} key={v4()} data={element} />)}
    </div>
  )
}
