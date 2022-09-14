import {ClassificationModel} from "../api/types/classification-interface";
import React, {useCallback, useEffect, useState} from "react";
import Axios from "axios";
import ClassificationItem from "./ClassificationItem";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";


const ClassificationComponent = (props: { type: string, classifications: Array<ClassificationModel>}) => {

  return (
    <Grid container>
        <Grid xs={12}>
            <h1>{props.type}</h1>
            <TableContainer>
                <Table>
                {props.classifications.map(({id, classification, name}) => (
                    <TableRow key={id}>
                        <ClassificationItem
                            id={id}
                            name={name}
                            classification={classification}
                            onRemove={()=>{}}
                        />
                    </TableRow>
                ))}
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
  )
}

export default ClassificationComponent;