import React from 'react';
import {Badge} from "reactstrap";

const log = {
    color: 'black',
}
//coloured the text in white.

const MyLog = () => {
    return (
        <div style={log}>
            <h1>My Log</h1>
            <br/>
            <p> Your calculated log is as follows - </p>
            <h4> Submissions: </h4>
            <br/>
            <h6> Calculation 1 (Tab 1): </h6>
            <p> <Badge color="primary">1</Badge> You chose activity: Running. And duration: 15 mins. You will burn 165 kcals</p>
            <br/>
            <h6> Calculation 2 (Tab 2): </h6>
            <p> <Badge color="primary">1</Badge> You chose activity: Cycling. And food: Apple. You will have to do this exercise for 6.25 mins to burn off: 1 apple</p>
            <p>  <Badge color="primary">2</Badge> You chose activity: Swimming. And food: Chocolate bar. You will have to this exercise for 22.8 mins to burn off: 1 mars bar</p>
            <br/>
            <h6> Calculation 3 (Tab 3): </h6>
            <p> <Badge color="primary">1</Badge> For eating 2000 calories worth of apples, you would need to consume 40 apples.</p>
        </div>
    );
};

//a hardcoded log of what the saved data would have looked like if the user were to save their calculations

export default MyLog;