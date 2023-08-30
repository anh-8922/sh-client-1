import herosectionA from '../Assets/herosectionA.jpg';
import Navigator from '../Components/Navigator';
import MainLayout from '../Layouts/MainLayout';

export default function Home() {
    return(
        <MainLayout>
            <div style={{
                backgroundImage: `url("${herosectionA}")`, backgroundSize:'cover',
                width:'100%', height:'45rem', padding: '1.5rem 2rem 0'}}>
            </div>
            
        </MainLayout>
       
    )
}

