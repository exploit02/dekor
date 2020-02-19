import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';


const StyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 8px',
    lineHeight: 1.5,
    backgroundColor: '#C5FFCB',
    color: '#28AE14',
    fontFamily: [
        'Montserrat'
    ].join(','),
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
    '&:hover': {
      backgroundColor: '#C5FFCB',
      borderColor: '#28AE14',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#C5FFCB',
      borderColor: '#28AE14',
    },
    '&:focus': {
      boxShadow: '#28AE14',
    },
  },
  label: {
      display: 'block'
  }
})(Button);

const StyledIconButton = withStyles(theme => ({
    root: {
        background: '#C5FFCB',
        borderRadius: '4px',
        padding: 8,
        '&:hover': {
            backgroundColor: '#C5FFCB',
            borderColor: '#28AE14',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#C5FFCB',
            borderColor: '#28AE14',
          },
          '&:focus': {
            boxShadow: '#28AE14',
          },
    },
  }))(IconButton);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function TickIcon(props) {
    return (
      <SvgIcon {...props}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L9 18L4 13" stroke="#28AE14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </SvgIcon>
    );
  }

export default function AcceptButton() {
  const classes = useStyles();

  return (
    <div>
      {/* <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider> */}
      {/* <StyledButton variant="contained" color="primary" disableRipple className={classes.margin}>
        ACCEPT
      </StyledButton>
      <StyledButton variant="contained" color="primary" disableRipple className={classes.margin}>
        <img src={Tick}/>
      </StyledButton> */}
        <StyledIconButton color="primary" aria-label="upload picture" component="span">
          <TickIcon />
        </StyledIconButton>
        {/* <SvgIcon component={Tick} viewBox="0 0 600 476.6" /> */}

        {/* <TickIcon/> */}
    </div>
  );
}