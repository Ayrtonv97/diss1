import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TargetedActivity from "./targetedActivity";
import Icon from "./Icon";
import Icon2 from "./Icon2";
import AppBar from '@material-ui/core/AppBar';
import tab from "./nav.css";


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
        borderBottom: 1,
        background: 'transparent',
        '& > div': {maxWidth: 300,
            width: '100%',
            backgroundColor: '#ff7043'
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

        return (

            <div className={classes.root}>
                <AppBar style={{ background: '#1565c0', marginTop: '20px' }} position="static">

                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    aria-label="full width tabs example"
                    variant="fullWidth"
                >
                    <Tab label="Activity Energy Converter" {...a11yProps(0)} />
                    <Tab label="Food Energy Converter" {...a11yProps(1)} />
                    <Tab label="Targeted Calorie Aim" {...a11yProps(2)} />
                </StyledTabs>
                </AppBar>
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