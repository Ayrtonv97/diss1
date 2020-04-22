import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer} from 'react-icons/fa';
import {IconContext} from "react-icons";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';


export default function Icon2() {

    const walkingCalsPerMinute = 5
    const cyclingCalsPerMinute = 15
    const runningCalsPerMinute = 10
    const swimmingCalsPerMinute = 20
    const activityEnum = Object.freeze({"Walking": 1, "Running": 2, "Swimming": 3, "Cycling": 4})
    let msg = ""
    let foodChoice  = ""
    let activity = ""

    const foodCaloriesMap = {
        'Mars Bar': 250,
        'Apple': 50,
        'Halo Top': 350
    };

    function checkValues(activity, foodChoice) {
        if (activity && foodChoice) {
            switch (activity) {
                //Walking
                case 1:
                    msg = "For " + foodChoice  + " of Walking you will burn ..." + walkingCalsPerMinute * foodChoice;
                    break;
                //Running
                case 2:
                    msg = "For " + foodChoice  + " of Running you will burn ..." + runningCalsPerMinute * foodChoice;
                    break;
                //Swimming
                case 3:
                    msg = "For " + foodChoice  + " of Swimming you will burn ..." + swimmingCalsPerMinute * foodChoice;
                    break;
                //Cycling
                case 4:
                    msg = "For " + foodChoice  + " of Cycling you will burn ..." + cyclingCalsPerMinute * foodChoice;
                    break;
                default:
                    msg = '';
            }
            document.getElementById("message").innerText = msg;
        }
    }

    function activityChange(value) {
        activity = value;
        checkValues(activity, foodChoice)
    }

    function foodChoiceChange(value) {
        foodChoice =  value;
        checkValues(activity, foodChoice)
    }

    return (
        <div>
            <h3> Choose Activity</h3>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => activityChange(activityEnum.Walking)}><MdDirectionsWalk/></Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => activityChange(activityEnum.Cycling)}><MdDirectionsBike/></Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => activityChange(activityEnum.Running)}><MdDirectionsRun/></Button>
            <Button variant="contained" size="medium" color="primary" onClick={() => activityChange(activityEnum.Swimming)}><FaSwimmer/></Button>
            <br/>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange(15)}>
                Mars Bar
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange(30)}>
                Apple
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange(45)}>
                Packet of Crisps
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange(60)}>
                Banana
            </Button>
            <br/>
            <p id="message">Results go here</p>
        </div>
    )
};
