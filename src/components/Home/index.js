import React from "react";


function Home () {
    const [state,setState] =React.useState();
    const [isShowResult ,setIsShowResult] =React.useState(false);
    const [inputsValue,setInputsValue] =React.useState({ 
        fullname: "",
        lastname: "",
        
    });

    return (
<>


  {/* {isShowResult ?(<Inputs  inputsValue ={inputsValue} setInputsValue={setInputsValue} setIsShowResult ={setIsShowResult}/>):<></>} */}
</>
    );
}

export default Home;