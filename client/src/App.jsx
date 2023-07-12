import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  //axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.baseURL = import.meta.env.SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App