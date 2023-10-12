import { Box, Button, Typography } from "@mui/material"

const darkTheme = {
  background: '#1F1F1F',
}

const theme = darkTheme

const Footer = () => {

  return (
    <Box
      sx={{
        width: '100%',
        background: darkTheme.background,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        id="content"
        sx={{

          display: 'flex',
          width: '100%',
          maxWidth: {
            xl: 1524,
          },
          margin: {
            xs: '20px',
            xl: 'none'
          }
        }}
      >
        <Logo/>
        <Address/>
        <WorkingAt/>
        <Box>
        <Button
          sx={{
            height: 'auto'
          }}
          variant="contained"
          size="large"
        >
          Order call
        </Button>
        </Box>
      </Box>
      

    </Box>
  )
}

const WorkingAt = () => {
  return (
    <Box
      sx={{
        border: '5px solid red',
        flex: '0 0 20%'
      }}
    >
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>Working at:</Typography>
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>From morning to evening</Typography>
    </Box>
  )
}


const Address = () => {
  return (
    <Box
      sx={{
        border: '5px solid red',

        flex: '0 0 30%'
      }}
    >
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>Address</Typography>
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>This is our address</Typography>
    </Box>
  )
}

const Logo = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 80,
        background: '#fff',
        border: '5px solid red',

        flex: '0 0 20%'
      }}
    >
      Alfa-Dom
    </Box>
  )
}

const mainLinks = {
  works: 'Works',
  about: 'About',
  deadline: 'Deadline',
  contacs: 'Contacts',
}

const projectLinks = {
  project1: 'Project1',
  project2: 'Project2',
  project3: 'Project3',
  project4: 'Project4',
}

const articleLinks = {
  article1: 'Article1',
  article2: 'Article2',
  article3: 'Article3',
  article4: 'Article4',
}

const legalLinks = {
  privacy: 'Privacy policy',
  offer: 'Offer',
  guarantee: 'Guarantee',
  payment: 'Payment',
}

export default Footer
