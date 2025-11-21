import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setWeather, setTraffic, setRefresh } from "../redux/slices/dataSlice"

function Dashboard() {
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.data.weather)
  const traffic = useSelector((state) => state.data.traffic)
  const refresh = useSelector((state)=> state.data.refresh)

  useEffect(async () => {
    try{
      const weatherRes = await axios.get("http://localhost:5000/api/weather/11230")
      dispatch(setWeather(weatherRes.data))
    }
    catch(err){ 
      console.log(err)
    }

    try{
      const trafficRes = await axios.get("http://localhost:5000/api/traffic/brooklyn")
      dispatch(setTraffic(trafficRes.data))
    }
    catch(err){
      console.log(err)
    }
  }, []);

  async function handleRefresh(){
    try{
      const weatherRes = await axios.get("http://localhost:5000/api/weather/11230")
      dispatch(setWeather(weatherRes.data))

      const trafficRes = await axios.get("http://localhost:5000/api/traffic/brooklyn")
      dispatch(setTraffic(trafficRes.data))

      const refreshRes = await axios.post("http://localhost:5000/api/refresh-data")
      dispatch(setRefresh(refreshRes.data)) 

      if(refreshRes.data.success){
        setTimeout(() => {
          dispatch(setRefresh({})) 
        }, 3000)
      }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <h1>DASHBOARD</h1>
      {refresh?.success && (
        <p style={{color:"green", fontWeight:"bold"}}>
          {refresh.success}
        </p>
      )}
      <h2>Weather</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>

      <h2>Traffic</h2>
      <pre>{JSON.stringify(traffic, null, 2)}</pre>

      <button onCLick = {handleRefresh}>Refresh</button>
    </>
  );
}

export default Dashboard;