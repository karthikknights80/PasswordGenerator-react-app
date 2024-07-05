import { useState } from "react";

const usePasswordGenerator=()=>{
    const [password,setPassword]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    const generatePassword=(checkboxesData,length)=>{
        let charset="",generatedPassword="";
        const selectedOptions=checkboxesData.filter((x)=>x.state);
        if(!selectedOptions.length){
            setErrorMessage("select atleast one option");
            setPassword("");
            return;
        }
        selectedOptions.forEach(x => {
            switch(x.title){
                case "Include UpperCase Letters":
                    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include LowerCase Letters":
                    charset+="abcdefghojklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset+="0123456789";
                    break;
                case "Include Symbols":
                    charset+="!@#$%^&()";
                    break;
                default:
                    break;
                
            }
        });

        for(let i=0 ;i<length;i++){
            const randindex=Math.floor(Math.random()*charset.length);
            generatedPassword+=charset[randindex];
        }
        setPassword(generatedPassword);
        setErrorMessage("");
    }
    return {password,errorMessage,generatePassword};
}
export default usePasswordGenerator;