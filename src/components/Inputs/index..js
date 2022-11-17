import React from 'react'

function Inputs({inputsValue,setInputsValue,setIsShowResult}) {

    const handleChangeInputValue =() => {
        setInputsValue();
    };

    const  handleClickedButton = () => setIsShowResult(true);npm 
  return (
   <>
   <label htmlFor ="fullname">
    Firstname
   </label>
   <input id='fullname' placeholder='Name' defaultValue={inputsValue} name ='fullname' ></input>
   <label>
 Lastname
   </label>
   <input placeholder='lastname' defaultValue={inputsValue} name ='lastname'></input>
   <button>Add Inout</button>
   </>
  )
}

export default Inputs;

