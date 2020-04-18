import React, {Component} from "react";
import styles from "./select.module.css";

class WhatToEat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activity: "",
            timeOfActivity: ""
        };
    }
    activityChange = (event) => {
        this.setState({
            activity: event.target.value
        });
    };
    timeOfActivityChange = (event => {
        this.setState({
            timeOfActivity: event.target.value
        });
    });
    render() {
        let msg = '';

        if (this.state.activity && this.state.timeOfActivity) {
            msg = this.state.timeOfActivity + " calories. Selected exercise will burn: " + this.state.activity + " calories ";
        } else {
            msg = '';
        }

        return (
            <form>
                <select className={styles.activity}
                        name="activity"
                        onChange={this.activityChange}
                >
                    <option value="">Choose Activity</option>
                    <option value="Apple is 500">Walking</option>
                    <option value="Banana is_1000">Running</option>
                    <option value="">Cycling</option>
                    <option value="">Swimming</option>
                </select>

                <select className={styles.food}
                        name="time of activity"
                        onChange={this.timeOfActivityChange}
                >
                    <option value="">Time of activity</option>
                    <option value="15">15 mins</option>
                    <option value="30">30 mins</option>
                    <option value="45">45 mins</option>
                    <option value="60">60 mins</option>
                </select>

                <select className={styles.food}
                        name="food choice"
                        onChange={this.foodChoice}
                >
                    <option value="">Food Choice</option>
                    <option value="250 kcal">1 Mars Bar(250 kcal)</option>
                    <option value="50 kcal">1 Apple(50 kcal)</option>
                    <option value="125 kcal">1 packet of crisps(125 kcal)</option>
                </select>

            </form>
        )
    }};
export default WhatToEat;