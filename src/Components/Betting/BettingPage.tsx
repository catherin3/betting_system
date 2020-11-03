import React, { useState } from 'react'
import { Typography, Grid, Select, MenuItem, FormControl, InputLabel, TextField, IconButton, Button, Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            minWidth: 120
        },
    }),
);

export default function BettingPage() {
    const classes = useStyles();
    const [type, setType] = useState<number>(0)
    const [chosenNumber, setChosenNumber] = useState<number>(0)
    const [success, setSuccess] = useState<boolean>(false)
    const [numberArray, setNumberArray] = useState<Array<Number>>([])
    //const numberArray:Number[] =[]
    const handleChange = (e: any) => setType(e.target.value)
    const handleNumber = (e: any) => setChosenNumber(e.target.value)
    let disabled = false
    const [text, setText] = useState<String>('')
    //setNumberArray([])
    return (
        <div>
            <NavBar />
            <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select onChange={handleChange} value={type}>
                            <MenuItem value={7}>7</MenuItem>
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
                    <p />
                    <Typography>Pick {type} numbers from 1 to 52</Typography>
                    <TextField
                        type='number'
                        InputProps={{ inputProps: { min: 1, max: 52 } }}
                        style={{ minWidth: 120 }}
                        onChange={handleNumber}
                        error={chosenNumber > 54 && chosenNumber < 0}
                        helperText={type === 0 ? 'Empty field!' : chosenNumber}
                    //  disabled={ numberArray.length === type ? false:true}
                    >
                    </TextField>
                    <IconButton disabled={disabled} onClick={() => {
                        if (numberArray) {
                            if (numberArray.length < type) {
                                if (chosenNumber < 52 && chosenNumber > 0) {
                                    if (numberArray.length >= 1) {
                                        numberArray.push(chosenNumber)
                                        console.log(numberArray)
                                    }
                                    else {
                                        setNumberArray([chosenNumber])
                                    }
                                }
                                else {
                                    console.log('Error')
                                }
                            }
                            else {
                                setSuccess(true)
                                disabled = true
                            }
                        }
                    }
                    }><AddIcon /></IconButton>
                    <Typography> Numbers chosen: {[numberArray]+''} </Typography>
                    <Button onClick={() => {
                        if (success === true) {
                            setText('Successfully Placed your bets')
                        }
                        else {
                            setText('Not Successful')
                        }
                        console.log(success)
                        console.log(text)
                    }}>Submit</Button>
                    <Paper>
                        <Typography>{text}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


/*

while(numberArray.length<type){
    if numberArray
    numberArray.push(chosenNumber)
}
*/