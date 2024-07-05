import { useState } from "react";
import React from "react";
const Strength=({password})=>{
    
    const getPasswordStrength=()=>{
        const passwordLength=password.length;
        if(passwordLength<1)return "";
        else if(passwordLength<8)return "Good";
        else if(passwordLength<12)return "very Good";
        else if(passwordLength<16)return "strong";
        else if(passwordLength<20)return "very Strong";
    }
    const passwordStrength=getPasswordStrength();
    if(!passwordStrength)return <React.Fragment/>
    return <div className="strength">
        <label>Strength level:</label>
        <label>{passwordStrength}</label>

    </div>
}
export default Strength;