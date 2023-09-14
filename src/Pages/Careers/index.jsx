import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  Pagination,
  Divider,
  Stack,
  Chip,
  Avatar,
  Modal,
  TextField,
} from "@mui/material";
import "./style.css";

import bannerPhoto from "../../Assets/images/careers-banner.png";
import joinbg from "../../Assets/images/join-bg.png";
import careerimg01 from "../../Assets/images/careers-img01.png";
import careerimg02 from "../../Assets/images/careers-img02.png";
import icon08 from "../../Assets/images/icon-08.svg";
import icon09 from "../../Assets/images/icon-09.svg";
import icon10 from "../../Assets/images/icon-10.svg";
import icon11 from "../../Assets/images/icon-11.svg";
import icon12 from "../../Assets/images/icon-12.svg";
import icon13 from "../../Assets/images/icon-13.svg";
import icon14 from "../../Assets/images/icon-14.svg";
import iconbriefcase from "../../Assets/images/icon-briefcase.svg";
import iconrupee from "../../Assets/images/icon-rupee.svg";
import iconlocation from "../../Assets/images/icon-location.svg";
import whiteCross from "../../Assets/images/whiteCross.svg"

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 730,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 0,
  p: 4,
};

export default function Careers() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);


  const onFileInputChange = (event) => {
    const { files } = event.target;
  }
  const onTargetClick = () => {
    fileInputRef.current.click()
  }

  return (
    <>
      <NavBar />
      <Box className="CareersContainer">
        <Box className="careers-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Careers
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="careers-content">
          <Box className="join-team">
            <figure>
              <img src={careerimg01} />
            </figure>
            <article>
              <Typography variant="h2" gutterBottom>
                Join Our Team and Shape the Future of Event and Production
                Spaces
              </Typography>
              <Typography variant="body1" gutterBottom>
                At SpotLet, we're not just a company; we're a community of
                innovators, dreamers, and creators. If you're passionate about
                transforming the way people discover, book, and experience event
                and production spaces, then you're in the right place. Join us
                on our mission to connect individuals, businesses, and
                filmmakers with extraordinary locations.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Our Commitment to Diversity and Inclusion:
              </Typography>
              <Typography variant="body1" gutterBottom>
                At SpotLet, we embrace diversity in all its forms. We believe
                that a diverse and inclusive workplace fosters creativity,
                innovation, and empathy. We are committed to providing equal
                opportunities and cultivating an environment where every team
                member's unique background and perspective are valued. Join us
                and contribute to a culture that celebrates differences and
                empowers individuals to thrive.
              </Typography>
            </article>
          </Box>
          <Box className="why-work">
            <Box className="work-container">
              <article>
                <Typography variant="h2" gutterBottom>
                  Why Work at SpotLet?
                </Typography>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon08} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Innovative Environment
                    </Typography>
                    <Typography variant="body1">
                      Be a part of a dynamic and forward-thinking team that's
                      changing the events and production industry.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon09} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Collaborative Culture
                    </Typography>
                    <Typography variant="body1">
                      We value collaboration and encourage diverse perspectives
                      to drive creativity and growth.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon10} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Impactful Work</Typography>
                    <Typography variant="body1">
                      Your contributions directly influence how people create
                      and celebrate memorable moments.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon11} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Continuous Learning
                    </Typography>
                    <Typography variant="body1">
                      Grow professionally with opportunities for skill
                      development and learning new technologies.
                    </Typography>
                  </Box>
                </Box>
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon12} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">
                      Work-Life Balance
                    </Typography>
                    <Typography variant="body1">
                      We believe in work-life harmony and offer flexible
                      schedules to support your well-being.
                    </Typography>
                  </Box>
                </Box>
              </article>
              <figure>
                <img src={careerimg02} />
              </figure>
            </Box>
          </Box>
          <Box className="join-us">
            <Box className="join-content">
              <img src={joinbg} className="image-overlay" />
              <article>
                <Typography variant="h2" gutterBottom>
                  Join Us in Making Every Event and Production Unforgettable
                </Typography>
                <Typography variant="body1">
                  our skills and passion could be the missing piece to our
                  puzzle. Come be a part of SpotLet's story and help shape the
                  future of exceptional event and production spaces.
                </Typography>
              </article>
              <aside>
                <Button className="readmore" variant="contained" size="large">
                  Apply Now
                </Button>
              </aside>
            </Box>
          </Box>
          <Box className="why-work-with-us">
            <Typography className="text-center" variant="h2" gutterBottom>
              Why work with us
            </Typography>
            <Typography
              className="text-center max-1000"
              variant="body1"
              gutterBottom
            >
              We don’t charge our customers to list their spaces on SpotLet. The
              only premium charge is if you want to showcase your spaces in the
              spotlight. Of course, you can always add your property for free on
              our portal!
            </Typography>

            <Box className="whywork-container">
              <Card className="our">
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon13} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Our Passion</Typography>
                    <Typography variant="body1">
                      We know that true innovation and exceptional work stem
                      from individuals who are deeply passionate about what they
                      do. When you join our team, you'll become a part of a
                      community that thrives on enthusiasm and creative energy.
                    </Typography>
                  </Box>
                </Box>
              </Card>
              <Card className="our">
                <Box className="icon-content">
                  <Box className="icon">
                    <img src={icon14} />
                  </Box>
                  <Box className="content">
                    <Typography variant="subtitle1">Our Perks</Typography>
                    <Typography variant="body1">
                      oining SpotLet means becoming a valued member of a dynamic
                      and supportive team. We offer a range of perks designed to
                      make your journey with us enjoyable, fulfilling, and
                      rewarding.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box className="current-opernings">
            <Box className="opernings-top">
              <Typography className="text-center" variant="h2">
                Current Openings
              </Typography>
              <Box className="blogfilter">
                <Box className="search">
                  <TextField
                    id="outlined-basic"
                    label="Search Current Openings"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="opernings-mid">
              <Card className="job-opernings">
                <Typography variant="h5">Mern Stack Developer</Typography>
                <Typography className="company-name" variant="subtitle2">
                  IntraEdge Technology.
                </Typography>
                <Stack className="mar5" direction="row" spacing={2}>
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconbriefcase} />}
                    label="7-12 years"
                  />
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconrupee} />}
                    label="Not Disclosed"
                  />
                </Stack>
                <Stack className="mar5" direction="row" spacing={2}>
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconlocation} />}
                    label="Maruthi Nagar, Hyderabad"
                  />
                </Stack>
                <Divider />
                <Box className="posted-apply">
                  <ul>
                    <li>
                      Posted: <span className="span600">4 days ago</span>{" "}
                    </li>
                    <li>
                      Openings: <span className="span600">4</span>{" "}
                    </li>
                    <li>
                      Applicants: <span className="span600">60</span>{" "}
                    </li>
                  </ul>
                  <Button
                    className="btn-apply"
                    variant="contained"
                    onClick={handleOpen}
                  >
                    Apply
                  </Button>
                </Box>
                <Divider />
                <Typography variant="h5">Job Descriptions</Typography>
                <Typography className="job-descriptions" variant="body1">
                  <ul>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                  </ul>
                </Typography>
                <Divider />
                <Typography variant="h5">Other Details</Typography>
                <Typography className="job-other-details" variant="body1">
                  <ul>
                    <li>
                      {" "}
                      <span className="span600">Role:</span> There are many
                      variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Industry Type:</span> There are
                      many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Department:</span> There are
                      many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Employment Type:</span> There
                      are many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Salary:</span> 5,00000 /10,00000
                      PA
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Role Category:</span> There are
                      many variations of passages
                    </li>
                  </ul>
                </Typography>
              </Card>
              <Card className="job-opernings">
                <Typography variant="h5">Mern Stack Developer</Typography>
                <Typography className="company-name" variant="subtitle2">
                  IntraEdge Technology.
                </Typography>
                <Stack className="mar5" direction="row" spacing={2}>
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconbriefcase} />}
                    label="7-12 years"
                  />
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconrupee} />}
                    label="Not Disclosed"
                  />
                </Stack>
                <Stack className="mar5" direction="row" spacing={2}>
                  <Chip
                    className="job-info"
                    avatar={<Avatar alt="" src={iconlocation} />}
                    label="Maruthi Nagar, Hyderabad"
                  />
                </Stack>
                <Divider />
                <Box className="posted-apply">
                  <ul>
                    <li>
                      Posted: <span className="span600">4 days ago</span>{" "}
                    </li>
                    <li>
                      Openings: <span className="span600">4</span>{" "}
                    </li>
                    <li>
                      Applicants: <span className="span600">60</span>{" "}
                    </li>
                  </ul>
                  <Button
                    className="btn-apply"
                    variant="contained"
                    onClick={handleOpen}
                  >
                    Apply
                  </Button>
                </Box>
                <Divider />
                <Typography variant="h5">Job Descriptions</Typography>
                <Typography className="job-descriptions" variant="body1">
                  <ul>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                    <li>
                      Lorem Ipsum available, but the majority have suffered
                      alteration.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </li>
                  </ul>
                </Typography>
                <Divider />
                <Typography variant="h5">Other Details</Typography>
                <Typography className="job-other-details" variant="body1">
                  <ul>
                    <li>
                      {" "}
                      <span className="span600">Role:</span> There are many
                      variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Industry Type:</span> There are
                      many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Department:</span> There are
                      many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Employment Type:</span> There
                      are many variations of passages
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Salary:</span> 5,00000 /10,00000
                      PA
                    </li>
                    <li>
                      {" "}
                      <span className="span600">Role Category:</span> There are
                      many variations of passages
                    </li>
                  </ul>
                </Typography>
              </Card>
            </Box>
            <Box className="opernings-bot">
              <Pagination count={5} variant="outlined" />
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box className="modalbox" sx={{ ...style, width: 730 }}>
                <Typography variant="h5">Apply Now</Typography>
                <img onClick={() => setOpen(false)} className="whiteCross" src={whiteCross} />
                <Box className="form-auto-scroll">
                  <Box className="form-box">
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Name</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder='Name'
                        variant="outlined"
                      />
                    </div>
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Email Address</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Email"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Phone number</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Enter Phone number "
                        variant="outlined"
                      />
                    </div>
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Alternate number</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Alternate Phone number"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Qualification</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Qualification"
                        variant="outlined"
                      />
                    </div>
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">IT experience</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="IT experience"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">
                        Relevant experience
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="No of Years"
                        variant="outlined"
                      />
                    </div>
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Current CTC</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Numbers here"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Expected CTC</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Numbers here"
                        variant="outlined"
                      />
                    </div>
                    <div className="two-column">
                      <Typography className="applyInput" variant="body1">Key skills</Typography>
                      <TextField
                        id="outlined-basic"
                        placeholder="Key skills"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="one-column">
                      <Typography className="applyInput" variant="body1">Profile Summary</Typography>
                      <TextField
                        className="textarea"
                        id="outlined-basic"
                        placeholder="Type here"
                        variant="outlined"
                      />
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div className="one-column">
                      <Typography className="applyInput" variant="body1">Upload Resume</Typography>
                      <Box className="applyFileInputBox">
                        <input
                          onChange={onFileInputChange}
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                        />
                        <svg onClick={() => fileInputRef.current.click()} className='pointer' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                          <g clip-path="url(#clip0_2182_5478)">
                            <path d="M20.9625 10.8766C20.2258 7.13909 16.9433 4.33325 13 4.33325C9.86917 4.33325 7.15 6.10992 5.79583 8.70992C2.535 9.05658 0 11.8191 0 15.1666C0 18.7524 2.91417 21.6666 6.5 21.6666H20.5833C23.5733 21.6666 26 19.2399 26 16.2499C26 13.3899 23.7792 11.0716 20.9625 10.8766ZM20.5833 19.4999H6.5C4.10583 19.4999 2.16667 17.5608 2.16667 15.1666C2.16667 12.9458 3.82417 11.0933 6.02333 10.8658L7.1825 10.7466L7.72417 9.71742C8.75333 7.73492 10.7683 6.49992 13 6.49992C15.8383 6.49992 18.2867 8.51492 18.8392 11.2991L19.1642 12.9241L20.8217 13.0433C22.5117 13.1516 23.8333 14.5708 23.8333 16.2499C23.8333 18.0374 22.3708 19.4999 20.5833 19.4999ZM8.66667 14.0833H11.4292V17.3333H14.5708V14.0833H17.3333L13 9.74992L8.66667 14.0833Z" fill="#212121" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2182_5478">
                              <rect width="26" height="26" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <Typography onClick={() => fileInputRef.current.click()} className="dragText pointer">Drag & Drop</Typography>
                        <Typography onClick={() => fileInputRef.current.click()} my={1} className="bottomRedText pointert">Supported Formats: doc, docx, rtf, PDF upto 2MB</Typography>
                      </Box>
                    </div>
                  </Box>
                  <Box className="form-box">
                    <div style={{ display: "flex", justifyContent: "end" }} className="one-column">
                      <Button
                        className="submit"
                        variant="contained"
                        size="large"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
