import styles from "./select.module.css";
import Tabs from "./Tabs";
import React from "react";

const ChangeTabs = () => (
    <div style={styles}>
        <Tabs
            activeTab={{id: "tab1"}}>
            <Tabs.Tab id="tab1" title="Calculate Duration of Activity">
                <p>Enter what activity you want to perform and what food you want to burn off</p>
                <select className= {styles.activity} style={{padding: 25 + 'px' + 40 + 'px'}}>
                    <option>Choose activity</option>
                    <option value="1"> Running</option>
                    <option value="2"> Walking</option>
                    <option value="3"> Cycling</option>
                </select>
                <select className={styles.Food} style={{padding: 25 + 'px' + 40 + 'px'}}>
                    <option>Choose Food</option>
                    <option value="1">Apple</option>
                    <option value="2">ass</option>
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

export default ChangeTabs;