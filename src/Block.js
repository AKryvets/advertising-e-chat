import React from "react";
import {redirect} from "./App";

export function Block(props) {
    return (
        <div className={"container__" + props.classStyle + " block"} onClick={redirect}>
            <div className={"block__title-" + props.classStyle}>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}