import { useNavigate } from "react-router-dom"

function Navbar(){

    const  navigate = useNavigate()

    function handleOnClick(){
        window.localStorage.removeItem("isLoggedIn")
        navigate("/login")
    }

    return <button onClick = {handleOnClick}>Logout</button>
}

export default Navbar