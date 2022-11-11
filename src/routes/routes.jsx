import {Route, Routes} from "react-router-dom";
import SignUpFeature from "../features/auth/SignUp";
import SignInFeature from "../features/auth/SignIn";
import React, {useEffect} from "react";

function Routers() {
    // useEffect(() => {
    //     document.title = '';
    // }, []);
    return  <div>
        <Routes>
            <Route path="register" element={<SignUpFeature/>} />
            <Route path="login" element={<SignInFeature/>} />
        </Routes>
    </div>


}
export default Routers;