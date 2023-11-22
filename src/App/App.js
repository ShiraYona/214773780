import { useState } from "react"
import * as React from 'react';

 function  App() {
        const [datestart, setDatestart]=useState("")
        const [dateend, setDateend]=useState("")
        const [checked, setChecked] = React.useState(false);

        
      const a = fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${datestart}&end==${dateend}`)
        .then(response => response.json())
        .then(data => console.log(data))
         .catch((error) =>{
          console.error(error);
         });

         const cards = (item)=>{
            <div className="card">
                {item.title.value}
                <br/>
                {item.description.value}
                <br/>
                {item.start.value}
            </div>
         }

         const getdate =()=>{ 
            a && a.map((item) =>{
            cards(item)
        } )}
        
        const handleChange = () => {
            setChecked(!checked);
            if(checked){
              let pShavua = getdate();
              return(
                pShavua.map((item)=>{
                    if (item.classname.value==="parashat")
                    cards(item)
                })
              )
              
            }
        } 

  return (
         <div>
            <h4>Enter start date like:2023-07-25</h4>
                <input type={"date"} onChange={(e) => { setDatestart(e.target.value) }}></input>
                {console.log(datestart)}
            <h4>Enter end date like:2023-07-25</h4>
                <input type={"date"} onChange={(e) => { setDateend(e.target.value) }}></input>
                {console.log(dateend)}
            <br/>
            <br/>
            <button type="button" onClick={()=>{getdate()}}>Show cards</button>
            <br/>
            <br/>
            <input type="checkbox" checked={checked} onChange={handleChange}/> Show only "parashot shavua"
            
         </div>
   )

}

export default App;

