import {Classification} from "../../types/Classification";
import React, {useEffect, useState} from "react";

const ClassificationComponent = (props: {type: string}) => {
    const [classifications, setClassifications] = useState<Classification[]>([]);
    const [error, setError] = useState({});

    useEffect(() => {
        const uri = props.type === 'DESTINATION'? 'http://localhost:8080/destinations': 'http://localhost:8080/receivers'
        fetch(uri)
            .then(response => response.json())
            .then(res => setClassifications(res))
            .catch(err => setError(err));
    }, [])

    return (
        <div>
            <h1>{props.type}</h1>
            {classifications.map((classification) => (
                <div key={classification.id}>
                    <h2>{classification.name} - {classification.classification}</h2>
                </div>
            ))}

        </div>
    )

}

export default ClassificationComponent;