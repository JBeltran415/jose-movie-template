import { useState } from "react";
import AvatarUpload from "../components/AvatarUpload";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import "./Profile.css";

function Profile() {
  const [progress, setProgress] = useState("getUpload");
  const [url, setImageURL] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const [allTitles, setAllTitles] = useState([])
  const [formInput, setFormInput] = useState({
    name: "",
    country: "",
    state: "",
    about: "",
    watching: "",
    movies:"",
    addMovie: "",
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value
    setFormInput({...formInput,[event.target.name]:value})
    formInput.movies=  allTitles
    setFormInput({
      name: "",
      country: "",
      state: "",
      about: "",
      watching: "",
      addMovie: "",
    });
    console.log(formInput, "formInput")
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });

    console.log("value", value);
  };

  return (
    <div className="profile">
      <p className="create-profile">Edit Your Profile</p>

      <form>
        <div>
          <AvatarUpload />
          <div className="form-container">
            <div className="form">
              <Box id="form">
                <FormControl fullWidth className="special-input">
                  <h3>Who are you?</h3>
                  <p>Name</p>

                  <TextField
                    id="outlined-basic"
                    placeholder="Your Name Here"
                    variant="outlined"
                    name="name"
                    value={formInput.name}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <p>Country</p>
                  <InputLabel id="demo-simple-select-label">
                    Choose your country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                    name="country"
                    value={formInput.country}
                    onChange={(e) => handleChange(e)}
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
                  <p>State/ Region</p>
                  <TextField
                    id="outlined-basic"
                    placeholder="State/ Region"
                    variant="outlined"
                    name="state"
                    value={formInput.state}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <p>About</p>
                  <TextField
                    id="outlined-basic"
                    placeholder="Hi! Please introduce yourself.?"
                    variant="outlined"
                    name="about"
                    value={formInput.about}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
            </div>
            <div className="form2">
              <Box>
                <FormControl fullWidth>
                  <h3>What have you been watching?</h3>
                  <TextField
                    id="outlined-basic"
                    placeholder="Movies listed here will be added to the My Movies page and can be removed from your list upon edit."
                    variant="outlined"
                    name="watching"
                    value={formInput.watching}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <p>Add New Movie</p>
                  <TextField
                    id="outlined-basic"
                    placeholder="Add new movie"
                    variant="outlined"
                    name="addMovie"
                    value={formInput.addMovie}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <button className="add-movie" variant="contained">
                  Add another
                </button>
                <FormControl margin="normal" fullWidth>
                  <p>Your Movies</p>
                </FormControl>

                <div>
                  <button
                    className="save-button"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
