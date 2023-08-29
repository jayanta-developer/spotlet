import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./style.css"

import SearchIcon from '../../Assets/images/search-normal.svg';
import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg"
import Pimage3 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg"
import Pimage4 from "../../Assets/images/properitiseImage/WhatsApp Image 2023-07-15 at 12.29.22.jpeg"

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";
import upDownArrow from "../../Assets/images/UpdownArrow.svg"
import plusIcon from "../../Assets/images/plassIcon.svg"
import whiteCross from "../../Assets/images/whiteCross.svg"




//Components
import NavBar from '../NavBar';
import Footer from "../Footer";
import { propertiesCard } from "../../Component/PropertiesCard"
import ProductList from "../../Component/PropertiesCard/ProductList"


export default function Favorites() {
  const navigate = useNavigate();
  const remove = false;
  const compare = true;
  const productsPerPage = 12;

  const [createListPupup, setCreateListPupUp] = useState(false)
  const [showPopup, setShowPopup] = useState(false);





  const products = [
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Sri Ram Nagar Colony",
      iconArray: [buildingIcon, PersonIcon],
      remove,
      compare,
      bottomM: "10px"
    }

  ]

  const createListPupUp = () => {
    return (
      <Box sx={{ display: createListPupup ? "block" : "none" }} className="createListPopUp">
        <Box className="listBoxHeader">
          <img
            style={{ width: "100px", height: "100px" }}
            className='whiteCrossImage pointer'
            src={whiteCross}
            onClick={() => {
              setCreateListPupUp(false)
              setShowPopup(false)
            }}
          />
          <Typography className='listHeaderText'>Create a New list</Typography>
          <Typography className='listSubText'>Create a list around a project, a topic or for inspiration.</Typography>
        </Box>
        <Box mt={3} className="listNameBox">
          <Typography mb={2}>List Name</Typography>
          <TextField className='listNameInput' placeholder='Favorites  List 1' />

        </Box>
        <Box mt={3} className="listDescriptionBox">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography className=''>Description</Typography>
            <Typography mb={2}>(Optional)</Typography>
          </Box>
          <TextField className='descriptionInput' />
        </Box>
        <Box className="listButtonBox">
          <Box onClick={() => {
            setCreateListPupUp(false)
            setShowPopup(false)
          }}
            className="grayCancelBtn pointer">
            <Typography>Cancel</Typography>
          </Box>
          <Box onClick={navigate("/favoritesList")} ml={3} className="ListCreateBtn pointer">
            <Typography>Create List</Typography>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <NavBar />
      <Box className="favoritesMainContainer">
        {showPopup && <div className="popupBackdrop"></div>}
        {createListPupUp()}
        <Box className="favoritesContainer">
          <Box className="favoritesHeader">

            <Box className="naveFirstBox">
              <Box className="favoritesHeaderTextBox  headerItems">
                <Typography className='favoritesHeaderText'>Favorites</Typography>
                <Typography className='favoritesSubHeader'>Find your saved items and get ready to order them</Typography>
              </Box>


              <Box className="favoritesHeaderSearchBar headerItems">
                <Box className="search_Bar">
                  <Box className="searchField">
                    <img className='pointer' style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
                    <TextField className='searchInput' sx={{ width: "100%" }} placeholder='Search favorites....' />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="NavSecondBox">
              <Box className="favoritesHeaderSortBy headerItems">
                <Box className="storyButton pointer">
                  <Typography mr={2}>Sort by</Typography>
                  <img src={upDownArrow} />
                </Box>
              </Box>

              <Box className="favoritesHeaderSortBy headerItems">
                <Box onClick={() => {
                  setCreateListPupUp(true)
                  setShowPopup(true)
                }} className="CreateListBtn storyButton pointer">
                  <Typography mr={1}>Create List</Typography>
                  <img src={plusIcon} />
                </Box>
              </Box>
              <Box className="favoritesHeaderCompare headerItems">
                <Box className="compareButton pointer">
                  <Typography>Compare properties</Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          <Box className="favoriteContentBox">
            <ProductList productsPerPage={productsPerPage} products={products} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
