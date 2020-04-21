import React, {Component} from "react";
import styles from "./select.module.css";

class ActivityForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activity: "",
            duration: ""
        };
    }
    activityChange = (event) => {
        this.setState({
            activity: event.target.value
        });
    };
    durationChange = (event => {
        this.setState({
            duration: event.target.value
        });
    });
    render(){
        let msg = '';

        const walkingCalsPerMinute = 5
        const cyclingCalsPerMinute = 15
        const runningCalsPerMinute = 10
        const swimmingCalsPerMinute = 20


        const foodCaloriesMap = {
            'Mars Bar': 250,
            'Apple': 50,
            'Halo Top': 350
        };

        //Make choice of activity + duration...
        //Retrieve the calories amount (exercise calories)

        //Make choice of food...
        //Retrieve calories amount (food calories)

        //Do whatever calculation u want with these calories... (exercise calories) - (food calories) = ?

        if (this.state.activity && this.state.duration){

            if(this.state.activity === 'running'){
                msg = "For " + this.state.duration + " of " + this.state.activity + " you will burn ..." + walkingCalsPerMinute * this.state.duration ;
            }

            if(this.state.activity === 'walking'){
                msg = "For " + this.state.duration + " of " + this.state.activity + " you will burn ..." + walkingCalsPerMinute * this.state.duration ;
            }

            if(this.state.activity === 'cycling'){
                msg = "For " + this.state.duration + " of " + this.state.activity + " you will burn ..." + cyclingCalsPerMinute * this.state.duration;
            }


        }else{
            msg = '';
        }

        return(
            <form>
                <select className={styles.food}
                        name="food"
                        onChange={this.activityChange}
                >
                    <option value="">Choose Activity</option>
                    <option value="running">Running</option>
                    <option value="walking">Walking</option>
                    <option value="cycling">Cycling</option>
                    <option value="swimming">Swimming</option>
                </select>

                <select className={styles.activity}
                        name="activity"
                        onChange={this.durationChange}
                >
                    <option value="">Choose duration of activity</option>
                    <option value="15">15 mins</option>
                    <option value="30">30 mins</option>
                    <option value="45">45 mins</option>
                    <option value="60">60 mins</option>
                </select>

                <br/>
                {msg}
            </form>
        )
    }};


export default ActivityForm;