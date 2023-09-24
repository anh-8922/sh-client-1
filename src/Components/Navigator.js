import { NavLink } from "react-router-dom";
import logosh from '../Assets/logosh.png';
import '../Styles/Components.css';

export default function Navigator() {
    return (
        <div className='nav-bar'>
            <Logo/>
            <ul>
                <li><NavLink className='nav-items'>Info</NavLink></li>
                <li><NavLink className='nav-items'>Accommodation</NavLink></li>
                <li><NavLink className='nav-items'>Service</NavLink></li>
                <li><NavLink className='nav-items'>Community</NavLink></li>
                <li>User</li>
            </ul>
        </div>
        
    )
}

export function Logo() {
    return(
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'1rem'}}>
            <img src={logosh} alt="logo" style={{width:'4rem'}}/>
            <h1 style={{fontFamily:'Paytone One', letterSpacing:'2px', fontSize:'2.5rem'}}>Settlers Hub</h1>
        </div>
    )
}