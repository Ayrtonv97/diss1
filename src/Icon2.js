import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer, FaAppleAlt} from 'react-icons/fa';
import {GiChocolateBar, GiBananaBunch, GiChipsBag} from 'react-icons/gi';
import Button from '@material-ui/core/Button';
import {Badge} from 'reactstrap';

export default function Icon2() {

    const step1 = {
        color: 'indigo',
        fontSize: 70,
    };
    const step2 = {
        color: 'yellow',
        fontSize: 70,
    }
    const text2 = {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 22,
        textAlign: 'left',
        marginRight: '100px'
    }

    const walkingCalsPerMinute = 4
    const cyclingCalsPerMinute = 8
    const runningCalsPerMinute = 11
    const swimmingCalsPerMinute = 10
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
            <h4 style={text2}><Badge color="primary">1</Badge> Choose Activity</h4>
            <br/>
            <div class='row'>
                <div class='col'>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Walking)}><MdDirectionsWalk/></Button>
                </div>
                <div class='col'>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Cycling)}><MdDirectionsBike/></Button>
                </div>
                <div class='col'>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Running)}><MdDirectionsRun/></Button>
                </div>
                <div class='col'>
            <Button style={step1}
                    onClick={() => activityChange(activityEnum.Swimming)}><FaSwimmer/></Button>
                </div>
            </div>
            <br/>
            <br/>
            <h4 style={text2}><Badge color="primary">2</Badge> Choose Food</h4>
            <div class='row'>
                <div class='col'>
            <Button style={step2}
                    onClick={() => foodChoiceChange('Mars Bar', foodCaloriesMap.marsbar)}><GiChocolateBar/></Button>
                </div>
                <div class='col'>
            <Button style={step2}
                    onClick={() => foodChoiceChange('apple', foodCaloriesMap.apple)}><FaAppleAlt/></Button>
                </div>
                <div class='col'>
            <Button style={step2}
                    onClick={() => foodChoiceChange('crisps',foodCaloriesMap.crisps)}><GiChipsBag/></Button>
                </div>
                <div class='col'>
            <Button style={step2}
                    onClick={() => foodChoiceChange('banana', foodCaloriesMap.banana)}><GiBananaBunch/></Button>
                </div>
            </div>
            <br/>
            <br/>
            <h4 style={text2} id="message"><Badge color="primary">3</Badge> Results go here</h4>
        </div>
    )
};
