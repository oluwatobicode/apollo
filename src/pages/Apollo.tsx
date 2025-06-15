import Sidebar from "../components/App/Sidebar";
import Chat from "../components/App/Chat";

const Apollo = () => {
  return (
    <div className="chat flex h-screen">
      <Sidebar />
      <Chat />
    </div>
  );
};
export default Apollo;
