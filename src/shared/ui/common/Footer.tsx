import { Box, Button, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import Content from "@/shared/ui/common/Content"
import { FC } from "react"

const darkTheme = {
  background: '#1F1F1F',
  textAccent: '#FF7A1B',
  svgClock: '#aaa'
}

const theme = darkTheme

const Footer = () => {

  return (
    <Box
      sx={{
        width: '100%',
        background: theme.background,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Content>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={3} >
            <Logo/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Address/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <WorkingAt/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              sx={{
                height: 'auto',
                color: 'white'
              }}
              variant="contained"
              size="large"
            >
              Order call
            </Button>
          </Grid>
          <Divider
            sx={{
              width: '100%',
              height: '2px',
              margin: '30px 0',
              border: '1px solid #BBB',
              opacity: 0.5
            }}
          />
          <Grid item xs={12} sm={6} md={3}>
            <LinksBox
              title="Main Links"
              links={mainLinks}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LinksBox
              title="Project Links"
              links={projectLinks}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LinksBox
              title="Articles Links"
              links={articleLinks}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LinksBox
              title="LegalLinks"
              links={legalLinks}
            />
          </Grid>
        </Grid>
      </Content>
    </Box>
  )
}

interface ILinksBox {
  title: string
  links: {
    [key: string]: string
  }
}

const LinksBox:FC<ILinksBox> = ({title, links}) => {
  return (
    <Box
      sx={{
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
    <Typography>{title}</Typography>
    <List>
      {Object.entries(links).map(([key, value]) => (
        <ListItem key={key} disablePadding>
          <ListItemText>{value}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>
  )
}

const WorkingAt = () => {
  return (
    <Box>
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>Working at:</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Icon/>
        <Typography sx={{fontSize: '18px',color: '#FFF'}}>
          From
          <Typography sx={{color: theme.textAccent, display: 'inline'}}> morning </Typography>
          to
          <Typography sx={{color: theme.textAccent, display: 'inline'}}> evening</Typography>
        </Typography>
      </Box>
    </Box>
  )
}

const Icon = () => (
  <Box
    sx={{
      height: 18,
      width: 18,
      marginRight: '8px'
    }}
  >
    <svg version="1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
      <path fillRule="evenodd" clipRule="evenodd" fill={theme.svgClock} d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c6.6,0,12-5.4,12-12
      S18.7,0,12,0z M16.4,17.9l-5.5-5.5l0,0h0V4.5h2.2v7l4.9,4.9L16.4,17.9z"/>
    </svg>
  </Box>
)


const Address = () => {
  return (
    <Box>
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
