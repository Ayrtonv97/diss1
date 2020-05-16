import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import styles from './walkingIcon.module.css';
import {makeStyles} from '@material-ui/core/styles';


export default function Icon() {

        const style = {
            borderRadius: 2,
            color: 'white',
            fontSize: 22,
            height: 48,
            padding: '0 60px',
            marginLeft: '20px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            hover: 'red',
            outlineColor: 'red',
            outlineWidth: '3px',
            border: '1px solid'
        };

    const walkingCalsPerMinute = 5
    const cyclingCalsPerMinute = 15
    const runningCalsPerMinute = 10
    const swimmingCalsPerMinute = 20
    const activityEnum = Object.freeze({"Walking": 1, "Running": 2, "Swimming": 3, "Cycling": 4})
    let msg = ""
    let duration = ""
    let activity = ""

    function checkValues(activity, duration) {
        if (activity && duration) {
            switch (activity) {
                //Walking
                case 1:
                    msg = "For " + duration + " of Walking you will burn ..." + walkingCalsPerMinute * duration;
                    break;
                //Running
                case 2:
                    msg = "For " + duration + " of Running you will burn ..." + runningCalsPerMinute * duration;
                    break;
                //Swimming
                case 3:
                    msg = "For " + duration + " of Swimming you will burn ..." + swimmingCalsPerMinute * duration;
                    break;
                //Cycling
                case 4:
                    msg = "For " + duration + " of Cycling you will burn ..." + cyclingCalsPerMinute * duration;
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
            <br/>
            <h5> Step 1: Choose Activity</h5>
            <Button style={style}
                    onClick={() => activityChange(activityEnum.Walking)}><MdDirectionsWalk/></Button>
            <Button style={style}
                    onClick={() => activityChange(activityEnum.Cycling)}><MdDirectionsBike/></Button>
            <Button style={style}
                    onClick={() => activityChange(activityEnum.Running)}><MdDirectionsRun/></Button>
            <Button style={style}
                    onClick={() => activityChange(activityEnum.Swimming)}><FaSwimmer/></Button>
            <br/>
            <br/>
            <h5> Step 2: Choose Duration </h5>
            <Button style={style}
                    onClick={() => durationChange(15)}>15 </Button>
            <Button style={style}
                    onClick={() => durationChange(30)}> 30 </Button>
            <Button style={style}
                    onClick={() => durationChange(45)}> 45 </Button>
            <Button style={style}
                onClick={() => durationChange(60)}>
                60
            </Button>
            <br/>
            <p id="message">Results go here</p>
        </div>
    )
};
