import React , {useState} from 'react'
import Chart from "./Chart";
import info from './data.json'
import logo from './images/logo.svg'


function App() {

  const [data,setData] = useState(info)

  const d = new Date()
  let day = d.getDay()
  day === 0 ? day = 6 : day -=1

  return (
    <div className='container'>

      <div className='top__container'>
      <div className='my__balance'>
        <span>My balance</span>
        <h4 className='balance__amount'>$921.48</h4>
      </div>
      <div>
        <img className='logo' src={logo} alt='logo img'/>
      </div>
    </div>
    <div className='bottom__container'>  
      <div>
        <h3 className='spending'>Spending - Last 7 days</h3>
        <div>
          <Chart day={day} data={data} />
        </div>
        <div className='footer'>
          <div>
            <span className='bottom__grey'>Total this month</span>
            <h2 className='bottom__amount'>$478.33</h2>
          </div>
          <div className='from__last__month'>
            <span className='percentage'>+2.4%</span>
            <span className='bottom__grey'>from last month</span>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default App;
