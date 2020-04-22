import React from "react";
import {MdDirectionsWalk} from 'react-icons/md'
import { IconContext } from "react-icons";

class Icon extends React.Component {

    render() {

        return <h3> Choose Activity <MdDirectionsWalk/> </h3>
            <IconContext.Provider value= className={styles.walkingIcon}>

    }
}
export default Icon;
