import Chat from "./chat/chat";
import Home from "./home/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect("/");

function Appmain(props) {
  let params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={params.username}
          roomname={params.roomname}
          socket={socket}
        />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home socket={socket} />} />

          <Route path="/chat/:roomname/:username" element={<Appmain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
