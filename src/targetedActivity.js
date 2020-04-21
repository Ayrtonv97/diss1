import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TargetedActivity extends React.Component {

    render() {

        return (
            <form className='targetedActivity' noValidate autoComplete="off">
                <TextField id="standard-basic" label="Targeted Kcal"/>
                <RadioGroup name="gender1">
                    <FormControlLabel value="Mars Bar" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="Apple" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="Packet of crisps" control={<Radio/>} label="Other"/>
                </RadioGroup>
            </form>
        );
    };
}
export default TargetedActivity;