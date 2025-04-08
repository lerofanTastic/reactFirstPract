import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CustomComponent = () => {
    const navigate = useNavigate();
    function goBack(){
        navigate(-1)
    }
    function goForward(){
        navigate(1)
    }
  return (
    <div>
        <button onClick={goBack}>GoBack</button>
        <button onClick={goForward}>GoForward</button>
    </div>
  )
}
