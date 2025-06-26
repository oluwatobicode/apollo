import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetPasswordProvider } from "./contexts/ResetPasswordProvider";

import Apollo from "./pages/Apollo";
import Start from "./pages/Start";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <ResetPasswordProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* the rest  */}
          <Route path="/chat" element={<Apollo />} />
          <Route path="/chat/id" element={""} />
        </Routes>
      </BrowserRouter>
    </ResetPasswordProvider>
  );
}

export default App;
