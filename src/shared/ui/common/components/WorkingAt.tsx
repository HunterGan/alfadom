import { Box, Typography } from "@mui/material"

const darkTheme = {
  background: '#1F1F1F',
  textAccent: '#FF7A1B',
  svgClock: '#aaa'
}

const theme = darkTheme

const WorkingAt = () => {
  return (
    <Box>
      <Typography sx={{fontSize: '18px',color: '#FFF'}}>888888888:</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Icon/>
        <Typography sx={{fontSize: '18px',color: '#FFF'}}>
          From morning to evening
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

export default WorkingAt
