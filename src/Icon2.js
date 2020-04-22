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
    let foodName = ""
    let activity = ""

    const foodCaloriesMap = {
        'marsbar': 250,
        'apple': 50,
        'banana': 20,
        'crisps':350
    };

    function checkValues(activity, foodChoice, foodName) {
        if (activity && foodChoice) {
            switch (activity) {
                //Walking
                case 1:
                    msg = "you'll need to do this exercise for: " +foodChoice / walkingCalsPerMinute + " mins to burn off: " + foodName;
                    break;
                //Running
                case 2:
                    msg = "you'll need to do this exercise for: " + foodChoice / runningCalsPerMinute + " mins to burn off: " + foodName;

                    break;
                //Swimming
                case 3:
                    msg = "you'll need to do this exercise for: " +foodChoice / swimmingCalsPerMinute + " mins to burn off: " + foodName;

                    break;
                //Cycling
                case 4:
                    msg = "you'll need to do this exercise for: " +foodChoice / cyclingCalsPerMinute + " mins to burn off: " + foodName;

                    break;
                default:
                    msg = '';
            }
            document.getElementById("message").innerText = msg;
        }
    }

    function activityChange(value) {
        activity = value;
        checkValues(activity, foodChoice, foodName)
    }

    function foodChoiceChange(_foodName, value) {
        foodName = _foodName
        foodChoice =  value;
        checkValues(activity, foodChoice, foodName)
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
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => activityChange(activityEnum.Swimming)}><FaSwimmer/></Button>
            <br/>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange('Mars Bar', foodCaloriesMap.marsbar)}>
                Mars Bar
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange('apple', foodCaloriesMap.apple)}>
                Apple
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange('crips',foodCaloriesMap.crisps)}>
                Packet of Crisps
            </Button>
            <Button variant="contained" size="medium" color="primary"
                    onClick={() => foodChoiceChange('banana', foodCaloriesMap.banana)}>
                Banana
            </Button>
            <br/>
            <p id="message">Results go here</p>
        </div>
    )
};
