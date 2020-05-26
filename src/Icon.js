import React from "react";
import {MdDirectionsWalk, MdDirectionsBike, MdDirectionsRun} from 'react-icons/md'
import {FaSwimmer} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import {Badge} from 'reactstrap';
import {row} from "glamor/ous";


export default function Icon() {

        const text = {
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 34,
            textAlign: 'left',
            marginRight: '150px'
        }

        const text2 = {
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 22,
            textAlign: 'left',
            marginRight: '100px'
        }


        const step1 = {
            color: 'indigo',
            fontSize: 70,
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginRight: 200,
            horizontal: true
        };

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
            <h4 style={text2}><Badge color="primary">1</Badge> Choose an activity</h4>
            <br/>
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
            <h5 style={text2}><Badge color="primary">2</Badge> Choose Duration </h5>
            <br/>
            <Button style={text}
                onClick={() => durationChange(15)}><Badge color="primary">15 mins</Badge></Button>
            <Button style={text}
                    onClick={() => durationChange(30)}><Badge color="primary">30 mins</Badge></Button>
            <Button style={text}
                    onClick={() => durationChange(45)}><Badge color="primary">45 mins</Badge></Button>
            <Button style={text}
                    onClick={() => durationChange(60)}><Badge color="primary">60 mins</Badge></Button>
            <br/>
            <br/>
            <h4 style={text2} id="message"><Badge color="primary">3</Badge> Results go here</h4>
        </div>
    )
};
