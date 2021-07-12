import React,{Component, useState} from 'react';
function Main() {

    const[inputvalue,setinputvalue]=useState('')

    function display(value){
        setinputvalue(inputvalue+value)
    }
    function calculate(){

    }

    return(
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
               <h1>Calculator</h1>

               <table className='table'>
               {/* this is a bootstrap table class */}
                   <tr>
                       <td colSpan='3'><input type="text" value={inputvalue} /></td>
                       <td ><button >C</button></td>
                   </tr>
                   <tr>
                    <td><button onClick={()=>{display('1')}}>1</button></td>
                    <td><button onClick={()=>{display('2')}}>2</button></td>
                    <td><button onClick={()=>{display('3')}}>3</button></td>
                    <td><button onClick={()=>{display('/')}}>/</button></td>
                   </tr>
                   <tr>
                    <td><button onClick={()=>{display('4')}}>4</button></td>
                    <td><button onClick={()=>{display('5')}}>5</button></td>
                    <td><button onClick={()=>{display('6')}}>6</button></td>
                    <td><button onClick={()=>{display('-')}}>-</button></td>
                   </tr>
                   <tr>
                    <td><button onClick={()=>{display('7')}}>7</button></td>
                    <td><button onClick={()=>{display('8')}}>8</button></td>
                    <td><button onClick={()=>{display('9')}}>9</button></td>
                    <td><button onClick={()=>{display('+')}}>+</button></td>
                   </tr>
                   <tr>
                    <td><button onClick={()=>{display('.')}}>.</button></td>
                    <td><button onClick={()=>{display('0')}}>0</button></td>
                    <td><button onClick={()=>{calculate()}}>=</button></td>
                    <td><button onClick={()=>{display('*')}}>*</button></td>
                   </tr>

               </table>
            </div>
        </div>
    )
}
export default Main;