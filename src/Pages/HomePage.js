import herosectionA from '../Assets/herosectionA.jpg';
import '../Styles/Pages.css';
import MainLayout from '../Layouts/MainLayout';
import News from '../Components/News';
import Category from '../Components/Category';

export default function Home() {
    return(
        <MainLayout>
            <div className='heroSectionA' style={{
                backgroundImage: `url("${herosectionA}")`}}>
                <h1>There should be some title here</h1>
            </div>
            <Category/>
            <News/>
            
        </MainLayout>
        
       
    )
}

