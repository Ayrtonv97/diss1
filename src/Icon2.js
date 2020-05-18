import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer, FaAppleAlt} from 'react-icons/fa';
import {GiChocolateBar, GiBananaBunch, GiChipsBag} from 'react-icons/gi';
import {IconContext} from "react-icons";
import Button from '@material-ui/core/Button';
import styles from './walkingIcon.module.css';


export default function Icon2() {

    const style = {
        borderRadius: 2,
        border: '1px solid',
        color: 'white',
        fontSize: 22,
        height: 48,
        padding: '0 60px',
        marginLeft: '20px',
        hover: 'red',
        outlineColor: 'blue',
        outlineWidth: '2px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        label: 'mars bar'
    };

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
        'marsbar': 228,
        'apple': 50,
        'banana': 105,
        'crisps':184
    };

    function checkValues(activity, foodChoice, foodName) {
        if (activity && foodChoice) {
            switch (activity) {
                //Walking
                case 1:
                    msg = "you'll need to do this exercise for: " + foodChoice / walkingCalsPerMinute + " mins to burn off: 1 " + foodName;
                    break;
                //Running
                case 2:
                    msg = "you'll need to do this exercise for: " + foodChoice / runningCalsPerMinute + " mins to burn off: 1 " + foodName;

                    break;
                //Swimming
                case 3:
                    msg = "you'll need to do this exercise for: " +foodChoice / swimmingCalsPerMinute + " mins to burn off: 1 " + foodName;

                    break;
                //Cycling
                case 4:
                    msg = "you'll need to do this exercise for: " +foodChoice / cyclingCalsPerMinute + " mins to burn off: 1 " + foodName;

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
            <h5> This second calculation will provide the duration of the exercise you have to perform, in order to burn off your chosen food </h5>
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
            <h5> Step 2: Choose Food</h5>
            <Button style={style}
                    onClick={() => foodChoiceChange('Mars Bar', foodCaloriesMap.marsbar)}><GiChocolateBar/></Button>
            <Button style={style}
                    onClick={() => foodChoiceChange('apple', foodCaloriesMap.apple)}><FaAppleAlt/></Button>
            <Button style={style}
                    onClick={() => foodChoiceChange('crisps',foodCaloriesMap.crisps)}><GiChipsBag/></Button>
            <Button style={style}
                    onClick={() => foodChoiceChange('banana', foodCaloriesMap.banana)}><GiBananaBunch/></Button>
            <br/>
            <br/>
            <h4 id="message">Results go here</h4>
        </div>
    )
};
