import { FC } from "react"
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText
} from "@mui/material"

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

export default LinksBox
