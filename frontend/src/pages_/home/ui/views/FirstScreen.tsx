import Content from "@/shared/ui/common/layouts/Content"
import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import Icon from '@/../public/assets/svg/phone_icon.svg'
import Image from "next/image"

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
            item xs={12} md={6}
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
            item xs={12} md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: 450,
                backgroundColor: '#eaeaea',
                opacity: 0.9,
                margin: '20px',
                padding: '20px',
                backdropFilter: 'blur(10px)',
                borderRadius: '6px',
                position: 'relative'
              }}
            >
              <Typography 
                sx={{
                  color: '#000',
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: '100%',
                }}
              >
                Will count the price of your future banya
              </Typography>
              <Box
                sx={{
                  margin: '20px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  '&>*': {
                    paddingLeft: '20px',
                    position: 'relative',
                    '&:before': {
                      content: "' '",
                      position: 'absolute',
                      width: '8px',
                      height: '8px',
                      left: '0',
                      top: 'calc(50% - 4px)',
                      background: '#275F6C',
                      borderRadius: '50%',
                    }
                  }
                }}
              >
                <Typography>advantage number 1</Typography>
                <Typography>advantage number 2. This is long advantage. Really very long. I need it to check behaviour on resize. this way i wouldn't forget lol\)</Typography>
                <Typography>advantage number 3</Typography>
              </Box>
              <Box>
                <TextField
                  placeholder="8 900 800 70 60"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          priority
                          src="/assets/svg/phone_icon.svg"
                          height={24}
                          width={24}
                          alt="Follow us on Twitter"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Content>
    </Box>
  )
}

export default FirstScreen
