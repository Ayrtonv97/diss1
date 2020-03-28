import styles from "./select.module.css";
import Tabs from "./Tabs";
import React from "react";

class ChangeTabs extends React.Component {

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
    console.log("Current food :", this.state.food);
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
    return (
    <div style={styles}>
        <Tabs
            activeTab={{id: "tab1"}}>
            {/*<Tabs.Tab id="tab1" title="Calculate Duration of Activity">*/}
                <form>
                    <select className={styles.food}
                            style={{padding: 25 + 'px' + 40 + 'px'}}
                            name={"food"}
                            onChange={this.foodChange}
                    >
                        <option value="">Choose Food</option>
                        <option value="is 500">Apple</option>
                        <option value="is 1000">ass</option>
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

            {/*</Tabs.Tab>*/}

            {/*<Tabs.Tab id="tab2" title="Calculate what food you need to eat to meet calorie requirement">*/}
            {/*    <select className= {styles.activity} style={{padding: 45 + 'px' + 20 + 'px'}}>*/}
            {/*        <option>Choose activity</option>*/}
            {/*        <option value="1"> Running</option>*/}
            {/*        <option value="2"> Walking</option>*/}
            {/*        <option value="3"> Cycling</option>*/}
            {/*    </select>*/}
            {/*</Tabs.Tab>*/}
        </Tabs>
    </div>
)}};

function getValues(eve){
    //let activity = document.getElementsByTagName("select")[0].value;
    //console.log(activity);
    //let food = document.getElementsByClassName("select_food__knYn6")[0].value

    //console.log(activity + " ")
    //for(let i = 0; i < dropDowns.length; i++){
    //    console.log(dropDowns.value)
    //}
}


export default ChangeTabs;