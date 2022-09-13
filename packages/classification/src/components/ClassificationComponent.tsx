import {Classification} from "../../types/Classification";
import React, {useCallback, useEffect, useState} from "react";
import Axios from "axios";

const ClassificationComponent = (props: { type: string, classifications: Array<Classification>}) => {

  return (
    <div>
      <h1>{props.type}</h1>
      {props.classifications.map((classification) => (
        <div key={classification.id}>
          <h2>{classification.name} - {classification.classification} - {classification.id}</h2>
        </div>
      ))}
    </div>
  )
}

export default ClassificationComponent;