import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Slider, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
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
import RedCross from "../../Assets/images/RedCross.svg";
import videoCameraIcon from "../../Assets/images/VideoCameraIcon.svg"
import GroupPeopleIcon from "../../Assets/images/GroupOfIcon.svg"
import IndividualEventIcon from "../../Assets/images/IndividualEventIcon.png"
import YellowStar from "../../Assets/images/YellowStar.svg"
import WhiteStar from "../../Assets/images/WhiteStar.svg"


//components
import NavBar from '../NavBar';
import Footer from '../Footer';
import { propertiesCard } from "../../Component/PropertiesCard"
import GoogleMap from '../../Component/GoogleMap';



//slider fun
const minDistance = 10;

function valuetext(value) {
  return `${value}°C`;
}


export default function PropertySearch() {
  const [mapSwitch, setMapSwitch] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [showFilterPupUp, setFilterPupUp] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [value1, setValue1] = useState([0, 37]);
  const [amenitiesShow, setAmenitiesShow] = useState(false)
  const [featuresShow, setFeaturesShow] = useState(false)

  const [eventPopUp, setEventPopUp] = useState(false)
  const [eventList, setEventList] = useState("");
  const eventArray = ["DANDI MARCH DAY", "CONSUMERS DAY", "	IMMUNIZATION DAY", "WORLD FORESTRY DAY", "WORLD TB DAY"]
  const [filteredEvents, setFilteredEvents] = useState(eventArray);

  const [activityPopUp, setActivityPopUp] = useState(false)
  const [activityList, setActivityList] = useState("");
  const activityArray = ["activityList-1", "activityList-2", "activityList-3", "activityList-4", "activityList-5"]
  const [filteredActivity, setFilteredActivity] = useState(activityArray);

  const [locationPopUp, setLocationPopUp] = useState(false)
  const [locationList, setLocationList] = useState("");
  const locationArray = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle", "Boston", "San Francisco", "Dallas", "Philadelphia"]
  const [filteredLocation, setFilteredLocation] = useState(locationArray);

  const [cityPopUp, setCityPopUp] = useState(false)
  const [cityList, setCityList] = useState("");
  const cityArray = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle", "Boston", "San Francisco", "Dallas", "Philadelphia"]
  const [filteredCities, setFilteredCities] = useState(cityArray);

  const [storByPopUp, setStorByPopUp] = useState(false)
  const [storByList, setStorByList] = useState("");
  const storByArray = ["Price Low to High", "Price High to Low", "Verified", "Exclusive", "Featured"]

  const [fcityPopUp, setFCityPopUp] = useState(false)
  const [fcityList, setFCityList] = useState("");

  const [fAreaPopUp, setFAreaPopUp] = useState(false)
  const [fAreaList, setFAreaList] = useState("");





  const latitude = 28.230553471285813;
  const longitude = 75.97394025062951;


  const handleSearchChange = (event) => {
    if (event.target.id === "Event") {
      const query = event.target.value;
      setSearchQuery(query);
      const filteredEvents = eventArray.filter(val => val.toLowerCase().includes(query.toLowerCase()));
      setFilteredEvents(filteredEvents);
    }
    if (event.target.id === "City") {
      const query = event.target.value;
      setSearchQuery(query);
      const filteredCities = cityArray.filter(val => val.toLowerCase().includes(query.toLowerCase()));
      setFilteredCities(filteredCities);
    }
    if (event.target.id === "Activity") {
      const query = event.target.value;
      setSearchQuery(query);
      const filteredActivity = activityArray.filter(val => val.toLowerCase().includes(query.toLowerCase()));
      setFilteredActivity(filteredActivity);
    }
    if (event.target.id === "Location") {
      const query = event.target.value;
      setSearchQuery(query);
      const filteredLocation = locationArray.filter(val => val.toLowerCase().includes(query.toLowerCase()));
      setFilteredLocation(filteredLocation);
    }
  };


  const handelPopUpClick = (e) => {
    //Event
    if (e?.target?.id === "Event") {
      setEventPopUp(true)
    } else {
      // setEventPopUp(false)
    }
    //Activity
    if (e?.target?.id === "Activity") {
      setActivityPopUp(true)
    } else {
      // setActivityPopUp(false)
    }
    //Location
    if (e?.target?.id === "Location") {
      setLocationPopUp(true)
    } else {
      // setLocationPopUp(false)
    }
    //City
    if (e?.target?.id === "City") {
      setCityPopUp(true)
    } else {
      // setCityPopUp(false)
    }
    //StorBy
    if (e?.target?.id === "storBy") {
      setStorByPopUp(true)
    } else {
      // setStorByPopUp(false)
    }
    //Filter Box
    if (e?.target?.id === "FCity") {
      setFCityPopUp(true)
    }
    if (e?.target?.id === "FArea") {
      setFAreaPopUp(true)
    }
  }

  const openFilterPopUp = (e) => {
    setShowPopup(true)
    setFilterPupUp(true)
  }

  //price slider function
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };



  const filterPopUp = () => {
    return (
      <Box sx={{ display: showFilterPupUp ? "block" : "none" }} className="filterPopUpBox">
        <Box className="filterPupNav">
          <Box className="filterNavItem1"><Typography>Filters</Typography></Box>
          <Box className="filterNavItem2">
            <img
              onClick={() => {
                setShowPopup(false)
                setFilterPupUp(false)
              }}
              style={{ width: "50px", height: "50px", cursor: "pointer" }} src={RedCross} />
          </Box>
        </Box>

        <Box className="filterPopUpscrollBox">
          <Box className="popUpCotenantBox">

            <Box className="priceFilterBox">
              <Box className="priceFilterHeader">
                <Typography>Price</Typography>
              </Box>
              <Box className="priceFilterLabelBox">

                <Box className="priceFilterLabelItem">
                  <Typography className="priceFLabelText">From</Typography>
                  <Box className="priceFromBox">
                    <Typography className='priceFromInrText'>INR.</Typography>
                    <Typography className='priceFromInrPrice'>10,000</Typography>
                  </Box>
                </Box>

                <Box className="priceFilterLabelItem">
                  <Typography className="priceFLabelText">To</Typography>
                  <Box className="priceFromBox">
                    <Typography className='priceFromInrText'>INR.</Typography>
                    <Typography className='priceFromInrPrice'>50,000</Typography>
                  </Box>
                </Box>
              </Box>
              <Box px={1.5} className="priceFilterSlider">
                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </Box>

            </Box>

            <Box className="ActivitiesFilterBox">
              <Box className="priceFilterHeader">
                <Typography>Activities</Typography>
              </Box>
              <Box className="activitiesContainer">
                <Box className="activitiesBoxItem">
                  <img src={videoCameraIcon} />
                  <Typography>Film Shooting</Typography>
                </Box>
                <Box className="activitiesBoxItem">
                  <img src={GroupPeopleIcon} />
                  <Typography>Corporate Event</Typography>
                </Box>
                <Box className="activitiesBoxItem">
                  <img src={IndividualEventIcon} />
                  <Typography>Individual Event</Typography>
                </Box>
              </Box>
            </Box>

            <Box className="City_AreaBox">
              <Box className="priceFilterHeader">
                <Typography>City & Area</Typography>
              </Box>
              <Box className="City_AreaContainer">
                <Box className="AreaContainerItem">
                  <Box className="AreaContainerDrop">
                    <Typography className='areaHederText'>City</Typography>
                    <Box id="FCity" onClick={handelPopUpClick} className="cityDropDown">
                      <Typography id="FCity">{fcityList || "Select a City"}</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                        <path id="FCity" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                      </svg>
                    </Box>
                    <Box sx={{ display: fcityPopUp ? "flex" : "none" }} className="EventList">
                      {
                        filteredCities.map((eventData, index) => (
                          <Box key={index} onClick={e => {
                            setFCityList(e?.target?.innerText)
                          }} className="eventItem">
                            <Typography>{eventData}</Typography>
                          </Box>
                        ))
                      }
                    </Box>

                  </Box>

                </Box>

                <Box className="AreaContainerItem">
                  <Box className="AreaContainerDrop">
                    <Typography className='areaHederText'>Area</Typography>
                    <Box id="FArea" onClick={handelPopUpClick} className="cityDropDown">
                      <Typography id="FArea">{fAreaList || "Select a Area"}</Typography>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                        <path id="FArea" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                      </svg>
                    </Box>
                    <Box sx={{ display: fAreaPopUp ? "flex" : "none" }} className="EventList">
                      {
                        filteredCities.map((eventData, index) => (
                          <Box key={index} onClick={e => {
                            setFAreaList(e?.target?.innerText)
                          }} className="eventItem">
                            <Typography>{eventData}</Typography>
                          </Box>
                        ))
                      }
                    </Box>

                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="Amenities_FeaturesBox">
              <Box className="priceFilterHeader">
                <Typography>Amenities and Features</Typography>
              </Box>
              <Box className="Amenities_FeaturesContainer">
                <Box className="AmenitiesBox">
                  <Typography className='AmenitiesHeaderText'>Amenities</Typography>
                  <Typography onClick={() => setAmenitiesShow(!amenitiesShow)} className={amenitiesShow ? 'ShowMoreText AmenitiesShowActive' : 'ShowMoreText AmenitiesShow'}>{amenitiesShow ? "Show Less" : "Show More"}</Typography>
                  <Box sx={{ height: amenitiesShow ? "210px" : "126px" }} className="Check_Box">

                    <Box className="check_box_item">
                      <Checkbox
                      // sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }}
                      />
                      <Typography>Wifi</Typography>
                    </Box>

                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Kitchen</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Washing machine</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Dryer</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Air conditioning</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Heating</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Kitchen</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Washing machine</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Air conditioning</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Wifi</Typography>
                    </Box>

                  </Box>
                </Box>
                <Box className="FeaturesBox">
                  <Typography className='FeaturesHeaderText'>Features</Typography>
                  <Typography onClick={() => setFeaturesShow(!featuresShow)} className={featuresShow ? 'ShowMoreText FeaturesShowActive' : 'ShowMoreText FeaturesShow'}>{featuresShow ? "Show Less" : "Show More"}</Typography>
                  <Box sx={{ height: featuresShow ? "210px" : "126px" }} className="Check_Box">

                    <Box className="check_box_item">
                      <Checkbox
                      // sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }}
                      />
                      <Typography>Wifi</Typography>
                    </Box>

                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Kitchen</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Washing machine</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Dryer</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Air conditioning</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Heating</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Kitchen</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Washing machine</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Air conditioning</Typography>
                    </Box>
                    <Box className="check_box_item">
                      <Checkbox />
                      <Typography>Wifi</Typography>
                    </Box>

                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="PropertiesCheckBox">
              <Box className="PropertiesCheckItem">
                <Box className="propertiesCheckInput">
                  <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                </Box>
                <Box className="PropertiesTextBox">
                  <Typography className='PropertiesHeaderText'>All Verified Properties</Typography>
                  <Typography className='PropertiesSbuText'>All Spotlet Verified listings you can book from</Typography>
                </Box>
              </Box>
              <Box className="PropertiesCheckItem">
                <Box className="propertiesCheckInput">
                  <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                </Box>
                <Box className="PropertiesTextBox">
                  <Typography className='PropertiesHeaderText'>All Verified Properties</Typography>
                  <Typography className='PropertiesSbuText'>All Spotlet Verified listings you can book from</Typography>
                </Box>
              </Box>
              <Box className="PropertiesCheckItem">
                <Box className="propertiesCheckInput">
                  <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                </Box>
                <Box className="PropertiesTextBox">
                  <Typography className='PropertiesHeaderText'>All Verified Properties</Typography>
                  <Typography className='PropertiesSbuText'>All Spotlet Verified listings you can book from</Typography>
                </Box>
              </Box>

              <Box className="PropertiesCheckItem"></Box>
              <Box className="PropertiesCheckItem"></Box>
            </Box>
            <Box className="CustomerReviewBox">
              <Box className="priceFilterHeader">
                <Typography>Customer Review</Typography>
              </Box>
              <Box className="CustomerReviewContainer">
                <Box className="startBox">
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                </Box>
                <Box className="startBox">
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={WhiteStar} />
                </Box>
                <Box className="startBox">
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                </Box>
                <Box className="startBox">
                  <img src={YellowStar} />
                  <img src={YellowStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                </Box>
                <Box className="startBox">
                  <img src={YellowStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                  <img src={WhiteStar} />
                </Box>
              </Box>
            </Box>


          </Box>

        </Box>
      </Box>
    )
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      //Event
      if (e.target.id !== "Event") {
        setEventPopUp(false);
      }
      //Activity
      if (e.target.id !== "Activity") {
        setActivityPopUp(false)
      }
      //Location
      if (e.target.id !== "Location") {
        setLocationPopUp(false)
      }
      //City
      if (e.target.id !== "City") {
        setCityPopUp(false)
      }
      //StorBy
      if (e.target.id !== "storBy") {
        setStorByPopUp(false)
      }
      //Filter Box
      if (e?.target?.id !== "FCity") {
        setFCityPopUp(false)
      }
      if (e?.target?.id !== "FArea") {
        setFAreaPopUp(false)
      }
    };
    document.addEventListener("click", handleOutsideClick);
  })

  useEffect(() => {
    //handel scroll
    if (showPopup) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showPopup, showFilterPupUp]);

  return (
    <>
      <NavBar />
      <Box className="propertySearchContainer">
        {showPopup && <div className="popupBackdrop"></div>}
        <Box className="propertySHeader">
          <Box className="searchBox">
            <Box className="property_search_Field">
              <img style={{ width: "22px", position: "absolute", left: "20px", top: "10px", zIndex: "9" }} src={SearchIcon} />
              <TextField className='search_Input' sx={{ width: "100%" }} placeholder='Search by name, id, area' />
            </Box>
          </Box>

          <Box className="bottomFilterWB">
            <Box className="filterBox">

              <Box className="filterItem filterItemSideBorder">
                <Box id="Event" onClick={handelPopUpClick} className="filterItemHeaderBox">
                  <Typography id="Event" className='filterItemHeader'>Event</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path id="Event" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>{eventList || eventArray[0]}</Typography>
                <Box sx={{ display: eventPopUp ? "flex" : "none" }} className="EventList EventList1">
                  <input className='PopUpSearchField' id="Event" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for event" />
                  {
                    filteredEvents.map((eventData, index) => (
                      <Box key={index} onClick={e => {
                        setEventList(e?.target?.innerText)
                        setSearchQuery("")
                      }} className="eventItem">
                        <Typography>{eventData}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>

              <Box className="filterItem filterItemSideBorder">
                <Box id="Activity" onClick={handelPopUpClick} className="filterItemHeaderBox">
                  <Typography id="Activity" className='filterItemHeader'>Activity</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path id="Activity" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>{activityList || activityArray[0]}</Typography>
                <Box sx={{ display: activityPopUp ? "flex" : "none" }} className="EventList">
                  <input className='PopUpSearchField' id="Activity" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for Activity" />
                  {
                    filteredActivity.map((eventData, index) => (
                      <Box key={index} onClick={e => {
                        setActivityList(e?.target?.innerText)
                        setSearchQuery("")
                      }} className="eventItem">
                        <Typography>{eventData}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
              <Box className="filterItem filterItemSideBorder">
                <Box id="Location" onClick={handelPopUpClick} className="filterItemHeaderBox">
                  <Typography id="Location" className='filterItemHeader'>Location</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path id="Location" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>{locationList || locationArray[2]}</Typography>
                <Box sx={{ display: locationPopUp ? "flex" : "none" }} className="EventList">
                  <input className='PopUpSearchField' id="Location" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for Location" />
                  {
                    filteredLocation.map((eventData, index) => (
                      <Box key={index} onClick={e => {
                        setLocationList(e?.target?.innerText)
                        setSearchQuery("")
                      }} className="eventItem">
                        <Typography>{eventData}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
              <Box className="filterItem">
                <Box id="City" onClick={handelPopUpClick} className="filterItemHeaderBox">
                  <Typography id="City" className='filterItemHeader'>City</Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path id="City" fill-rule="evenodd" clip-rule="evenodd" d="M9.67594 0C10.493 0 10.6897 0.465729 10.108 1.04738L5.74715 5.40821C5.45623 5.69913 4.98042 5.69494 4.69384 5.40821L0.333015 1.04738C-0.245421 0.468948 -0.0507355 0 0.765044 0H9.67594Z" fill="#444444" />
                  </svg>
                </Box>
                <Typography className='filterItemSubHeader'>{cityList || cityArray[0]}</Typography>
                <Box sx={{ display: cityPopUp ? "flex" : "none" }} className="EventList CityEventList">
                  <input className='PopUpSearchField' id="City" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for a city" />
                  {
                    filteredCities.map((cityData, index) => (
                      <Box key={index} onClick={e => {
                        setCityList(e?.target?.innerText)
                        setSearchQuery("")
                      }} className="eventItem">
                        <Typography>{cityData}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>

            </Box>
            <Box className="MsearchBtn pointer">
              <Typography>Modify Search</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="secondFilterBox">
          <Box
            className="filterButton pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path onClick={openFilterPopUp} d="M11.2483 0.618164L7.20589 8.17569V15.3817L4.21806 13.8V8.17575L-8.96454e-05 0.618227L11.2483 0.618164Z" fill="#555555" />
            </svg>
            <Typography onClick={openFilterPopUp} ml={1} className='filter_btn_text'>Filter</Typography>
            {filterPopUp()}
          </Box>

          <Box id="storBy" onClick={handelPopUpClick} mx={2} className="shortByBtn pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
              <path id="storBy" d="M7.18347 0.417977C6.94964 0.416944 6.72496 0.508908 6.55917 0.673798C6.39325 0.838836 6.29995 1.06292 6.2998 1.29673C6.29995 1.53056 6.39325 1.75479 6.55917 1.91967C6.72494 2.08456 6.94962 2.17652 7.18347 2.17549H15.4826C15.7164 2.17652 15.9411 2.08456 16.1069 1.91967C16.2728 1.75478 16.3661 1.53054 16.3662 1.29673C16.3661 1.06291 16.2728 0.838828 16.1069 0.673798C15.9411 0.508908 15.7164 0.416942 15.4826 0.417977H7.18347Z" fill="#555555" />
              <path id="storBy" d="M7.18347 4.14265C6.94964 4.14162 6.72496 4.23373 6.55917 4.39862C6.39325 4.56351 6.29995 4.78759 6.2998 5.0214C6.29995 5.25523 6.39325 5.47946 6.55917 5.64434C6.72494 5.80923 6.94962 5.90119 7.18347 5.90016H12.993C13.2259 5.90001 13.4494 5.80731 13.6142 5.64256C13.7789 5.47782 13.8716 5.25434 13.8717 5.02137C13.8716 4.78842 13.7789 4.56494 13.6142 4.40017C13.4494 4.23541 13.2259 4.14287 12.993 4.14258L7.18347 4.14265Z" fill="#555555" />
              <path id="storBy" d="M7.18344 7.86726C6.94873 7.86622 6.72331 7.95893 6.55741 8.12485C6.39151 8.29077 6.29863 8.51617 6.29982 8.75088C6.29996 8.98471 6.39326 9.20894 6.55918 9.37382C6.72496 9.53871 6.94963 9.63067 7.18348 9.62964H10.5031C10.7361 9.62949 10.9596 9.53679 11.1243 9.37204C11.2891 9.2073 11.3816 8.98394 11.3819 8.75085C11.3829 8.51702 11.2908 8.29234 11.1259 8.12655C10.9611 7.96077 10.737 7.86748 10.5032 7.86719L7.18344 7.86726Z" fill="#555555" />
              <path id="storBy" d="M3.85723 0.369155C3.63521 0.369598 3.42249 0.458317 3.26589 0.615823C3.10927 0.773333 3.02173 0.98664 3.02247 1.20879V8.79518C3.02306 9.01646 3.11119 9.22844 3.26751 9.3849C3.42399 9.54137 3.63611 9.6295 3.85723 9.62994C4.07939 9.63068 4.29269 9.54314 4.4502 9.38667C4.60771 9.23005 4.69642 9.01718 4.69701 8.79518V1.20879C4.69775 0.985736 4.60962 0.771855 4.45196 0.614194C4.29431 0.456534 4.08027 0.36827 3.85723 0.369155Z" fill="#555555" />
              <path id="storBy" d="M0.777785 5.21716C0.600791 5.37009 0.491554 5.58709 0.474133 5.82048C0.456714 6.05372 0.53259 6.28443 0.68493 6.46204L3.14541 9.32288C3.2985 9.49987 3.51535 9.60896 3.74874 9.62638C3.98212 9.6438 4.21269 9.56792 4.3903 9.41558C4.5673 9.2625 4.67653 9.04565 4.69395 8.81226C4.71137 8.57888 4.6355 8.34831 4.48315 8.1707L2.02267 5.30986C1.86959 5.13287 1.65274 5.02363 1.41935 5.00636C1.18597 4.98894 0.955399 5.06482 0.777785 5.21716Z" fill="#555555" />
            </svg>
            <Typography id="storBy" ml={1} className='filter_btn_text'>Sort by</Typography>
            <Box className="storByPopUpBox">
              <Box sx={{ display: storByPopUp ? "flex" : "none" }} className="EventList storByPopUpPosition">
                {
                  storByArray.map(storByData => (
                    <Box key={storByData} onClick={e => { setStorByList(e?.target?.innerText) }} className="eventItem">
                      <Typography>{storByData}</Typography>
                    </Box>
                  ))
                }
              </Box>
            </Box>
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
