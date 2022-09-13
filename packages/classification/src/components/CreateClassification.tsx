import React, {useState} from "react";
import { Classification } from "../../types/Classification";
import {v4 as uuidv4} from 'uuid';
import Axios from "axios";
import ClassificationComponent from "./ClassificationComponent";

const CreateClassification = (props: {type: string}) => {
  const [classificationState, setClassificationState] = useState({
    name: "",
    classification: 0,
    id: "",
    type: props.type
  });

  const handleChange = (event) => {
    setClassificationState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const classification: Classification = {
      name: classificationState.name,
      type: classificationState.type,
      classification: classificationState.classification,
      id: uuidv4()
    };

    const uri = props.type === 'DESTINATION'? 'http://localhost:8080/destination': 'http://localhost:8080/receiver';

    try {
      Axios.post(uri, classification)
        .then(res => setClassificationState(res.data))
        .catch(err => console.error(err));
      console.log(classificationState);
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <ClassificationComponent type={props.type}/>
      <form onSubmit={handleSubmit}>
        <div className={"form-input"}>
          <input type={"text"} name={"name"} value={classificationState.name} onChange={handleChange} placeholder={"Name"}/>
        </div>
        <div className={"form-input"}>
          <input type={"text"} name={"classification"} value={classificationState.classification} onChange={handleChange} placeholder={"Classification"}/>
        </div>
        <div className={"form-input"}>
          <button type={"submit"}>Submit!</button>
        </div>
      </form>
    </div>
  )
};

export default CreateClassification;
