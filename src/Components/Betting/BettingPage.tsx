import React, { useState } from 'react'
import { Typography, Grid, Select, MenuItem, FormControl, InputLabel , TextField} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            minWidth: 120
        },
    }),
);

export default function BettingPage() {
    const classes = useStyles();
    const [type, setType] = useState<number>()
    const [success, setSuccess] = useState<boolean>(false)
    const handleChange = (e: any) => setType(e.target.value)
    const [numberArray, setNumberArray] = useState<Array<Number>>()
    return (
        <div>
            <NavBar />
            <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select onChange={handleChange} >
                            <MenuItem value={7}>     7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </FormControl>
                    <p />
                    <Typography>You Selected:{type}</Typography>
                    <p/>
                    <Typography>Pick {type} numbers from 1 to 52</Typography>
                    <TextField type='number' InputProps={{ inputProps: { min: 1, max: 52 } }} style={{minWidth:120}}/>
                </Grid>
            </Grid>
        </div>
    )
}
