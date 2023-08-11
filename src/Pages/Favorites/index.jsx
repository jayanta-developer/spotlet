import React, { useEffect } from 'react'
import { Box, Typography, TextField } from '@mui/material';
import { propertiesCard } from "../../Component/PropertiesCard"
import ProductList from "../../Component/PropertiesCard/ProductList"
import "./style.css"

import SearchIcon from '../../Assets/images/search-normal.svg';
import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"



//Components
import NavBar from '../NavBar';
import Footer from "../Footer";


export default function Favorites() {
  const productsPerPage = 12;

  const products = [
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
    {
      image: Pimage1,
      cardId: "#SWISS23808",
      price: "INR. 4000",
      location: "Cafe",
      subLocation: "Puppalguda, Sri Ram Nagar Colony"
    },
  ]

  return (
    <>
      <NavBar />
      <Box className="favoritesMainContainer">
        <Box className="favoritesContainer">
          <Box className="favoritesHeader">

            <Box className="favoritesHeaderTextBox  headerItems">
              <Typography className='favoritesHeaderText'>Favorites</Typography>
              <Typography className='favoritesSubHeader'>Find your saved items and get ready to order them</Typography>
            </Box>


            <Box className="favoritesHeaderSearchBar headerItems">
              <Box className="search_Bar">
                <Box className="searchField">
                  <img className='pointer' style={{ width: "22px", position: "relative", left: "44px", zIndex: "9" }} src={SearchIcon} />
                  <TextField className='searchInput' sx={{ width: "100%" }} placeholder='   Enter Location' />
                </Box>
              </Box>
            </Box>


            <Box className="favoritesHeaderSortBy headerItems">
              <Box className="storyButton">
                <Typography>Sort by</Typography>
              </Box>
            </Box>
            <Box className="favoritesHeaderCompare headerItems">
              <Box className="compareButton">
                <Typography>Compare properties</Typography>
              </Box>
            </Box>


          </Box>


          <Box className="favoriteContentBox">
            <Box className="menu_Box">
              <Box className="menuItemBox">
                <Box className="menuItem">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9886 1.01112C9.59463 1.01112 9.20453 1.08872 8.84055 1.23948C8.47657 1.39025 8.14585 1.61123 7.86728 1.8898C7.5887 2.16838 7.36773 2.49909 7.21696 2.86307C7.0662 3.22705 6.9886 3.61716 6.9886 4.01112C6.9886 4.40509 7.0662 4.79519 7.21696 5.15917C7.36773 5.52315 7.5887 5.85387 7.86728 6.13244C8.14585 6.41102 8.47657 6.632 8.84055 6.78276C9.20453 6.93352 9.59463 7.01112 9.9886 7.01112C10.7842 7.01112 11.5473 6.69505 12.1099 6.13244C12.6725 5.56983 12.9886 4.80677 12.9886 4.01112C12.9886 3.21547 12.6725 2.45241 12.1099 1.8898C11.5473 1.32719 10.7842 1.01112 9.9886 1.01112ZM12.3186 7.26112C12.8228 6.90297 13.2372 6.43277 13.529 5.88745C13.8209 5.34214 13.9823 4.73658 14.0006 4.11836C14.0189 3.50013 13.8936 2.88608 13.6345 2.32446C13.3754 1.76284 12.9896 1.26895 12.5074 0.881602C12.0253 0.494251 11.4598 0.223991 10.8556 0.0920606C10.2513 -0.0398702 9.62468 -0.0298781 9.02493 0.121252C8.42518 0.272382 7.86865 0.560532 7.39907 0.96306C6.92948 1.36559 6.55964 1.87153 6.3186 2.44112C5.99782 2.00539 5.58039 1.64995 5.09909 1.40275C4.61779 1.15554 4.08573 1.02328 3.5447 1.01638C3.00366 1.00947 2.4684 1.12809 1.98094 1.36292C1.49348 1.59776 1.06711 1.94242 0.73531 2.36982C0.403511 2.79722 0.175323 3.29573 0.0686686 3.82619C-0.0379854 4.35665 -0.0202006 4.90461 0.120626 5.42704C0.261453 5.94947 0.521486 6.43213 0.880301 6.83712C1.23912 7.24211 1.68694 7.55839 2.1886 7.76112C2.0686 7.98112 1.9886 8.24112 1.9886 8.51112V14.5111C1.9886 15.3411 2.6586 16.0111 3.4886 16.0111H11.4886C12.3186 16.0111 12.9886 15.3411 12.9886 14.5111V14.0811L15.1686 15.8911C15.2413 15.9517 15.3298 15.9904 15.4237 16.0027C15.5175 16.015 15.613 16.0004 15.6988 15.9606C15.7847 15.9208 15.8576 15.8574 15.9089 15.7779C15.9602 15.6983 15.9878 15.6058 15.9886 15.5111V7.51112C15.9878 7.41645 15.9602 7.32396 15.9089 7.24439C15.8576 7.16482 15.7847 7.10144 15.6988 7.06164C15.613 7.02183 15.5175 7.00723 15.4237 7.01953C15.3298 7.03183 15.2413 7.07053 15.1686 7.13112L12.9886 8.94112V8.51112C12.9886 7.99112 12.7286 7.53112 12.3186 7.26112ZM5.9386 7.01112C6.2086 6.75112 6.4286 6.46112 6.5986 6.13112C6.7986 6.46112 7.0586 6.75112 7.3486 7.01112H5.9486H5.9386ZM3.4886 8.01112C3.35599 8.01112 3.22881 8.0638 3.13505 8.15757C3.04128 8.25134 2.9886 8.37851 2.9886 8.51112V14.5111C2.9886 14.7911 3.2186 15.0111 3.4886 15.0111H11.4886C11.6212 15.0111 11.7484 14.9584 11.8422 14.8647C11.9359 14.7709 11.9886 14.6437 11.9886 14.5111V13.0111C11.9894 12.9165 12.017 12.824 12.0683 12.7444C12.1196 12.6648 12.1925 12.6014 12.2784 12.5616C12.3642 12.5218 12.4597 12.5072 12.5535 12.5195C12.6474 12.5318 12.7359 12.5705 12.8086 12.6311L14.9886 14.4411V8.58112L12.8086 10.3911C12.7359 10.4517 12.6474 10.4904 12.5535 10.5027C12.4597 10.515 12.3642 10.5004 12.2784 10.4606C12.1925 10.4208 12.1196 10.3574 12.0683 10.2779C12.017 10.1983 11.9894 10.1058 11.9886 10.0111V8.51112C11.9886 8.37851 11.9359 8.25134 11.8422 8.15757C11.7484 8.0638 11.6212 8.01112 11.4886 8.01112H3.4886ZM3.4886 7.01112C4.15164 7.01112 4.78753 6.74773 5.25637 6.27889C5.72521 5.81005 5.9886 5.17416 5.9886 4.51112C5.9886 3.84808 5.72521 3.2122 5.25637 2.74335C4.78753 2.27451 4.15164 2.01112 3.4886 2.01112C2.82556 2.01112 2.18967 2.27451 1.72083 2.74335C1.25199 3.2122 0.9886 3.84808 0.9886 4.51112C0.9886 5.17416 1.25199 5.81005 1.72083 6.27889C2.18967 6.74773 2.82556 7.01112 3.4886 7.01112Z" fill="#333333" />
                  </svg>
                  <Typography className='MenuMargin'>Film Shooting </Typography>
                </Box>
                <Box className="menuItem">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.96467 10.2728L9.93385 10.3122L7.80889 8.64903L9.96467 10.2728ZM9.96467 10.2728L9.93386 10.3122C10.5274 10.7766 10.8667 11.4739 10.8667 12.2257M9.96467 10.2728L10.8667 12.2257M10.8667 12.2257V15.1667C10.8667 16.3106 9.93564 17.2417 8.79167 17.2417H3.83333C2.68936 17.2417 1.75833 16.3106 1.75833 15.1667V12.2257C1.75833 11.4739 2.09832 10.7766 2.69116 10.3122C2.69116 10.3122 2.69116 10.3122 2.69117 10.3122L4.81537 8.64905L10.8667 12.2257ZM2.19247 9.67596L2.19247 9.67597C1.40334 10.2939 0.95 11.2236 0.95 12.2257V15.1667C0.95 16.7569 2.24314 18.05 3.83333 18.05H8.79167C10.3819 18.05 11.675 16.7569 11.675 15.1667V12.2757H11.6757V12.2257C11.6757 11.2236 11.2224 10.2939 10.4332 9.67597L10.4332 9.67595L8.30753 8.0128C8.30753 8.0128 8.30752 8.01279 8.30752 8.01279C7.13411 7.09407 5.49228 7.0941 4.31749 8.01278L4.31748 8.01279L2.19247 9.67596ZM14.1042 10.1583C13.8811 10.1583 13.7 10.3394 13.7 10.5625C13.7 10.7856 13.8811 10.9667 14.1042 10.9667H14.8125C15.0356 10.9667 15.2167 10.7856 15.2167 10.5625C15.2167 10.3394 15.0356 10.1583 14.8125 10.1583H14.1042ZM14.1042 13.8H14.8125C15.0356 13.8 15.2167 13.6189 15.2167 13.3958C15.2167 13.1727 15.0356 12.9917 14.8125 12.9917H14.1042C13.8811 12.9917 13.7 13.1727 13.7 13.3958C13.7 13.6189 13.8811 13.8 14.1042 13.8ZM11.2708 5.3H11.9792C12.2023 5.3 12.3833 5.11895 12.3833 4.89583C12.3833 4.67272 12.2023 4.49167 11.9792 4.49167H11.2708C11.0477 4.49167 10.8667 4.67272 10.8667 4.89583C10.8667 5.11895 11.0477 5.3 11.2708 5.3ZM14.1042 5.3H14.8125C15.0356 5.3 15.2167 5.11895 15.2167 4.89583C15.2167 4.67272 15.0356 4.49167 14.8125 4.49167H14.1042C13.8811 4.49167 13.7 4.67272 13.7 4.89583C13.7 5.11895 13.8811 5.3 14.1042 5.3ZM14.1042 8.13333H14.8125C15.0356 8.13333 15.2167 7.95228 15.2167 7.72917C15.2167 7.50605 15.0356 7.325 14.8125 7.325H14.1042C13.8811 7.325 13.7 7.50605 13.7 7.72917C13.7 7.95228 13.8811 8.13333 14.1042 8.13333ZM11.9792 7.325H11.2708C11.0477 7.325 10.8667 7.50605 10.8667 7.72917C10.8667 7.95228 11.0477 8.13333 11.2708 8.13333H11.9792C12.2023 8.13333 12.3833 7.95228 12.3833 7.72917C12.3833 7.50605 12.2023 7.325 11.9792 7.325ZM14.8125 0.95H11.2708C9.48584 0.95 8.03333 2.40251 8.03333 4.1875V6.3125C8.03333 6.53561 8.21439 6.71667 8.4375 6.71667C8.66061 6.71667 8.84167 6.53561 8.84167 6.3125V4.1875C8.84167 2.84803 9.93137 1.75833 11.2708 1.75833H14.8125C16.152 1.75833 17.2417 2.84803 17.2417 4.1875V14.8125C17.2417 16.152 16.152 17.2417 14.8125 17.2417H12.6875C12.4644 17.2417 12.2833 17.4227 12.2833 17.6458C12.2833 17.8689 12.4644 18.05 12.6875 18.05H14.8125C16.5975 18.05 18.05 16.5975 18.05 14.8125V4.1875C18.05 2.40251 16.5975 0.95 14.8125 0.95ZM6.3125 8.13192C6.83989 8.13192 7.36803 8.30469 7.80885 8.649L4.81545 8.64899C5.25699 8.30467 5.78513 8.13192 6.3125 8.13192ZM8.13333 14.1042V12.6875C8.13333 12.0741 7.63424 11.575 7.02083 11.575H5.60417C4.99076 11.575 4.49167 12.0741 4.49167 12.6875V14.1042C4.49167 14.7176 4.99076 15.2167 5.60417 15.2167H7.02083C7.63424 15.2167 8.13333 14.7176 8.13333 14.1042ZM7.02083 12.3833C7.18801 12.3833 7.325 12.5203 7.325 12.6875V14.1042C7.325 14.2713 7.18801 14.4083 7.02083 14.4083H5.60417C5.43699 14.4083 5.3 14.2713 5.3 14.1042V12.6875C5.3 12.5203 5.43699 12.3833 5.60417 12.3833H7.02083Z" fill="#333333" stroke="#333333" stroke-width="0.1" />
                  </svg>
                  <Typography className='MenuMargin'>Corporate Event</Typography>

                </Box>
                <Box className="menuItem">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.50003 10H1.00003V7C1.00003 6.4 1.40003 6 2.00003 6H4.00002C4.79567 6 5.55874 5.68393 6.12135 5.12132C6.68395 4.55871 7.00002 3.79565 7.00002 3C7.00002 2.20435 6.68395 1.44129 6.12135 0.87868C5.55874 0.31607 4.79567 0 4.00002 0C3.20438 0 2.44131 0.31607 1.8787 0.87868C1.3161 1.44129 1.00003 2.20435 1.00003 3C1.00003 3.8 1.30003 4.5 1.80003 5C1.30498 5.04975 0.846248 5.28223 0.513412 5.65205C0.180575 6.02187 -0.00246818 6.50247 2.51406e-05 7V10.5C2.51406e-05 10.8 0.200025 11 0.500025 11H2.50003C2.80003 11 3.00003 10.8 3.00003 10.5C3.00003 10.2 2.80003 10 2.50003 10ZM4.00002 1C4.53046 1 5.03917 1.21071 5.41424 1.58579C5.78931 1.96086 6.00002 2.46957 6.00002 3C6.00002 3.53043 5.78931 4.03914 5.41424 4.41421C5.03917 4.78929 4.53046 5 4.00002 5C3.46959 5 2.96088 4.78929 2.58581 4.41421C2.21074 4.03914 2.00003 3.53043 2.00003 3C2.00003 1.9 2.90002 1 4.00002 1ZM13.5 10H15V7C15 6.4 14.6 6 14 6H12C11.2044 6 10.4413 5.68393 9.87871 5.12132C9.3161 4.55871 9.00002 3.79565 9.00002 3C9.00002 2.20435 9.3161 1.44129 9.87871 0.87868C10.4413 0.31607 11.2044 0 12 0C12.7957 0 13.5587 0.31607 14.1213 0.87868C14.684 1.44129 15 2.20435 15 3C15 3.8 14.7 4.5 14.2 5C14.6951 5.04975 15.1538 5.28223 15.4866 5.65205C15.8195 6.02187 16.0025 6.50247 16 7V10.5C16 10.8 15.8 11 15.5 11H13.5C13.2 11 13 10.8 13 10.5C13 10.2 13.2 10 13.5 10ZM12 1C11.4696 1 10.9609 1.21071 10.5858 1.58579C10.2107 1.96086 10 2.46957 10 3C10 4.1 10.9 5 12 5C12.5305 5 13.0392 4.78929 13.4142 4.41421C13.7893 4.03914 14 3.53043 14 3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0392 1.21071 12.5305 1 12 1ZM11 8C11 8.8 10.7 9.5 10.2 10C10.6951 10.0497 11.1538 10.2822 11.4866 10.652C11.8195 11.0219 12.0025 11.5025 12 12V15.5C12 15.8 11.8 16 11.5 16H4.50002C4.20002 16 4.00002 15.8 4.00002 15.5V12C3.99753 11.5025 4.18057 11.0219 4.51341 10.652C4.84625 10.2822 5.30498 10.0497 5.80002 10C5.30002 9.5 5.00002 8.8 5.00002 8C5.00002 7.20435 5.3161 6.44129 5.8787 5.87868C6.44131 5.31607 7.20438 5 8.00002 5C8.79567 5 9.55874 5.31607 10.1213 5.87868C10.684 6.44129 11 7.20435 11 8ZM10 8C10 7.46957 9.78931 6.96086 9.41424 6.58579C9.03917 6.21071 8.53046 6 8.00002 6C7.46959 6 6.96088 6.21071 6.58581 6.58579C6.21074 6.96086 6.00002 7.46957 6.00002 8C6.00002 9.1 6.90002 10 8.00002 10C8.53046 10 9.03917 9.78929 9.41424 9.41421C9.78931 9.03914 10 8.53043 10 8ZM6.00002 11C5.40002 11 5.00002 11.4 5.00002 12V15H11V12C11 11.4 10.6 11 10 11H6.00002Z" fill="#333333" />
                  </svg>
                  <Typography className='MenuMargin'>Individual Event</Typography>
                </Box>
              </Box>
              <Box className="CreateListButton">
                <Typography>Create List</Typography>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50333 0C3.37037 0 5.45993e-06 3.36506 0 7.498C-1.01768e-05 11.631 3.37036 15 7.50333 15C11.6363 15 15 11.631 15 7.498C15 3.36506 11.6363 0 7.50333 0ZM7.49268 4.0805C7.58399 4.07942 7.67459 4.0967 7.7591 4.13131C7.8436 4.16592 7.92029 4.21716 7.98462 4.28198C8.04894 4.3468 8.09958 4.42388 8.13354 4.50865C8.1675 4.59342 8.18408 4.68415 8.1823 4.77545V6.8177H10.2245C10.4055 6.8177 10.5791 6.88958 10.707 7.01754C10.835 7.1455 10.9069 7.31904 10.9069 7.5C10.9069 7.68096 10.835 7.8545 10.707 7.98246C10.5791 8.11042 10.4055 8.1823 10.2245 8.1823H8.1823V10.2245C8.1823 10.4055 8.11042 10.5791 7.98246 10.707C7.8545 10.835 7.68096 10.9069 7.5 10.9069C7.31904 10.9069 7.1455 10.835 7.01754 10.707C6.88958 10.5791 6.8177 10.4055 6.8177 10.2245V8.1823H4.77545C4.59453 8.19159 4.41733 8.12865 4.28281 8.00731C4.14829 7.88598 4.06747 7.71618 4.05811 7.53527C4.04876 7.35435 4.11164 7.17713 4.23293 7.04257C4.35421 6.908 4.52398 6.82712 4.70489 6.8177C4.72839 6.81648 4.75195 6.81648 4.77545 6.8177H6.8177V4.77545C6.81594 4.68538 6.83206 4.59586 6.86511 4.51206C6.89816 4.42826 6.9475 4.35183 7.01026 4.28721C7.07303 4.22259 7.14798 4.17105 7.23078 4.13557C7.31358 4.10009 7.4026 4.08137 7.49268 4.0805Z" fill="#FBFBFB" />
                </svg>
              </Box>

            </Box>

            <Box className="CardBox">
              <ProductList productsPerPage={productsPerPage} products={products} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
