import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import SignUpFeature from "./features/auth/SignUp";
import SignInFeature from "./features/auth/SignIn";
import FeedFeature from "./features/feed";
import {connect} from "react-redux";
import {mapStateToProps} from "react-redux/es/connect/mapStateToProps";
import ReduxHomePage from "./features/reduxDemo/ReduxHomePage";
import TodoHomePage from "./features/todo/TodoHomePage";


function App() {
    return <div className="mainDiv">
        <div className="contentDiv">
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<TodoHomePage/>}></Route>
                <Route path="/register" element={<SignUpFeature/>}></Route>
                <Route path="/sign-in" element={<SignInFeature/>}></Route>
                <Route path="/feed" element={<FeedFeature/>}></Route>
            </Routes>
        </div>
    </div>
}


export default App
