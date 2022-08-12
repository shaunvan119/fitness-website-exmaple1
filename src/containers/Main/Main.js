import './main.css'
import videoBg from "../../assets/videoBg.mp4"
import Count from '../../components/Count'

const Main = () => {
  return (
    
    <div className='main'>
    <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <h1 className='heading-main'>Thailand Health Retreat</h1>
    <p className='p-main'>Launching Soon</p>
    <Count/>
    </div>
    
    </div>
  )
}

export default Main