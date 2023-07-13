import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
  console.log("server_url="+import.meta.env.VITE_SERVER_URL)
  console.log("ws_url="+import.meta.env.VITE_WS)
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App