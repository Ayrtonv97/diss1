import styles from "./select.module.css";
import Tabs from "./Tabs";
import React from "react";

const ChangeTabs = () => (
    <div style={styles}>
        <Tabs
            activeTab={{id: "tab1"}}>
            <Tabs.Tab id="tab1" title="Calculate Duration of Activity">
                <p>Enter what activity you want to perform and what food you want to burn off</p>
                <select className={styles.activity}
                        style={{padding: 25 + 'px' + 40 + 'px'}}
                        onChange={getValues()}
                >
                    <option>Choose activity</option>
                    <option value="running">Running</option>
                    <option value="walking">Walking</option>
                    <option value="cycling">Cycling</option>
                </select>
                <select className={styles.food}
                        style={{padding: 25 + 'px' + 40 + 'px'}}
                        onChange={getValues()}
                >
                    <option>Choose Food</option>
                    <option value="apple">Apple</option>
                    <option value="bootyhole">ass</option>
                </select>

            </Tabs.Tab>

            <Tabs.Tab id="tab2" title="Calculate what food you need to eat to meet calorie requirement">
                <select className= {styles.activity} style={{padding: 45 + 'px' + 20 + 'px'}}>
                    <option>Choose activity</option>
                    <option value="1"> Running</option>
                    <option value="2"> Walking</option>
                    <option value="3"> Cycling</option>
                </select>
            </Tabs.Tab>
        </Tabs>
    </div>
);

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