// import { makeStyles } from "@mui/sytles";
import {  makeStyles } from '@material-ui/core/styles';
const useStyles=makeStyles((theme)=>({
container:{
backgroundColor:theme.palette.background.paper,padding:theme.spacing(8,0,6)
},
icon:{
    marginRight:'20px',
},
buttons:{
    marginTop:'10px'
},
card:{
    height:'100%',
    display:'flex',
    flexDirection:'column'
},
cardGrid:{
    padding:'10px 0'
},
cardMedia:{
    paddingTop:'56.25%'
},
cardContent:{
    flexGrow:1,
}
}));
export default useStyles;