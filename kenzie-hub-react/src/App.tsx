import UserProvider from "./context/UserContext";
import Routes from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />

      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
