import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import "./style.css";

import OptionIcon from "../../Assets/images/FavoritesCardOptionIcon.svg"
import FavoritesCardCover from "../../Assets/images/favoritesCardCover.svg"

//Components
import NavBar from '../NavBar';
import Footer from "../Footer";

export default function FavoritesList() {
  const [cardOption, setCardOption] = useState(false)
  const [openCardIndex, setOpenCardIndex] = useState(-1);

  const toggleCardOption = (index) => {
    if (index === openCardIndex) {
      setOpenCardIndex(-1); // Close the currently open card
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };
  const isCardOpen = (index) => index === openCardIndex;


  const favoriteCard = (index) => {
    return (
      <Box key={index} className="favoritesCard pointer">
        <Box className="optionIcon" onClick={() => toggleCardOption(index)}>
          <img src={OptionIcon} />
        </Box>
        <Box className="favoritesCardCover">
          <img src={FavoritesCardCover} alt={`Favorite Card ${index}`} />
        </Box>
        <Box className="favoritesCardTest">
          <Typography className='FCardTitle'>Film Shooting</Typography>
          <Typography className='FCardDate'>Create on Aug 4, 2023</Typography>
        </Box>
        <Box sx={{ display: isCardOpen(index) ? "flex" : "none" }} className="favoritesOptionPupUP">
          <Box onClick={() => toggleCardOption(index)} className="FCardOptionItem FCardOptionItemB">
            <Typography>Edit listing</Typography>
          </Box>
          <Box onClick={() => toggleCardOption(index)} className="FCardOptionItem">
            <Typography>Delete</Typography>
          </Box>
        </Box>
      </Box>
    );

  }

  return (
    <>
      <NavBar />
      <Box className="favoritesListContainer">
        <Box className="favoritesListHeader">
          <Box className="favoritesListHeaderText">
            <Typography>All listings</Typography>
          </Box>
          <Box className="favoritesListAddBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50333 0C3.37037 0 5.45993e-06 3.36506 0 7.498C-1.01768e-05 11.631 3.37036 15 7.50333 15C11.6363 15 15 11.631 15 7.498C15 3.36506 11.6363 0 7.50333 0ZM7.49268 4.0805C7.58399 4.07942 7.67459 4.0967 7.7591 4.13131C7.8436 4.16592 7.92029 4.21716 7.98462 4.28198C8.04894 4.3468 8.09958 4.42388 8.13354 4.50865C8.1675 4.59342 8.18408 4.68415 8.1823 4.77545V6.8177H10.2245C10.4055 6.8177 10.5791 6.88958 10.707 7.01754C10.835 7.1455 10.9069 7.31904 10.9069 7.5C10.9069 7.68096 10.835 7.8545 10.707 7.98246C10.5791 8.11042 10.4055 8.1823 10.2245 8.1823H8.1823V10.2245C8.1823 10.4055 8.11042 10.5791 7.98246 10.707C7.8545 10.835 7.68096 10.9069 7.5 10.9069C7.31904 10.9069 7.1455 10.835 7.01754 10.707C6.88958 10.5791 6.8177 10.4055 6.8177 10.2245V8.1823H4.77545C4.59453 8.19159 4.41733 8.12865 4.28281 8.00731C4.14829 7.88598 4.06747 7.71618 4.05811 7.53527C4.04876 7.35435 4.11164 7.17713 4.23293 7.04257C4.35421 6.908 4.52398 6.82712 4.70489 6.8177C4.72839 6.81648 4.75195 6.81648 4.77545 6.8177H6.8177V4.77545C6.81594 4.68538 6.83206 4.59586 6.86511 4.51206C6.89816 4.42826 6.9475 4.35183 7.01026 4.28721C7.07303 4.22259 7.14798 4.17105 7.23078 4.13557C7.31358 4.10009 7.4026 4.08137 7.49268 4.0805Z" fill="#EA4335" />
            </svg>
            <Typography ml={2} className='favoritesRedAddBtn'>ADD LISTING</Typography>
          </Box>
        </Box>
        <Box className="favoriteListItemBox">
          {favoriteCard(0)}
          {favoriteCard(1)}
          {favoriteCard(2)}
          {favoriteCard(3)}
          {favoriteCard(4)}
          {favoriteCard(5)}
          {favoriteCard(6)}
          {favoriteCard(7)}
        </Box>
      </Box>
      <Footer />

    </>
  )
}
