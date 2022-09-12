import {Classification} from "../../types/Classification";
import React, {useEffect, useState} from "react";
import Axios from "axios";

const Destinations = () => {
    const type = 'DESTINATION'
    const [classifications, setClassifications] = useState<Classification[]>([]);

    useEffect(() => {
        const uri = type === 'DESTINATION'? 'http://localhost:8080/destination': 'http://localhost:8080/receiver';
        Axios({url: uri})
            .then(res => setClassifications(res.data))
            .catch(err => console.error(err));
    }, [setClassifications])

    return (
        <div>
            <h1>{type}</h1>
            {classifications.map((classification) => (
                <div key={classification.id}>
                    <h2>{classification.name} - {classification.classification}</h2>
                </div>
            ))}

        </div>
    )

}

export default Destinations;