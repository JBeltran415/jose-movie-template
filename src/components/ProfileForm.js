import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

function ProfileForm() {
    return(
  <div className="form-container">
    <Box sx={{ minWidth: 120 }} id="form">
      <FormControl margin="normal" className="special-input">
        <TextField 
          id="outlined-basic"
          placeholder="Your Name Here"
          variant="outlined"
          name=""
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Choose your country
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          name="country"
        >
          <MenuItem value={"North America"}>North America</MenuItem>
          <MenuItem value={"South America"}>South America</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          placeholder="State/ Region"
          variant="outlined"
          name=""
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          placeholder="About"
          variant="outlined"
          name=""
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          placeholder="What have you been watching?"
          variant="outlined"
          name=""
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          placeholder="Add new movie"
          variant="outlined"
          name=""
        />
      </FormControl>
      <button className="add-movie" variant="contained">
        Add another
      </button>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="outlined-basic"
          placeholder="Add new movie"
          variant="outlined"
          name=""
        />
      </FormControl>

      <div>
        <button className="save-button" variant="contained">
          Save
        </button>
      </div>
    </Box>
  </div>
    )
}

export default ProfileForm;
