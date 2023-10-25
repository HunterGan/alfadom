import {
  Box,
  Grid,
  Button,
  Divider
} from "@mui/material"
import Logo from '@/shared/ui/common/components/Logo'
import Content from "@/shared/ui/common/layouts/Content"
import Address from '@/shared/ui/common/components/Address'
import LinksBox from '@/shared/ui/common/components/LinksBox'
import WorkingAt from '@/shared/ui/common/components/WorkingAt'
import { mainLinks, projectLinks, articleLinks, legalLinks } from "@/shared/consts/mainLinks"

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

export default Footer
