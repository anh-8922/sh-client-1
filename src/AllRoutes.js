import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Landing from "./Pages/LandingPage";

export default function AllRoutes () {
    return(
      <>
    <Routes>
      {/*<Route element={<LoginLayout/>}>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resetpassword" element={<ResetPassowrd/>}/>
        <Route path="/forgotpassword" element={<ForgotPassowrd/>}/>
      </Route>
    */}
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>

        {/* <Route path= '/singlepropertypage/:id' element = {<SingleProperty/>} /> 
            <Route path="/singleguidepost/:id" element={<SingleSubPage/>} />
            <Route path="/singlesearchpost/:id" element={<SearchSubPage/>} />
        */}

      {/*<Route element={<ProtectedLayout/>}>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path='/addnewad' element={<AddNewAds/>}/>
        <Route path='/editpropertyad/:id' element={<EditProperties/>}/>
        <Route path='/editservicead/:id' element= {<EditServiceAd/>}/>
        <Route path='/editrequestad/:id' element= {<EditRequestAds/>}/>
      </Route>
*/}
    </Routes>
      </>
    )
}

