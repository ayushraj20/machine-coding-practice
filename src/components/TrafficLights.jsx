import { useEffect, useState } from 'react';
import '../styles/TrafficLights.css';

const LIGHTS = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
};

const TrafficLights = () => {
  const [active, setActive] = useState(LIGHTS.red);

  useEffect(() => {
    if (active === LIGHTS.red) {
      setTimeout(() => setActive(LIGHTS.yellow), 4000);
    } else if (active === LIGHTS.green) {
      setTimeout(() => setActive(LIGHTS.red), 3000);
    } else {
      setTimeout(() => setActive(LIGHTS.green), 500);
    }
  }, [active]);

  return (
    <div className="lights-container">
      <div
        className="light green"
        style={active !== LIGHTS.green ? { opacity: '30%' } : {}}
      ></div>

      <div
        className="light yellow"
        style={active !== LIGHTS.yellow ? { opacity: '30%' } : {}}
      ></div>

      <div
        className="light red"
        style={active !== LIGHTS.red ? { opacity: '30%' } : {}}
      ></div>
    </div>
  );
};

export default TrafficLights;
