import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWeather, setTraffic } from "../redux/slices/dataSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.data.weather);
  const traffic = useSelector((state) => state.data.traffic);

  useEffect(() => {
    axios.get("http://localhost:5000/api/weather/11230")
      .then(res => dispatch(setWeather(res.data)))
      .catch(err => console.log(err));

    axios.get("http://localhost:5000/api/traffic/brooklyn")
      .then(res => dispatch(setTraffic(res.data)))
      .catch(err => console.log(err));

  }, []);

  return (
    <>
      <h1>DASHBOARD</h1>

      <h2>Weather</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>

      <h2>Traffic</h2>
      <pre>{JSON.stringify(traffic, null, 2)}</pre>
    </>
  );
}

export default Dashboard;