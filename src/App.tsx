import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Apollo from "./pages/Apollo";
import Start from "./pages/Start";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import VerifyUser from "./pages/VerifyUser";
import VerifyUserEmail from "./pages/VerifyUserEmail";
import ResetEmailPage from "./pages/ResetEmailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<VerifyUser />} />
        <Route path="/verifyemail" element={<VerifyUserEmail />} />
        <Route path="/resetpassword" element={<ResetEmailPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/app" element={<Apollo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
