import Navigator from "../Components/Navigator";

export default function MainLayout({children}) {
    return(
        <>
            <Navigator/>
            <div>{children}</div>
            <div style={{
                width:'20rem', position:'fixed', backgroundColor:'pink', 
                bottom:'0', right:'0', padding:'1rem', borderTopLeftRadius:'1rem'}}>
                Search bar
            </div>
        </>
    )
}