import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


//confusing

function Protected({children,authentication=true}){

    const navigate=useNavigate()
    const [loader,setloader]=useState(true)
    const authStatus=useSelector((state)=>state.status)

    useEffect(()=>{

        if(authentication && authStatus !== authentication){
            navigate("/login")

        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }

        setloader(false)
    },[authStatus,navigate,authentication])

    return loader?<h1>Loading ...</h1> : <>{children}</>
}