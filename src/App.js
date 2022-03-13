import React,{useState} from 'react'
import { Button,Checkbox,FormControlLabel ,FormGroup,TextField} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// import { Checkbox } from '@mui/material';

const App = () => {
  const [check,setCheck]= useState(false)
  const [email,setEmail]= useState("")
  return (
    <div>
      <Button startIcon= {<SaveIcon/>} variant="contained" color="secondary">Save</Button>
      <TextField id="outlined-basic" label="Email" variant="outlined"
       value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <FormControlLabel control={<Checkbox defaultChecked={check}  onChange={(e) => setCheck(check?true:false)}/>} label="Label" />

    </div>
  )
}

export default App