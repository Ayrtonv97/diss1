import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WhatToEat from "./whatToEat";
import TargetedActivity from "./targetedActivity";
import Icon from "./Icon";
import glamorous from "glamorous";
import Icon2 from "./Icon2";

function TabPanel(props) {
    const {children, value, index,} = props;

    return (
        <Typography>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const StyledTabs = withStyles({
        indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 100,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{children: <div/>}}/>);


const useStyles = makeStyles(theme => ({
    padding: {
        padding: theme.spacing(3),
    }
}));

    export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log("handleChange Method Triggered");
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        console.log("handleChangeIndex Method Triggered");
        setValue(index);
    };
        const TabsContainer = glamorous.div({
            position: "relative",
            left: 500
            // borderBottom: "2px solid #dfdfdf"
        });

        return (

            <div className={classes.root}>
                <TabsContainer>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    aria-label="full width tabs example"
                >
                    <Tab label="Find out how many kcals burnt after activity" {...a11yProps(0)} />
                    <Tab label="Find out what to eat after activity" {...a11yProps(1)} />
                    <Tab label="Find out what to eat from targeted activity" {...a11yProps(2)} />
                </StyledTabs>
                </TabsContainer>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Icon>

                        </Icon>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Icon2>

                        </Icon2>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <TargetedActivity>

                        </TargetedActivity>
                    </TabPanel>
                </SwipeableViews>
            </div>
    )};