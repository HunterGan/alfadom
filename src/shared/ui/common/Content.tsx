import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface IContent {
  children: ReactNode
}

const Content:FC<IContent> = ({children}) => (
  <Box
    id="content"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      border: '0.5px solid red',
      maxWidth: {
        xl: 1524,
      },
      margin: {
        xs: '20px',
        xl: 'none'
      }
    }}
  >
    {children}
  </Box>
)
export default Content
