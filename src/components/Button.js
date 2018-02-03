import React from "react";
import Colors from "../ui/Colors";

const style = ({
    color = Colors.White,
    backgroundColor = Colors.Blue,
    borderRadius = "10px",
    fontSize = "1rem" }) => ({
        backgroundColor,
        color,
        fontSize,
        borderRadius,
        border: "none",
        padding: "10px"
    });

const Button = (props) => {

    return (
        <button style={style(props)} onClick={props.onClick}>{props.text}</button>
    );
};

export default Button;