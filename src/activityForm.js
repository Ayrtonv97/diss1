import React, {Component} from "react";
import styles from "./select.module.css";

class ActivityForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activity: "",
            food: ""
        };
    }
    activityChange = (event) => {
        this.setState({
            activity: event.target.value
        });
    }
    foodChange = (event => {
        this.setState({
            food: event.target.value
        });
    });
    render(){
        let msg = '';

        if (this.state.activity && this.state.food){
            msg = this.state.food + " calories. Selected exercise will burn: " + this.state.activity + " calories ";
        }else{
            msg = '';
        }

        return(
            <form>
                <select className={styles.food}
                        style={{padding: 25 + 'px' + 40 + 'px'}}
                        name={"food"}
                        onChange={this.foodChange}
                >
                    <option value="">Choose Food</option>
                    <option value="is_500">Apple</option>
                    <option value="is_1000">ass</option>
                </select>

                <select className={styles.activity}
                        style={{padding: 25 + 'px' + 40 + 'px'}}
                        name="activity"
                        onChange={this.activityChange}
                >
                    <option value="">Choose activity</option>
                    <option value="400">Running</option>
                    <option value="200">Walking</option>
                    <option value="500">Cycling</option>
                </select>

                <br/>
                {msg}
            </form>
        )
    }};


export default ActivityForm;