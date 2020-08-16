import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './style.scss';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue); // 0, 1 ,2
    };

    return (
        <Paper className={classes.root}>
            <div className="navbar">
                <div className="navbrand">
                    <Typography variant="h5" gutterBottom>Durgesh Nandan Sinha</Typography>
                </div>
                <div className='tabs'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="EXPERIENCE" />
                        <Tab label="PROJECTS" />
                        <Tab label="CONTACT" />
                    </Tabs>
                </div>
            </div>
        </Paper>
    );
}
