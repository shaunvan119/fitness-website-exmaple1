import './main.css'
import videoBg from "../../assets/videoBg.mp4"
import Count from '../../components/Count'
import logo from "../../assets/logo.png"
import CalenderDates from '../../components/CalenderDates'


const Main = () => {
  return (

    
    
    <div className='main'>
  
    <div className='overlay'></div>
    <button className='button-dates'>Check dates</button>
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <img src={logo} alt="Logo" className="logo" />
    <h1 className='heading-main'>Thailand Health Retreat</h1>
    <p className='p-main'>Launching Soon</p>
    <Count/>
    <CalenderDates/>
    </div>
    
    </div>
    
  )
}

export default Main