import { ClassificationModel } from "../api/types/classification-interface";
import React, { useEffect, useState } from "react";
import Axios from "axios";

export const ClassificationComponent = (props: { type: string }) => {
  const [classifications, setClassifications] = useState<ClassificationModel[]>([]);

  useEffect(() => {
    if (props.type !== "DESTINATION" && props.type !== "RECEIVER") {
      console.error(`${props.type} is not a valid type`);
    }
    const uri =
      props.type === "DESTINATION"
        ? "http://localhost:8080/destinations"
        : "http://localhost:8080/receivers";
    Axios({ url: uri })
      .then((res) => setClassifications(res.data))
      .catch((err) => console.error(err));
  }, [setClassifications]);

  return (
    <div>
      <h1>{props.type}</h1>
      {classifications.map((classification) => (
        <div key={classification.id}>
          <h2>
            {classification.name} - {classification.classification}
          </h2>
        </div>
      ))}
    </div>
  );
};
