import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import SignUpFeature from "./features/auth/SignUp";
import SignInFeature from "./features/auth/SignIn";

function App() {
    return <div className="mainDiv">
        <div className="contentDiv">
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<SignUpFeature/>}></Route>
                <Route path="/sign-in" element={<SignInFeature/>}></Route>
            </Routes>
        </div>
    </div>
}

export default App
