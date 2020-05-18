import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer} from 'react-icons/fa';
import Button from '@material-ui/core/Button';


export default function Icon() {

        const step1 = {
            borderRadius: 2,
            color: 'white',
            fontSize: 22,
            height: 48,
            padding: '0 60px',
            marginLeft: '20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            hover: 'red',
            outlineColor: 'blue',
            outlineWidth: '3px',
            border: '1px solid',
        };
        const step2 = {
            borderRadius: 2,
            color: 'white',
            fontSize: 18,
            height: 48,
            padding: '0 34px',
            marginLeft: '20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            hover: 'red',
            outlineColor: 'blue',
            outlineWidth: '3px',
            border: '1px solid',
        }
        const text = {
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: 400
        }

    const walkingCalsPerMinute = 4
    const cyclingCalsPerMinute = 8
    const runningCalsPerMinute = 11
    const swimmingCalsPerMinute = 10
    const activityEnum = Object.freeze({"Walking": 1, "Running": 2, "Swimming": 3, "Cycling": 4})
    let msg = ""
    let duration = ""
    let activity = ""

    function checkValues(activity, duration) {
        if (activity && duration) {
            switch (activity) {
                //Walking
                case 1:
                    msg = "For " + duration + " mins of Walking you will burn " + walkingCalsPerMinute * duration + "kcals";
                    break;
                //Running
                case 2:
                    msg = "For " + duration + " mins of Running you will burn " + runningCalsPerMinute * duration + "kcals";
                    break;
                //Swimming
                case 3:
                    msg = "For " + duration + " mins of Swimming you will burn " + swimmingCalsPerMinute * duration + "kcals";
                    break;
                //Cycling
                case 4:
                    msg = "For " + duration + " mins of Cycling you will burn " + cyclingCalsPerMinute * duration + " kcals";
                    break;
                default:
                    msg = '';
            }
            document.getElementById("message").innerText = msg;
        }
    }

    function activityChange(value) {
        activity = value;
        checkValues(activity, duration)
    }

    function durationChange(value) {
        duration =  value;
        checkValues(activity, duration)
    }

    return (
        <div>
            <h4> This first calculation will provide the calorie expenditure from both of the chosen options </h4>
            <br/>
            <h5> Step 1: Choose Activity</h5>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Walking)}><MdDirectionsWalk/></Button>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Cycling)}><MdDirectionsBike/></Button>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Running)}><MdDirectionsRun/></Button>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Swimming)}><FaSwimmer/></Button>
            <br/>
            <br/>
            <h5> Step 2: Choose Duration </h5>
            <Button style={step2}
                    onClick={() => durationChange(15)}>15 mins</Button>
            <Button style={step2}
                    onClick={() => durationChange(30)}>30 mins</Button>
            <Button style={step2}
                    onClick={() => durationChange(45)}>45 mins</Button>
            <Button style={step2}
                onClick={() => durationChange(60)}>60 mins</Button>
            <br/>
            <br/>
            <h4 style={text} id="message">Results go here</h4>
        </div>
    )
};
