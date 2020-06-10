import React from "react";

const instruct = {
    color: 'black'
}

//colour is black for the text of the help option.

const help = () => {
    return (
        <div style={instruct}>
            <h2> Data Privacy</h2>
            <p>  This is a proof of concept application, no data will be taken from you through this application. </p>
            <h2> How to use the tool:</h2>
            <p> The tool is used for the following assumptions, they are an averaged sized person and average weight. The food provided will be of regular size
                and only four activities are available for this prototype.
            </p>
            <h4> Step 1:</h4>
            <p> The first conversion provides you with a choice of activities and the duration to do that activity. After choosing each choice you will then get a result of how many calories have been burnt. </p>
            <h4> Step 2:</h4>
            <p> The second conversion provides you with a choice of activities and food. After choosing an activity and food, the result will be presented to you with how much of an exercise you will have to perform in order to burn off a type of food.</p>
            <h4> Step 3:</h4>
            <p> The third conversion provides you with a targeted calorie input and food option, this will provide you with how much of a snack you would need to consume depending on your target calorie input.</p>
        </div>
    );
};

//explaining what the app does and information about data privacy.


export default help;