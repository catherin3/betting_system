import React, { useState } from 'react'
import { Typography, Grid, Select, MenuItem, FormControl, InputLabel, TextField, IconButton, Button, Paper, Menu, Fade } from '@material-ui/core'
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any, i: number) => {
        setAnchorEl(event.currentTarget);
        console.log(i)
        
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    const [type, setType] = useState<number>(7)
    const [chosenNumber, setChosenNumber] = useState<number>(0)
    const [success, setSuccess] = useState<boolean>(false)
    const [NumberArray, setNumberArray] = useState<Array<number>>([])
    //const inputRef = useRef(null);
    //const NumberArray:Number[] =[]
    const handleChange = (e: any) => setType(e.target.value)
    const handleNumber = (e: any) => setChosenNumber(e.target.value)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [text, setText] = useState<String>('')
    const [NumberObject, setNumberObject] = useState<Object>({})
    const array: Object[] = []
    const [index, setIndex]=useState<number>(-1)
    return (
        <div>
            <NavBar />
            <Grid container style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Grid item style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typography>Minimum type would be defaulted as 7 and maximum as 15</Typography>
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
                    <Typography>Pick {type} Numbers from 1 to 52</Typography>
                    <TextField
                        type='number'
                        InputProps={{ inputProps: { min: 1, max: 52 } }}
                        style={{ minWidth: 120 }}
                        //inputRef={inputRef.current}
                        onChange={handleNumber}
                        error={chosenNumber > 54 || chosenNumber < 0}
                        helperText={chosenNumber > 54 || chosenNumber < 0 ? 'Error Value' : chosenNumber}
                        required
                    //  disabled={ NumberArray.length === type ? false:true}
                    >
                    </TextField>
                    <IconButton disabled={disabled} onClick={() => {
                        if (NumberArray) {
                            if (NumberArray.length < type) {
                                if (chosenNumber < 52 && chosenNumber > 0) {
                                    if (NumberArray.length >= 1) {
                                        if (NumberArray.includes(chosenNumber)) {
                                            console.log('Error')
                                        }
                                        else {
                                            NumberArray.push(chosenNumber)
                                            //inputRef.current = null
                                            setNumberObject({ id: chosenNumber })
                                            array.push(NumberObject)
                                            console.log(array)
                                        }
                                    }
                                    else {
                                        setNumberArray([chosenNumber])
                                        setNumberObject({ id: chosenNumber })
                                    }
                                }
                                else {
                                    console.log('Error')
                                }
                            }
                            if (NumberArray.length === type) {
                                setSuccess(true)
                                setDisabled(true)
                                console.log(NumberArray)
                            }
                        }
                    }

                    }><AddIcon /></IconButton>
                    <Typography>Numbers chosen: {[NumberArray] + ''} </Typography>
                    <Button onClick={() => {
                        if (success === true) {
                            setText('Successfully Placed your bets')
                        }
                        else {
                            setText('Not Successful')
                        }
                    }}>Submit</Button>
                    <Paper>
                        <Typography>{text}</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid>
                {
                    NumberArray.map((i, key) => {
                        return <Button key={key} onClick={(e)=>{
                            handleClick( e ,i)
                            setIndex(i)
                        }
                        }>{i}</Button>
                    })


                }

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={(e:any) => {
                        console.log(index)
                        const ind = NumberArray.indexOf(index);
                        if (ind > -1) {
                            NumberArray.splice(ind, 1);
                          }
                        
                        setDisabled(false);
                        setSuccess(false);
                        handleClose();
                    }
                    }>Delete</MenuItem>
                </Menu>
            </Grid>
        </div>
    )
}
