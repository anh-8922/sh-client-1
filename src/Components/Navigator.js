import { NavLink } from "react-router-dom";


export default function Navigator() {
    return (
        <div style={{
            backgroundColor:'whitesmoke', borderRadius:'50%', margin:'1rem',
            display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
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
        <>
            <image></image>
        </>
    )
}