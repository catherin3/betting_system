import React, { useEffect, useRef, useState } from 'react'
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import MaterialTable from 'material-table'
import Register from './PopOutBox'
import Login from './LoginPopOutBox'
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function LandingPage() {
    const classes = useStyles();
    const data = [{ date: '30 October 2020' },
    { number: '' }
    ]
    const column = [{ title: 'Date', field: 'date' },
    { title: 'Number', field: 'number' }
    ]


    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    let interval = useRef();

    const startTimer = () => {
        const countdowndate = new Date('November 3 2020 18:00:00').getTime();

            const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdowndate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const mintues = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            if (distance < 0) {
                //stop the timer
                // clearInterval(interval.current)
            } else {
                //update the timer 
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(mintues)
                setTimerSeconds(seconds)
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    },);

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ alignItems: 'flex-end' }}>
                <Toolbar>
                    <Button color="inherit" ><Login /></Button>
                    <Typography>/</Typography>
                    <Button color="inherit" ><Register /></Button>
                </Toolbar>
            </AppBar>
            <section className="timer">
                <section>
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
                <span style={{ paddingTop: 12, fontSize: 30 }}>:</span>

                <section>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </section>
                <span style={{ paddingTop: 12, fontSize: 30 }}>:</span>

                <section>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </section>
                <span style={{ paddingTop: 12, fontSize: 30 }}>:</span>

                <section>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                </section>
            </section>
            <MaterialTable 
                columns={column}
                data={data}
                title="Demo Title"
            />
        </div>
    );
}
export default LandingPage
