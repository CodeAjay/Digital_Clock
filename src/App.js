import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  let date = new Date();
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const currentTime = (time) => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  let hr = date.getHours();
  // console.log(time);
  // console.log(hr);

  let stl = "";
  if (hr > 0 && hr < 12) {
    stl = {
      color: "green"
    };
  } else if (hr >= 12 && hr < 4) {
    stl = {
      color: "yellow"
    };
  } else {
    stl = {
      color: "red"
    };
  }

  setInterval(currentTime, 1000);
  return (
    <div className="tmbg">
      <h1 className="time" style={stl}>
        {ctime}
      </h1>
    </div>
  );
};

export default App;
