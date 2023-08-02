import React from 'react';
import { Box, Typography } from '@mui/material';

import "./bookingDetails.css";
import NavBar from '../NavBar';

import coverPhoto from "../../Assets/images/BookingDetails/3ba332a93ef229bce4889ecc7faf250e.jpeg"



export default function BookingDetails() {
  return (
    <>
      <NavBar />
      <Box className="bookingDetailsContainer">
        <Box className="coverBox">
          <Box className="backButtonBox">
            <Box className="backButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M6.5375 14.4479C6.37917 14.4479 6.22084 14.3896 6.09584 14.2646L0.6625 8.83125C-0.220833 7.94792 -0.220833 6.49792 0.6625 5.61458L6.09584 0.18125C6.3375 -0.0604167 6.7375 -0.0604167 6.97917 0.18125C7.22084 0.422917 7.22084 0.822917 6.97917 1.06458L1.54583 6.49792C1.14583 6.89792 1.14583 7.54792 1.54583 7.94792L6.97917 13.3812C7.22084 13.6229 7.22084 14.0229 6.97917 14.2646C6.85417 14.3812 6.69584 14.4479 6.5375 14.4479Z" fill="#1A1E25" />
              </svg>
              <Typography>Go back</Typography>
            </Box>
          </Box>


          <Box className="coverPhotoBox">
            <Box className="coverPhoto">
              <img src={coverPhoto} />
            </Box>
          </Box>


          <Box className="venueInfoBox"></Box>
        </Box>

      </Box>
    </>
  )
}
