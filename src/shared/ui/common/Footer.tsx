import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import Content from "@/shared/ui/common/Content"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

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
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Content>
        <Grid container>
          <Grid xs={6}>

          </Grid>
        </Grid>
        <Logo/>
        <Address/>
        <WorkingAt/>
        <Box
          sx={{
            flex: '0 0 30%'
          }}
        >
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
        <Divider
          sx={{
            width: '100%',
            height: '2px',
            margin: '30px 0',
            border: '1px solid #BBB',
            opacity: 0.5
            }}
          />
          <Box
            sx={{
              flex: '0 0 20%',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              fontSize: '14px',
              fontWeight: 400,
              opacity: 0.75,
              '&>:first-child': {
                fontWeight: 600,
                opacity: 1,
                fontSize: 17,
              }
            }}
          >
            <Typography>Main Links</Typography>
            <List>
              {Object.entries(mainLinks).map(([key, value]) => (
                <ListItem key={key} disablePadding>
                  <ListItemText>{value}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: '0 0 30%',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              fontSize: '14px',
              fontWeight: 400,
              opacity: 0.75,
              '&>:first-child': {
                fontWeight: 600,
                opacity: 1,
                fontSize: 17,
              }
            }}
          >
            <Typography>Project Links</Typography>
            <List>
              {Object.entries(projectLinks).map(([key, value]) => (
                <ListItem key={key} disablePadding>
                  <ListItemText>{value}</ListItemText>
                </ListItem>
              ))}
            </List>
            
          </Box>

          <Box
            sx={{
              flex: '0 0 20%',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              fontSize: '14px',
              fontWeight: 400,
              opacity: 0.75,
              '&>:first-child': {
                fontWeight: 600,
                opacity: 1,
                fontSize: 17,
              }
            }}
          >
            <Typography>Articles Links</Typography>
            <List>
              {Object.entries(articleLinks).map(([key, value]) => (
                <ListItem key={key} disablePadding>
                  <ListItemText>{value}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: '0 0 30%',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              fontSize: '14px',
              fontWeight: 400,
              opacity: 0.75,
              '&>:first-child': {
                fontWeight: 600,
                opacity: 1,
                fontSize: 17,
              }
            }}
          >
            <Typography>LegalLinks</Typography>
            <List>
              {Object.entries(legalLinks).map(([key, value]) => (
                <ListItem key={key} disablePadding>
                  <ListItemText>{value}</ListItemText>
                </ListItem>
              ))}
            </List>
            
          </Box>
          
      </Content>
    </Box>
  )
}

const WorkingAt = () => {
  return (
    <Box
      sx={{
        // border: '5px solid red',
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
        // border: '5px solid red',

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
