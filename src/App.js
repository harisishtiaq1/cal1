import "./App.css";
import Timeline from "./Components/Timeline";
import { useState } from "react";
import Profile from "./Components/Profile";
import Comments from "./Components/Comments";
import Inbox from "./Components/Inbox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Messeges from "./Components/Messeges";
import { messages } from "./data";
import { Data } from "./data";
function App() {
  const [message] = useState(messages);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timeline data={Data} />} />
        <Route
          path="/:id"
          exact={true}
          element={<Profile data={Data} />}
        ></Route>
        <Route
          path="/:id/:title"
          exact={true}
          element={<Comments data={Data} />}
        ></Route>
        <Route
          path="/messages"
          exact={true}
          element={<Messeges data={message} />}
        ></Route>
         <Route
          path="/messages/:id"
          exact={true}
          element={<Inbox message={message} data={Data} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
