import React, {Component} from "react";
import styles from "./select.module.css";

class WhatToEat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activity: "",
            timeOfActivity: "",
            foodChoice: ""
        };
    }
    activityChange = (event) => {
        this.setState({
            activity: event.target.value
        });
    };
    foodChoiceChange = (event => {
        this.setState({
            FoodChoice: event.target.value
        });
    });
    render() {
        let msg = '';

        const walkingCalsPerMinute = 5
        const cyclingCalsPerMinute = 15
        const runningCalsPerMinute = 10
        const swimmingCalsPerMinute = 20

        if (this.state.activity && this.state.FoodChoice) {
                msg = "you'll need to do this exercise for: " + this.state.FoodChoice / this.state.activity + " minutes, to burn off the selected food";
        } else {
           console.log("delete me eventually");
        }

        return (
            <form>
                <select className={styles.activity}
                        name="activity"
                        onChange={this.activityChange}
                >
                    <option value="">Choose Activity</option>
                    <option value="5">Walking</option>
                    <option value="10">Running</option>
                    <option value="15">Cycling</option>
                    <option value="20">Swimming</option>
                </select>

                <select className={styles.food}
                        name="food choice"
                        onChange={this.foodChoiceChange}
                >
                    <option value="">Food Choice</option>
                    <option value="250">1 Mars Bar(250 kcal)</option>
                    <option value="50">1 Apple(50 kcal)</option>
                    <option value="125">1 packet of crisps(125 kcal)</option>
                </select>
                <br/>
                {msg}
            </form>
        )
    };
}
export default WhatToEat;