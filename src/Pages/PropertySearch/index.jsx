import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./style.css"

import SearchIcon from '../../Assets/images/search-normal.svg';

import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg"
import Pimage3 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg"
import Pimage4 from "../../Assets/images/properitiseImage/WhatsApp Image 2023-07-15 at 12.29.22.jpeg"

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";


//components
import NavBar from '../NavBar';
import Footer from '../Footer';
import { propertiesCard } from "../../Component/PropertiesCard"
import GoogleMap from '../../Component/GoogleMap';




export default function PropertySearch() {
  const [mapSwitch, setMapSwitch] = useState(false)

  const latitude = 28.230553471285813
  const longitude = 75.97394025062951

  console.log(mapSwitch);

  const handleMapSwitch = (e) => {
    setMapSwitch(e?.target?.checked)
  }

  return (
    <>
      <NavBar />
      <Box className="propertySearchContainer">
        <Box className="propertySHeader">
          <Box className="searchBox">
            <Box className="property_search_Field">
              <img style={{ width: "22px", position: "absolute", left: "20px", top: "6px", zIndex: "9" }} src={SearchIcon} />
              <TextField className='search_Input' sx={{ width: "100%" }} placeholder='Search reviews' />
            </Box>
          </Box>

          <Box className="bottomFilterWB">
            <Box className="filterBox">

              <Box className="filterItem">
                <Box className="filterItemHeaderBox">
                  <Typography className='filterItemHeader'>Event</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>FilmShooting</Typography>
              </Box>

              <Box className="filterItem">
                <Box className="filterItemHeaderBox">
                  <Typography className='filterItemHeader'>Activity</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>Green Screen</Typography>
              </Box>
              <Box className="filterItem">
                <Box className="filterItemHeaderBox">
                  <Typography className='filterItemHeader'>Location</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>Beach House</Typography>
              </Box>
              <Box className="filterItem">
                <Box className="filterItemHeaderBox">
                  <Typography className='filterItemHeader'>City</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>Delhi</Typography>
              </Box>

            </Box>
            <Box className="MsearchBtn pointer">
              <Typography>Modify Search</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="secondFilterBox">
          <Box className="filterButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M11.2483 0.618164L7.20589 8.17569V15.3817L4.21806 13.8V8.17575L-8.96454e-05 0.618227L11.2483 0.618164Z" fill="#555555" />
            </svg>
            <Typography ml={1} className='filter_btn_text'>Filter</Typography>
          </Box>

          <Box mx={2} className="shortByBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
              <path d="M7.18347 0.417977C6.94964 0.416944 6.72496 0.508908 6.55917 0.673798C6.39325 0.838836 6.29995 1.06292 6.2998 1.29673C6.29995 1.53056 6.39325 1.75479 6.55917 1.91967C6.72494 2.08456 6.94962 2.17652 7.18347 2.17549H15.4826C15.7164 2.17652 15.9411 2.08456 16.1069 1.91967C16.2728 1.75478 16.3661 1.53054 16.3662 1.29673C16.3661 1.06291 16.2728 0.838828 16.1069 0.673798C15.9411 0.508908 15.7164 0.416942 15.4826 0.417977H7.18347Z" fill="#555555" />
              <path d="M7.18347 4.14265C6.94964 4.14162 6.72496 4.23373 6.55917 4.39862C6.39325 4.56351 6.29995 4.78759 6.2998 5.0214C6.29995 5.25523 6.39325 5.47946 6.55917 5.64434C6.72494 5.80923 6.94962 5.90119 7.18347 5.90016H12.993C13.2259 5.90001 13.4494 5.80731 13.6142 5.64256C13.7789 5.47782 13.8716 5.25434 13.8717 5.02137C13.8716 4.78842 13.7789 4.56494 13.6142 4.40017C13.4494 4.23541 13.2259 4.14287 12.993 4.14258L7.18347 4.14265Z" fill="#555555" />
              <path d="M7.18344 7.86726C6.94873 7.86622 6.72331 7.95893 6.55741 8.12485C6.39151 8.29077 6.29863 8.51617 6.29982 8.75088C6.29996 8.98471 6.39326 9.20894 6.55918 9.37382C6.72496 9.53871 6.94963 9.63067 7.18348 9.62964H10.5031C10.7361 9.62949 10.9596 9.53679 11.1243 9.37204C11.2891 9.2073 11.3816 8.98394 11.3819 8.75085C11.3829 8.51702 11.2908 8.29234 11.1259 8.12655C10.9611 7.96077 10.737 7.86748 10.5032 7.86719L7.18344 7.86726Z" fill="#555555" />
              <path d="M3.85723 0.369155C3.63521 0.369598 3.42249 0.458317 3.26589 0.615823C3.10927 0.773333 3.02173 0.98664 3.02247 1.20879V8.79518C3.02306 9.01646 3.11119 9.22844 3.26751 9.3849C3.42399 9.54137 3.63611 9.6295 3.85723 9.62994C4.07939 9.63068 4.29269 9.54314 4.4502 9.38667C4.60771 9.23005 4.69642 9.01718 4.69701 8.79518V1.20879C4.69775 0.985736 4.60962 0.771855 4.45196 0.614194C4.29431 0.456534 4.08027 0.36827 3.85723 0.369155Z" fill="#555555" />
              <path d="M0.777785 5.21716C0.600791 5.37009 0.491554 5.58709 0.474133 5.82048C0.456714 6.05372 0.53259 6.28443 0.68493 6.46204L3.14541 9.32288C3.2985 9.49987 3.51535 9.60896 3.74874 9.62638C3.98212 9.6438 4.21269 9.56792 4.3903 9.41558C4.5673 9.2625 4.67653 9.04565 4.69395 8.81226C4.71137 8.57888 4.6355 8.34831 4.48315 8.1707L2.02267 5.30986C1.86959 5.13287 1.65274 5.02363 1.41935 5.00636C1.18597 4.98894 0.955399 5.06482 0.777785 5.21716Z" fill="#555555" />
            </svg>
            <Typography ml={1} className='filter_btn_text'>Sort by</Typography>
          </Box>
          <Box className="showMapBtn">
            <Typography mr={2}>Show map</Typography>

            <Box
              onClick={() => setMapSwitch(!mapSwitch)}
              sx={{
                justifyContent: mapSwitch ? "end" : "start",
                backgroundColor: mapSwitch ? " #65c466" : "#d8d8d8"
              }}
              className="mpaToggleSwitch">
              <Box className="mpaToggleSwitchWhiteBtn"></Box>
            </Box>
          </Box>
        </Box>

        <Box className="propertyCard_Map">
          <Box
            sx={{
              justifyContent: mapSwitch ? "start" : "space-between"
            }}
            className={mapSwitch ? "property_card_box propertyhW" : "property_card_box propertyfW"}>
            {propertiesCard(
              Pimage1,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar",
              [buildingIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage3,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar",
              [buildingIcon]
            )}
            {propertiesCard(
              Pimage2,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar",
              [FilmIcon]
            )}
            {propertiesCard(
              Pimage3,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar Colony",
              [buildingIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage2,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda",
              [buildingIcon, PersonIcon, FilmIcon]
            )}
            {propertiesCard(
              Pimage4,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram",
              [buildingIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage1,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar Colony",
              [FilmIcon, PersonIcon]
            )}
            {propertiesCard(
              Pimage4,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda",
              [buildingIcon, PersonIcon, FilmIcon]
            )}
            {propertiesCard(
              Pimage1,
              "#SWISS23808",
              "INR. 4000",
              "Cafe",
              "Puppalguda, Sri Ram Nagar",
              [buildingIcon, PersonIcon]
            )}

          </Box>
          <Box sx={{ display: mapSwitch ? "block" : "none" }} className="property_map_box">
            <GoogleMap latitude={latitude} longitude={longitude} />
          </Box>

        </Box>




      </Box>
      <Footer />
    </>
  )
}
