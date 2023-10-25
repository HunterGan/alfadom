import { Box, Button, Grid, Typography} from "@mui/material"
import Logo from '@/shared/ui/common/components/Logo'
import Content from "@/shared/ui/common/layouts/Content"
import Address from '@/shared/ui/common/components/Address'
import WorkingAt from '@/shared/ui/common/components/WorkingAt'
import { mainLinks, projectLinks, articleLinks, legalLinks } from "@/shared/consts/mainLinks"

const darkTheme = {
  background: '#1F1F1F',
  textAccent: '#FF7A1B',
  svgClock: '#aaa'
}

const theme = darkTheme

const Header = () => {
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
      {/* Main Header */}
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={6} sm={4} md={3} >
          <Logo/>
        </Grid>
        <Grid item  sm={4} md={3} display={{ xs: "none", sm: "block"}}>
          <Address/>
        </Grid>
        <Grid item  md={3} display={{ xs: "none", sm: "none", md: "block"}}>
          <WorkingAt/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
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
      </Grid>

      {/* Sub Header - Links*/}
      <Grid
        container
        spacing={2}
      >
        {['Main Links', 'Project Links', 'Articles Links', 'LegalLinks']
            .map((x) => (
              <Grid item xs={3} key={x}>
                <LinkDropdown title={x}/>
              </Grid>
            ))
        }
      </Grid>
    </Content>
  </Box>
  )
}

const LinkDropdown = ({title}: {title: string}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        color: 'white',
        fontWeight: 600,
        opacity: 1,
        fontSize: 17,
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  )
}

export default Header
