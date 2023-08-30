import { NavLink } from "react-router-dom";
import logosh from '../Assets/logosh.png';
import '../Styles/Components.css';

export default function Navigator() {
    return (
        <div className='nav-bar'>
            <Logo/>
            <ul>
                <li><NavLink>Discover</NavLink></li>
                <li><NavLink>Accommodation</NavLink></li>
                <li><NavLink>Service</NavLink></li>
                <li><NavLink>Community</NavLink></li>
                <li>User</li>
            </ul>
        </div>
        
    )
}

export function Logo() {
    return(
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'1rem'}}>
            <img src={logosh} alt="logo" style={{width:'4rem'}}/>
            <h1>Settlers Hub</h1>
        </div>
    )
}