import React from 'react';
import Button from "@material-ui/core/Button";
import {GiBananaBunch, GiChipsBag, GiChocolateBar} from "react-icons/gi";
import {FaAppleAlt} from "react-icons/fa";
import {Badge} from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const style = {
    color: 'white',
    fontSize: 17,
    padding: '0 50px',
    float: 'left'
};
const text2 = {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 22,
    textAlign: 'left',
}
const chocolate = {
    color: 'brown',
    fontSize: 70,
}
const apple = {
    color: 'green',
    fontSize: 70,
}
const banana = {
    color: 'yellow',
    fontSize: 70,
}
const crisps = {
    color: 'blue',
    fontSize: 70,
}


class TargetedActivity extends React.Component {

    constructor() {
        super("");
        this.state = {
            targeted_cal: '',
            food: '',
            foodValue: 0
        };
        this.msg = ""
        this.foodValues = {"apple": 50, "marsbar": 228, "crisps": 184, "banana": 105}

    }

    changeHandle = (e) => {
        this.setState({
            targeted_cal: e.target.value
        })
    };



    onRadioChange = (e) => {
        this.setState({
                food: e,
                foodValue: this.foodValues[e]
            },
        );
        this.publish(this.state.targeted_cal, this.foodValues[e], e);
    }

    publish(targeted_cal, foodValue, food) {
        let result = targeted_cal / foodValue;
        this.msg = "You would need to eat: " + result.toFixed(1) + " " + food;
        document.getElementById("message").innerText = this.msg;
        // grabs the the two values to calculate what food needs to be consumed to 1 decimal place.
    }

    render() {
        return (
            <div>
                <h4 style={text2}><Badge color="primary">1</Badge> Enter Target Calories </h4>
                <InputLabel style={style}></InputLabel>
                <Input style={style}
                           id="standard-adornment"
                           class="col"
                           label="Targeted Kcal"
                           placeholder="Enter Kcal here"
                           value={this.state.targeted_cal}
                           onChange={this.changeHandle}
                           />
                <br/>
                <br/>
                <h4 style={text2}><Badge color="primary">2 </Badge> Choose a snack </h4>
                <div className='row'>
                    <div class='col'>
                <Button style={chocolate}
                        onClick={() => this.onRadioChange('marsbar', this.foodValues.marsbar)}><GiChocolateBar/></Button>
                    </div>
                    <div class='col'>
                <Button style={apple}
                        onClick={() => this.onRadioChange('apple', this.foodValues.apple)}><FaAppleAlt/></Button>
                    </div>
                    <div class='col'>
                <Button style={crisps}
                        onClick={() => this.onRadioChange('crisps', this.foodValues.crisps)}><GiChipsBag/></Button>
                    </div>
                    <div class='col'>
                <Button style={banana}
                        onClick={() => this.onRadioChange('banana', this.foodValues.banana)}><GiBananaBunch/></Button>
                    </div>
                </div>
                <h4 style={text2} id="message"> {this.msg} <Badge color="primary">3</Badge> Results go here</h4>
            </div>
        )
    }
};
export default TargetedActivity;