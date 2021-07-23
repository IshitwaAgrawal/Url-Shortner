import React,{useState} from 'react';

const InputElement = (props) =>{
    const type = props.password?"password":"text";

    const [value,setValue] = useState("");

    const changeValue = (event) =>{
        setValue(event.target.value);
    }
    return (
        <div className="inputelement__main">
            <h4>{props.heading}</h4>
            <input 
                type={type} 
                placeholder={props.placeholder}
                value={value}
                onChange={changeValue}/>
        </div>
    );
};

export default InputElement;