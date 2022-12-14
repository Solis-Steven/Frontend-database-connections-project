import React from "react";
import "./Options.css"

function Options( props ) {

    const handleCheckboxs = ( {target} ) => {
        console.log(target.value);
    }

    return(
        <>
            <th>{props.schemaName}<input value={props.schemaName} onChange={handleCheckboxs} type="checkbox"></input></th>
            <th>{props.tableName}<input value={props.tableName} onChange={handleCheckboxs} type="checkbox"></input></th>
            <th>{props.attributesInformation.columnName}<input value={props.attributesInformation.columnName} onChange={handleCheckboxs} type="checkbox"></input></th>
            <th>{props.attributesInformation.dataType}</th>
        </>
    );
}

export { Options };