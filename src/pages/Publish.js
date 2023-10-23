import * as React from "react";

import {
  Typography,
  useTheme,
  FormControlLabel,
  RadioGroup,
  Button,
  Box,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Radio,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import Banner from "../components/publishPage/Banner";
import usePublish from "../hooks/usePublish";
import UserDetails from "../functions/userDetails";
import useGetPublisherRights from "../hooks/useGetPublisherRights";
import { useRef, useState, useEffect } from "react";
import RequestPublisherRights from "../components/publishPage/RequetPublesherRights";

const Publish = () => {
  const theme = useTheme();
  // A styles object or a function returning a styles object.
  //The function receives the theme and component's properties in an object which is its single argument.
  const OuterContainer = styled(Box)(() => ({
    marginBottom: "150px",
  }));

  //styling of the publish form
  const FormContainer = styled(Box)(() => ({
    justifyContent: "flex-start",
    height: "100%",
    border: "1px solid #ccc",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",

    padding: "10px 10px",
    margin: "50px 40px",
    backgroundColor: grey[50],

    [theme.breakpoints.down("lg")]: {
      alignItems: "justify",
      margin: "30px 20px", //(top,bottom) (left,right)
    },
  }));

  const PublishForm = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    height: "100%",

    padding: "10px 10px ",
    margin: "20px 10px",
    backgroundColor: grey[50],

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "justify",
      margin: "5px 0px",
      padding: "10px 0px ",
    },
  }));

  const FormTitle = styled(Typography)(() => ({
    margin: "10px 10px 0px 0px",
    fontWeight: "bold",
    color: pink[900],
    fontSize: "2.0rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.0rem",
      margin: "10px 30px 0px 30px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "10px 15px 0px 5px", //top right bottom left
    },
  }));

  const FormsubTitle = styled(Typography)(() => ({
    margin: "0px 10px 0px 0px",

    fontSize: "1.2rem",

    [theme.breakpoints.up("lg")]: {
      margin: "0px 30px 0px 30px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "0px 15px 0px 5px", //top right bottom left
    },
  }));

  const TermsConditionsBox = styled(Box)(() => ({
    margin: "0px 10px 0px 0px",

    [theme.breakpoints.up("md")]: {
      margin: "10px 30px 0px 30px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px 15px 0px 5px", //top right bottom left
    },
  }));

  const PublishBtn = styled(Button)(() => ({
    width: "400px",
    height: "100px",

    backgroundColor: pink[900],

    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: pink[600],
    },

    [theme.breakpoints.up("sm")]: {
      margin: "10px 30px 0px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 15px 0px 5px", //top right bottom left
      width: "300px",
      height: "60px",
    },
  }));

  const FormImage = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",

    margin: "10px 10px 10px 10px",

    [theme.breakpoints.up("lg")]: {
      width: "50vw",
      heigh: "700px",
      objectFit: "cover",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "0px",
      margin: "10px 5px",
    },
  }));

  const [arContent, setARContent] = useState("No");
  const [zipOrRarFile, setZipOrRarFile] = useState(null);
  const [zipOrRarFileName, setZipOrRarFileName] = useState("");

  const handleARContentChange = (event) => {
    setARContent(event.target.value);
  };

  const handleZipOrRarFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setZipOrRarFile(selectedFile);
    setZipOrRarFileName(selectedFile ? selectedFile.name : "");
  };

  const { publish, isLoading, error } = usePublish();

  const [isPublisher, setIspublisher] = useState(false);
  const [isError, setError] = useState(false);

  const langRef = useRef(null);

  useEffect(() => {
    //get user's details from server

    UserDetails()
      .then((data) => {
        setError(false);

        //check if the user is alread a publisher and if user is a publisher display the publish books component
        //if not display the publisher rights requesting component
        if (data.publisher) {
          setIspublisher(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, [isPublisher]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    //add inputs of publish book from to a FormData
    formData.append("title", event.target.title.value);
    formData.append("author", event.target.author.value);
    formData.append("language", event.target.language.value);
    formData.append("ageCategory", event.target.ageCatogory.value);
    formData.append("genre", event.target.genre.value);
    formData.append("ARcontent", event.target.ARcontent.value);
    formData.append("description", event.target.description.value);
    formData.append("tag1", event.target.tag1.value);
    formData.append("tag2", event.target.tag2.value);
    formData.append("coverImage", event.target.coverImage.files[0]);
    formData.append("uploadedBook", event.target.uploadedBook.files[0]);
    if (arContent === "Yes" && event.target.zipOrRarFile.file[0]) {
      formData.append("zipOrRarFile", event.target.zipOrRarFile.file[0]);
    }

    console.log(formData);
    //send publish form data to server side
    publish(formData);
  };

  const { publisherRights, IsLoading, Error } = useGetPublisherRights();

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("bio", event.target.bio.value);
    formData.append("haspublishedbefore", event.target.haspublished.value);
    formData.append(
      "prevouspublications",
      event.target.prevouspublications.value
    );

    console.log(event.target.bio.value);
    //send publish form data to server side
    publisherRights(formData);
  };

  return (
    <OuterContainer>
      <Banner />

      {/*publisher rights requesting form*/}
      {!isPublisher && <RequestPublisherRights />}

      {/*  publish form*/}
      {isPublisher && (
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <FormTitle>Publish Your Book</FormTitle>
            <FormsubTitle>
              {" "}
              Begin your journey as a content creator{" "}
            </FormsubTitle>
            <PublishForm>
              <FormImage>
                <Grid
                  container
                  spacing={2}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  {/* Input Field for title of the book*/}
                  <Grid item>
                    <InputLabel>Book Title </InputLabel>
                    <TextField
                      label=""
                      id="title"
                      name="title"
                      //ref={langRef}
                      onChange={(e) => {
                        langRef.current = e.target.value;
                      }}
                      required
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>

                  {/* Input Field for author's name*/}
                  <Grid item>
                    <InputLabel>Author</InputLabel>
                    <TextField
                      label=""
                      name="author"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    {/* Dropdown menu to select the languge used in the book*/}
                    <InputLabel id="lang">Language</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="lang"
                      label="Language"
                      name="language"
                      //onChange={()=>{console.log(lang.current.value)}}
                      required
                      fullWidth
                    >
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="Sinhala">Sinhala</MenuItem>
                      <MenuItem value="Tamil">Tamil</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </Grid>

                  {/* Radio buttons to select the age category that the book belongs to*/}
                  <Grid item>
                    <InputLabel id="ageCategory">Age Category</InputLabel>
                    <RadioGroup
                      row // radio btns as a row
                      name="ageCatogory"
                      defaultValue="PG 5+"
                      required
                    >
                      <FormControlLabel
                        value="PG 5+"
                        control={<Radio />}
                        label="PG 5+"
                      />
                      <FormControlLabel
                        value="PG 7+"
                        control={<Radio />}
                        label="PG 7+"
                      />
                      <FormControlLabel
                        value="PG 10+"
                        control={<Radio />}
                        label="PG 10+"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </Grid>

                  <Grid item>
                    <InputLabel id="genre">Genre</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="genre"
                      label="Genre"
                      fullWidth
                      name="genre"
                      required
                    >
                      <MenuItem value="Adventure and Fantasy">
                        {" "}
                        Adventure and Fantasy
                      </MenuItem>
                      <MenuItem value="Picture Book"> Picture Book</MenuItem>
                      <MenuItem value="Fairy Tales and Folklore">
                        Fairy Tales and Folklore
                      </MenuItem>
                      <MenuItem value="Friendship and Social Themes">
                        Friendship and Social Themes
                      </MenuItem>
                      <MenuItem value="Poetry and Rhyming Book">
                        Poetry and Rhyming Book
                      </MenuItem>
                    </Select>
                  </Grid>

                  <Grid item>
                    <InputLabel id="ARcontent">
                      Augmented Reality Content
                    </InputLabel>
                    <RadioGroup
                      row
                      name="ARcontent"
                      value={arContent}
                      onChange={handleARContentChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Grid>
                  {arContent === "Yes" && (
                    <Grid item>
                      <InputLabel marginbottom={"10px"}>
                        ZIP or RAR File {"(.zip, .rar)"}
                      </InputLabel>
                      <TextField
                        label=""
                        type="file"
                        inputProps={{ accept: ".zip, .rar" }}
                        fullWidth
                        name="zipOrRarFile"
                        required
                        //onChange={handleZipOrRarFileChange}
                      />
                    </Grid>
                  )}
                </Grid>
              </FormImage>

              <FormImage>
                <Grid
                  container
                  spacing={2}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Grid item>
                    <InputLabel marginbottom={"10px"}>
                      Cover Image {"("}.jpeg .png .jpg{")"}
                    </InputLabel>
                    <TextField
                      label=""
                      type="file"
                      inputProps={{ accept: "image/*" }} // this input field only accepts image files
                      fullWidth
                      name="coverImage"
                      required
                      //onChange={handleImage}
                    />
                  </Grid>

                  <Grid item>
                    <InputLabel marginbottom={"10px"}>
                      Upload your book {"("}.pdf .epub{")"}{" "}
                    </InputLabel>
                    <TextField
                      label=""
                      type="file"
                      inputProps={{ accept: ".epub , .pdf" }} //this input field only accepts .epub and .pdf files
                      fullWidth
                      name="uploadedBook"
                      required
                    />
                  </Grid>

                  <Grid item>
                    <InputLabel>Tag 1 </InputLabel>

                    <TextField
                      label=""
                      name="tag1"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>

                  <Grid item>
                    <InputLabel>Tag 2 </InputLabel>

                    <TextField
                      label=""
                      name="tag2"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>

                  <Grid item>
                    <InputLabel> Description </InputLabel>
                    <TextField
                      label=""
                      name="description"
                      variant="outlined"
                      multiline // Enable multi-line mode
                      rows={9} // Number of rows
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </FormImage>
            </PublishForm>

            <TermsConditionsBox>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I accept the Terms & Conditions"
              />
            </TermsConditionsBox>

            <Box
              display={"flex"}
              justifyContent={"center"}
              marginBottom={"30px"}
            >
              <PublishBtn variant="contained" type="submit">
                {" "}
                Publish
              </PublishBtn>
            </Box>
          </FormContainer>
        </form>
      )}
    </OuterContainer>
  );
};

export default Publish;
