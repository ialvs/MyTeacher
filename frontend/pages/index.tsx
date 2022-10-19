import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { Professor } from '../src/@types/professor'
import { useIndex } from '../src/hooks/pages/useIndex'


const Home: NextPage = () => {
  const {
    teachersList,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    bookLesson,
    message,
    setMessage
  } = useIndex()

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List
          professores={teachersList}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></List>
      </Box>

      <Dialog onClose={() => setSelectedTeacher(null)} open={selectedTeacher !== null} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite ao nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite ao emai"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
          <Button onClick={() => bookLesson()}>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
      message={message} 
      open={message.length > 0} 
      autoHideDuration={2500} 
      onClose={() => setMessage('')}
      />
    </div>
  )
}

export default Home
