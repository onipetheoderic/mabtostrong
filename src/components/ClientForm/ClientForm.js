import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f8f7f7',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#f8f7f7',
        },
      },
  },
  margin: {
    margin: 0,
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '35ch',
    [theme.breakpoints.down('sm')]: {
      width: '25ch',
      marginLeft:20
     
     
    }, 
  },
  submitClientForm: props => ({
    display:'flex',
    alignItems:'center',
    marginLeft:-5,
    zIndex:5,
  alignSelf:'center',
    backgroundColor: props.oceanBlue,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    color:props.textFieldButtonColor,
    fontSize:10,
    borderRadius:4,
  }),
  formPositioner: props => ({
      display:'flex',
      flexDirection:'row',
      
  }),
  label: {
    '&$focused': {
      color: '#4A90E2'
    },
  },
  focused: {},
  
}));

export default function ClientForm({theme}) {
  const classes = useStyles(theme);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
     
      <div className={classes.formPositioner}>     
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            style={{fontSize:10, height:30, marginTop:2, backgroundColor:'#f8f7f7'}}
            value={values.weight}
            onChange={handleChange('weight')}
            placeholder="Enter a Valid Email to request a quote"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
     
        </FormControl>    
        <div className={classes.submitClientForm}>Send</div>
      </div>
    </div>
  );
}
