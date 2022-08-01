import React from 'react'

export default function ChartElement(props) {

  const {day,amount} = props.data

    const bgColor = props.currentDay ? "hsl(186, 34%, 60%)" : ''

  return (
    <div className='chart' >
      <div className="chart__amount" style={{height:`${amount*2}px`,backgroundColor:bgColor}}></div>
      <p className='day'>{day}</p>
    </div>
  )
}
