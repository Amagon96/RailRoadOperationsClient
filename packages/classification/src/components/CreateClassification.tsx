import React, {useState} from "react";
import { Classification } from "../../types/Classification";
import {v4 as uuidv4} from 'uuid';
import Axios from "axios";

const CreateClassification = () => {

  const [state, setState] = useState({
    name: "",
    classification: 0,
    id: "",
    type: ""
  });

  const handleChange = (event) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const classification: Classification = {
      name: state.name,
      type: state.type,
      classification: state.classification,
      id: uuidv4()
    };
    console.log(classification);

    try {
      const response = await Axios.post('http://localhost:8080/destination', classification)
    } catch (e) {
      alert(e)
    }
  }

  return (
      <div className={"app"}>
        <form onSubmit={handleSubmit}>
          <div className={"form-input"}>
            <input type={"text"} name={"name"} value={state.name} onChange={handleChange} placeholder={"Name"}/>
          </div>
          <div className={"form-input"}>
            <input type={"text"} name={"classification"} value={state.classification} onChange={handleChange} placeholder={"Classification"}/>
          </div>
          <div className={"form-input"}>
            <input type={"text"} name={"type"} value={state.type} onChange={handleChange} placeholder={"Type"}/>
          </div>
          <div className={"form-input"}>
            <button type={"submit"}>Submit!</button>
          </div>
        </form>
      </div>
  )
};

export default CreateClassification;
