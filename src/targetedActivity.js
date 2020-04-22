import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TargetedActivity extends React.Component {

    constructor() {
        super();
        this.state = {
            targeted_cal: '',
            food: '',
            foodValue: 0
        };
        this.msg = ""
        this.publish = this.publish.bind(this);
        this.foodValues =  {"apple": 10, "marsbar": 250, "crisps": 300}

    }


    onsubmit = (e) => {
        this.setState({
            targeted_cal: e.target.value
        }
    )
            this.publish(this.state.targeted_cal, this.state.foodValue, this.state.food);


    }
    onRadioChange = (e) => {
        this.setState({
            food: e.target.value,
            foodValue: this.foodValues[e.target.value]
        },
    );

        this.publish(this.state.targeted_cal, this.foodValues[e.target.value], e.target.value);


    }

    publish(targeted_cal, foodValue, food) {
        this.msg = "You would need to eat: " + targeted_cal / foodValue + " " + food;
        console.log(targeted_cal, foodValue, food );

    }

    render() {
        return (
            <form className='targetedActivity' noValidate autoComplete="off" onSubmit={this.mySubmitHandler}>
                <TextField id="standard-basic"
                           name="targeted_cal"
                           label="Targeted Kcal"
                           placeholder="Enter Kcal here"
                           value={ this.state.targeted_cal }
                           onChange={ this.onsubmit }
                />
                <input
                    type='submit'
                />
                <br/>
                {this.msg}
                <RadioGroup name="gender1">

                    <FormControlLabel
                        value="marsbar"
                        control={<Radio/>}
                        label="Mars bar"
                        checked={this.state.food === "marsbar"}
                        onChange={ this.onRadioChange }
                    />

                    <FormControlLabel value="apple"
                                      control={<Radio/>}
                                      label="Apple"
                                      checked={this.state.food === "apple"}
                                      onChange={ this.onRadioChange }
                    />

                    <FormControlLabel value="crisps"
                                      control={<Radio/>}
                                      label="Packet of Crisps"
                                      checked={this.state.food === "crisps"}
                                      onChange={ this.onRadioChange }
                    />
                </RadioGroup>
            </form>
        )}};
export default TargetedActivity;