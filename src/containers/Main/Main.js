import './main.css'
import videoBg from "../../assets/videoBg.mp4"
import Count from '../../components/Count'
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";


const Main = () => {
  return (

    
    
    <div className='main'>
  
    <div className='overlay'></div>
    
  
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <Link to="/CheckDates"><button className='button-dates'>Check dates</button></Link>
    <img src={logo} alt="Logo" className="logo" />
    <h1 className='heading-main'>Thailand Health Retreat</h1>
    <p className='p-main'>Launching Soon</p>
    <Count/>

    </div>
    
    </div>
    
  )
}

export default Main