import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TeamsList from './Teams/TeamsList'
import { useSnackbar } from "notistack";
import Home from './Home';
import LeaguesList from './Leagues/LeaguesList';
import LeagueStandings from './Leagues/LeagueStandings';
import TeamInfos from './Teams/TeamInfos';
import AllLeagesGames from './Games/AllLeagesGames';

function PrivateRoute() {
    let navigate = useNavigate();

    //const user = {username:"elton",role:"admin"}
    const role = localStorage.getItem("role");

   useEffect(()=>{
    if(role == "Admin"){
       
    }else{
        navigate("/Login");
    }
   }) 

   if(role == "Admin"){
    return (
     <Routes>
        <Route element={<Home/>} path="/" />
        <Route path="/TeamsList" element={<TeamsList/>}  />
        <Route path="/LeaguesList" element={<LeaguesList/>}  />
        <Route path="/LeagueStandings/:id" element={<LeagueStandings/>}  />
        <Route path="/TeamInfos/:name/:id" element={<TeamInfos/>}  />
        <Route path="/AllGames/:leagueId" element={<AllLeagesGames/>}  />
     </Routes>
    )
}else{
   
}
  
}

export default PrivateRoute