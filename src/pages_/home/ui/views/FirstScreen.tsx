import Content from "@/shared/ui/common/layouts/Content"
import { Box, Grid, Typography } from "@mui/material"

const FirstScreen = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        backgroundImage: `url('/assets/backgr.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
          <Grid
            item xs={12} sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
             <Typography variant="h1" sx={{fontSize: '40px',fontWeight: 600}}>Строительство бань "под ключ" в Кирове и области</Typography>
             <div>Working since 2017</div>
             <div>More than 1000 built</div>
             <div>Some more items may be</div>
            </Box>
          </Grid>
          <Grid
            item xs={12} sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                maxWidth: 
              }}
            >

            </Box>
          </Grid>
        </Grid>
      </Content>
    </Box>
  )
}

export default FirstScreen
{/**
color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  width: 620px;
  max-width: 100%;
  margin-bottom: 24px;
}
*/}