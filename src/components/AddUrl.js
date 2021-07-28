import React,{useState} from 'react';
import axios from '../utils/axios';
import { connect } from 'react-redux';
import * as actions from '../utils/actions';

const AddUrl = ({id,jwt,urls_changed}) =>{

    const [url,setUrl] = useState("");
    
    const addUrl_handler = () => {

        const uuid = convert(id);
        
        const url_data = {
            "long_url":url,
        };

        axios.post('/api1/createNewUrl/'+uuid,url_data,{
            headers: {
                "Authorization": "Bearer " + jwt
            }})
            .then(res => {
                console.log(res.data);
                urls_changed(res?.data.body);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const convert = (id) => {
        var l = "";
        for (var i = 0; i < id?.length; i++) {
            if (id[i] !== '-') {
                l = l + id[i];
            }
        }
        l = l.substring(0, l.length);
        return l;
    }

    const urlChangeHandler = (event) =>{
        setUrl(event.target.value);
    };

    return (
        <div className="addurl">
            <input className="addurl__input" type="text" value={url} onChange={urlChangeHandler} />
            <button className="addurl__button" onClick={addUrl_handler} >Add</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    urls_changed:(urls)=>dispatch({type:actions.change_urls,payload:urls}),
});

export default connect(null,mapDispatchToProps)(AddUrl);