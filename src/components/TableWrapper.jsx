import { Box, Paper } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import Panel from './Panel'
import Table from './Table'
import { makeStyles } from '@material-ui/core/styles'

export default function TableWrapper() {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Box className={classes.container}>
        <Panel />
        <Box className={classes.wrap}>
          <Navbar />
          <Table />
        </Box>
      </Box>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex'
    },
    wrap:{
      display:'flex',
      flexDirection:'column'
    }

}))
