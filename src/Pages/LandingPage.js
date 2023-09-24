import herosectionA from '../Assets/herosectionA.jpg';
import '../Styles/Pages.css';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    const handleGetStartedClick = () => {
        navigate('/home'); // Navigate to the "/home" route
    }

    const landingTitle = {
        fontFamily:'Paytone One, cursive',
        fontSize: '5.5rem',
        letterSpacing: '2px'
    }       
        
    

    return(
        <div className='landing' style={{
            backgroundImage: `url("${herosectionA}")`}}>
            <div className='member-navigator'>
                About us
            </div>
            <div style={landingTitle}>Settlers Hub</div>
            <div style={{fontFamily:'Homemade Apple, sans-serif'}}>Navigating Your New Beginning</div>
            <button className='landing-button' onClick={handleGetStartedClick}>Get Started</button>
        </div>
    )
}