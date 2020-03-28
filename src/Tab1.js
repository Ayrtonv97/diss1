import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import glamorous from "glamorous";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "./select.module.css";
import ChangeTabs from "./changeTab";
import ActivityForm from "./activityForm";

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
            maxWidth: 120,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{children: <div/>}}/>);


const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    },
    padding: {
        padding: theme.spacing(3),
    }
}));

const ReactTabs = glamorous.div({
    position: "absolute",
    right: 400,
});

const TabsContainer = glamorous.div({
    position: "fixed",
    borderBottom: "2px solid #dfdfdf"
});

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

        function changeFood() {
            return ;
        }

        let msg = 'fuck';
        let newMsg = 'shit';

        return (

            <div className={classes.root}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </StyledTabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ActivityForm></ActivityForm>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            </div>
    )};