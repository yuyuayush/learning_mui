import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import {AppBar,Card,CardActions,CardContent, Autocomplete, TextField, Typography, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Grid from '@mui/material/Grid';
// import useStyles from './style';
function App() {
  // const classes =useStyles();
  const cardN =[1,2,3,4,5,6];
  return (
    <>
     <CssBaseline/>
     <AppBar position='relative'>
      <Toolbar>
        <PhotoCameraIcon/>
        <Typography variant='h6'>
        Photo Album
        </Typography>
      </Toolbar>
     </AppBar>
     <main>
      <div  >
        <Container   maxWidth="sm"  style={{marginTop:'100px'}}>
        <Typography variant="h2" align='center' color="textPrimary" gutterBottom >
          Photo Album
        </Typography>
        <Typography variant="h5" align='center' color="textSecondary">
        this is good which im doing right now of keep goind it..hope ypu doo it better
        </Typography>
        <div>
  <Grid container spacing={2} justifyContent="center">
          <Grid item>
          <Button variant='contained' color='primary'>
          see my Photot
          </Button>
          </Grid>
          <Grid item>
          <Button variant='outlined' color='primary'>
          secodary option
          </Button>
          </Grid>
          </Grid>

        </div>
        </Container> 
      </div>

    <Container maxWidth="md" style={{padding:'20px 9',marginTop:'20px'}} >
    <Grid container spacing={4}  >
    {cardN.map(()=>(
    
    <Grid item xs={12} sm={6} md={4} xl={3} >
      <Card  style={{height:'100%',display:'flex' ,flexDirection:'column' }}>
          <CardMedia style={{paddingTop:'56.25%'}}
          image="https://source.unsplash.com/random"
          title ="Image title"
          />
            <CardContent style={{flexGrow:1}} >
            <Typography gutterBottom variant='h5'>
            Picture
            </Typography>
            <Typography gutterBottom variant='subtitle' color="textSecondary">
          this is card and cardmedia is using for image and alt and also CardContent descripiton
            </Typography>
            </CardContent>
            <CardActions>
              <Button style={{marginTop:'40px'}} size="small" color="primary"> View </Button>
              <Button style={{marginTop:'40px'}}  size="small" color="primary"> View </Button>
            </CardActions>
      </Card>
    </Grid>
    ))}

    </Grid>

    </Container>

     </main>

    </>
     
  )
}
export default App
