import React from "react";

const instruct = {
    color: 'white',
}

const help = () => {
    return (
        <div style={instruct}>
            <h2> Help and instruction</h2>
            <p>Purpose: The purpose of this tool is for people to understand the concept of what they are consuming after they have done an activity, to understand what they have burned from the duration of an activity and what they would have to consume from there targeted kcal intake. </p>
            <h2> How to use the tool:</h2>
            <p> Data privacy according to GDPR, not taking any data. The tool is used for the following assumptions: they are an averaged sized person and average weight and so everything will be a regular size</p>
        </div>
    );
};



export default help;