import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import radio from './walkingIcon.module.css';

const style = {
    borderRadius: 2,
    color: 'white',
    fontSize: 17,
    height: 48,
    padding: '0 60px',
    marginLeft: '20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: '1px solid',
};
const mars ={
    left: 300,
    centre: 100,
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
        this.publish = this.publish.bind(this);
        this.formPreventDefault = this.formPreventDefault.bind(this);
        this.foodValues = {"apple": 10, "marsbar": 250, "crisps": 300}

    }

    changeHandle = (e) => {
        this.setState({
            targeted_cal: e.target.value
        })
    };



    onRadioChange = (e) => {
        this.setState({
                food: e.target.value,
                foodValue: this.foodValues[e.target.value]
            },
        );


        this.publish(this.state.targeted_cal, this.foodValues[e.target.value], e.target.value);


    }

    formPreventDefault(e) {
        console.log('here');
        e.preventDefault();
        this.publish(this.state.targeted_cal, this.state.foodValue, this.state.food);
        //prevents the form from submitting, which reloads the page. And passes in target value and the radio button.
    }

    publish(targeted_cal, foodValue, food) {
        let result = targeted_cal / foodValue;
        this.msg = "You would need to eat: " + result.toFixed(1) + " " + food;
        document.getElementById("message").innerText = this.msg;
        console.log(targeted_cal, foodValue, food);
        // grabs the the three values to calculate what food needs to be consumed to 1 decimal place.
    }

    render() {
        return (
            <div>
            <form className='targetedActivity' noValidate autoComplete="off" onSubmit={this.formPreventDefault}>
                <TextField style={style} id="standard-basic"
                           name="targeted_cal"
                           label="Targeted Kcal"
                           placeholder="Enter Kcal here"
                           value={this.state.targeted_cal}
                           onChange={this.changeHandle}
                />
                <input
                    type='submit'
                    name="Check Cal"
                />
                <br/>
                <RadioGroup className={radio} name="food items">

                    <FormControlLabel
                        value="marsbar"
                        control={<Radio/>}
                        label="Mars bar"
                        checked={this.state.food === "marsbar"}
                        onChange={this.onRadioChange}
                    />

                    <FormControlLabel value="apple"
                                      control={<Radio/>}
                                      label="Apple"
                                      checked={this.state.food === "apple"}
                                      onChange={this.onRadioChange}
                    />

                    <FormControlLabel value="crisps"
                                      control={<Radio/>}
                                      label="Packet of Crisps"
                                      checked={this.state.food === "crisps"}
                                      onChange={this.onRadioChange}
                    />
                </RadioGroup>
            </form>
                <h3 id="message"> {this.msg}</h3>
            </div>
        )
    }
};
export default TargetedActivity;