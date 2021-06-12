import {React,useState} from 'react';

import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";

import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";


const useStyles = makeStyles(
    (theme) => ({
    textField: {    
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,  
    },})
)


export default function View(props){
    const [time,setTime] = useState(new Date());
    let year = time.getFullYear()-1911;
    const classes = useStyles();
    return (
      <div> 
          <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <KeyboardDatePicker
            value={time}
            label="阿公店開店日選擇"
            onChange={setTime}
            format={"民國"+year+"年"+"-MM月-dd號"}
            autoOk = "true"
            InputLabelProps={{shrink: true,}}
            KeyboardButtonProps={{'aria-label': 'change date',}}
          />
        </MuiPickersUtilsProvider>
        </form>
      </div>
    );
  
}