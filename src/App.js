import {Route,Routes } from "react-router-dom";
import SignUpFeature from "./features/auth/SignUp";
import SignInFeature from "./features/auth/SignIn";
import FeedFeature from "./features/feed";
import TodoHomePage from "./features/todo/TodoHomePage";


function App() {
    return <div className="mainDiv">
        <div className="contentDiv">
            {/*<Header />*/}
            <Routes>
                <Route path="/" exact element={<TodoHomePage/>}></Route>
                <Route path="/register" element={<SignUpFeature/>}></Route>
                <Route path="sign-in" element={<SignInFeature/>}></Route>
                <Route path="/feed" element={<FeedFeature/>}></Route>
            </Routes>
        </div>
    </div>
}


export default App
