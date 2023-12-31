import React from 'react'
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./style.css"

import Pimage1 from "../../Assets/images/properitiseImage/2021-10-23.jpg"
import Pimage2 from "../../Assets/images/properitiseImage/Banquet-Hall-Gallery-15.jpeg"
import Pimage3 from "../../Assets/images/properitiseImage/IMG-20221120-WA0148.jpg"
import Pimage4 from "../../Assets/images/properitiseImage/WhatsApp Image 2023-07-15 at 12.29.22.jpeg"

import starYIcon from ".././../Assets/images/star-48.png"
import starGrayIcon from ".././../Assets/images/GrayStar.png"

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";

import NavBar from '../NavBar';
import Footer from '../Footer';
import { propertiesCard } from "../../Component/PropertiesCard"


export default function CompareProperties() {
  const navigate = useNavigate();
  const remove = true
  const page = "compare";

  const TinBox = (text1, text2, text3, text4) => {
    return (
      <Box className="tinBox">
        <Box className="tinBoxItem">
          <Typography mr={1}>{text1}</Typography>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#6D76B9" stroke="#6D76B9" stroke-width="0.2" />
          </svg>
        </Box>
      </Box>
    )
  }

  const WhiteBox = (text1, text2, text3, text4) => {
    return (
      <Box className="whiteBox">
        <Box className="whiteBoxItem">
          <Typography mr={1}>{text1}</Typography>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M9.50018 11.4679L9.50739 11.4683C9.61695 11.4739 9.72672 11.4645 9.83362 11.4401C9.92033 11.4186 10.0053 11.3907 10.0878 11.3564L10.2722 11.2799L10.223 11.4734L10.1139 11.903L10.1011 11.9533L10.0526 11.9718C9.72937 12.0947 9.4702 12.1895 9.27544 12.2559L9.27352 12.2566L9.27351 12.2566C9.04401 12.3297 8.8041 12.3647 8.56331 12.3602C8.21237 12.3807 7.8657 12.2741 7.58679 12.0599L7.58601 12.0593C7.34506 11.8705 7.20504 11.5808 7.2068 11.2747M9.50018 11.4679L7.67157 7.37497M9.50018 11.4679L9.49299 11.4686C9.36519 11.4805 9.23689 11.4531 9.12528 11.3901C9.05571 11.3133 9.02281 11.2098 9.03562 11.1066L9.03604 11.1067L9.03633 11.0974C9.03972 10.9887 9.0527 10.8805 9.07513 10.774L9.07518 10.774L9.07573 10.7709C9.09801 10.6456 9.12678 10.5215 9.16199 10.3992L9.56386 9.01653C9.56392 9.01635 9.56397 9.01616 9.56402 9.01598M9.50018 11.4679L9.56402 9.01598M7.2068 11.2747C7.20678 11.156 7.21508 11.0376 7.23166 10.9201L7.23175 10.9194C7.25179 10.7841 7.27861 10.65 7.31212 10.5175L7.31301 10.514L7.31307 10.514L7.7185 9.12395C7.71854 9.12381 7.71858 9.12367 7.71862 9.12353C7.75546 8.9929 7.78546 8.86944 7.80874 8.75307L7.8091 8.75127L7.80912 8.75128C7.83215 8.64624 7.84394 8.53902 7.8443 8.43146L7.84433 8.42081L7.8449 8.42087C7.85613 8.31866 7.82701 8.21632 7.7641 8.1355C7.65862 8.06931 7.53373 8.04049 7.40962 8.05394L7.39961 8.05502L7.3996 8.05452C7.30071 8.05527 7.20238 8.06989 7.1075 8.09792C6.99896 8.13186 6.90497 8.16207 6.82831 8.18874L6.65207 8.25006L6.69861 8.06936L6.81451 7.61936L6.82724 7.56992L6.87475 7.55123C7.14244 7.44597 7.39799 7.35542 7.64134 7.27965M7.2068 11.2747C7.2068 11.2745 7.2068 11.2744 7.2068 11.2743L7.3068 11.2749L7.2068 11.275C7.2068 11.2749 7.2068 11.2748 7.2068 11.2747ZM7.64134 7.27965C7.64151 7.2796 7.64168 7.27954 7.64185 7.27949L7.67157 7.37497M7.64134 7.27965C7.64119 7.2797 7.64103 7.27975 7.64087 7.2798L7.67157 7.37497M7.64134 7.27965C7.87026 7.20586 8.10887 7.16639 8.34935 7.16252M7.67157 7.37497C7.892 7.30387 8.12181 7.26596 8.3534 7.26247M8.34935 7.16252C8.34849 7.16258 8.34763 7.16263 8.34678 7.16269L8.3534 7.26247M8.34935 7.16252C8.3502 7.16251 8.35104 7.1625 8.35189 7.16248L8.3534 7.26247M8.34935 7.16252C8.69589 7.14015 9.0388 7.24437 9.31429 7.45587L9.31806 7.45876L9.31799 7.45885C9.54976 7.65493 9.67948 7.94594 9.67045 8.24932M8.3534 7.26247L9.67045 8.24932M9.56402 9.01598C9.6074 8.87302 9.63607 8.726 9.64959 8.57719L9.65 8.57723V8.56814C9.65 8.49595 9.6548 8.43471 9.65977 8.38295C9.66073 8.37297 9.66175 8.36289 9.66276 8.35286C9.66657 8.31532 9.67031 8.27841 9.67045 8.24932M9.56402 9.01598L9.6704 8.25082C9.67041 8.25032 9.67043 8.24982 9.67045 8.24932M9.99508 4.93114C9.79115 4.74432 9.52291 4.64358 9.24643 4.64997C8.97033 4.64435 8.70255 4.7449 8.49835 4.93088C8.11676 5.26095 8.07442 5.83784 8.40405 6.22011C8.43326 6.25399 8.46491 6.28567 8.49876 6.31492C8.9248 6.69537 9.56859 6.69532 9.99454 6.31475C10.3765 5.98167 10.4164 5.40205 10.0835 5.01978M9.99508 4.93114L10.0836 5.01986C10.0836 5.01983 10.0836 5.01981 10.0835 5.01978M9.99508 4.93114C10.0265 4.95861 10.0561 4.98823 10.0835 5.01978M9.99508 4.93114L10.0835 5.01978M7.81475 9.15109C7.85225 9.01814 7.88292 8.89202 7.9068 8.7727L7.81475 9.15109ZM8.5 0.9C4.30263 0.9 0.9 4.30263 0.9 8.5C0.9 12.6974 4.30263 16.1 8.5 16.1C12.6974 16.1 16.1 12.6974 16.1 8.5C16.1 4.30263 12.6974 0.9 8.5 0.9ZM8.5 15.2182C4.78964 15.2182 1.78183 12.2104 1.78183 8.5C1.78183 4.78964 4.78964 1.78183 8.5 1.78183C12.2104 1.78183 15.2182 4.78964 15.2182 8.5C15.2182 12.2104 12.2104 15.2182 8.5 15.2182Z" fill="#6D76B9" stroke="#6D76B9" stroke-width="0.2" />
          </svg>
        </Box>
      </Box>
    )
  }



  return (
    <>
      <NavBar />
      <Box className="compareContainer">

        <Box className="compareHeader">
          <Box className="compareBackButton">
            <Box onClick={() => navigate('/')} className="backButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M6.5375 14.4479C6.37917 14.4479 6.22084 14.3896 6.09584 14.2646L0.6625 8.83125C-0.220833 7.94792 -0.220833 6.49792 0.6625 5.61458L6.09584 0.18125C6.3375 -0.0604167 6.7375 -0.0604167 6.97917 0.18125C7.22084 0.422917 7.22084 0.822917 6.97917 1.06458L1.54583 6.49792C1.14583 6.89792 1.14583 7.54792 1.54583 7.94792L6.97917 13.3812C7.22084 13.6229 7.22084 14.0229 6.97917 14.2646C6.85417 14.3812 6.69584 14.4479 6.5375 14.4479Z" fill="#1A1E25" />
              </svg>
              <Typography ml={1}>Go back</Typography>
            </Box>
          </Box>

          <Box className="compareHederTextBox">
            <Typography className='compareHederText'>Compare properties</Typography>
            <Typography className='compareHederSubText'>Find your saved items and get ready to order them</Typography>
          </Box>

          <Box className="compareTopButtonBox">
            <Box className="differentButton pointer">
              <Typography>View only difference</Typography>
            </Box>

            <Box className="removeButton pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M0.537206 11C0.430962 11 0.327099 10.9685 0.238754 10.9095C0.150409 10.8505 0.0815511 10.7666 0.0408906 10.6684C0.000230078 10.5703 -0.0104066 10.4623 0.0103261 10.3581C0.0310587 10.2539 0.0822292 10.1582 0.157365 10.0831L10.0831 0.157335C10.1838 0.0565953 10.3205 0 10.4629 0C10.6054 0 10.742 0.0565953 10.8428 0.157335C10.9435 0.258076 11.0001 0.394709 11.0001 0.537177C11.0001 0.679645 10.9435 0.816278 10.8428 0.917018L0.917048 10.8427C0.867212 10.8927 0.808002 10.9323 0.742817 10.9593C0.677632 10.9863 0.607757 11.0001 0.537206 11Z" fill="#EA4335" />
                <path d="M10.4629 11C10.3924 11.0001 10.3225 10.9863 10.2573 10.9593C10.1921 10.9323 10.1329 10.8927 10.0831 10.8427L0.157365 0.917018C0.0566249 0.816278 2.95873e-05 0.679645 2.95873e-05 0.537177C2.95873e-05 0.394709 0.0566249 0.258076 0.157365 0.157335C0.258105 0.0565953 0.394738 0 0.537206 0C0.679675 0 0.816308 0.0565953 0.917048 0.157335L10.8428 10.0831C10.9179 10.1582 10.9691 10.2539 10.9898 10.3581C11.0105 10.4623 10.9999 10.5703 10.9592 10.6684C10.9186 10.7666 10.8497 10.8505 10.7614 10.9095C10.673 10.9685 10.5692 11 10.4629 11Z" fill="#EA4335" />
              </svg>
              <Typography ml={1.5}>Remove all</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="compareProjectBox">

          <Box className="CompareItem firstCompareItem">
            {TinBox("Event Type")}
            {WhiteBox("Price")}
            {TinBox("Location")}
            {WhiteBox("No. of Attendees")}
            {TinBox("Rating")}
            {WhiteBox("Minimum Hours")}
            {TinBox("Amenities")}
            {WhiteBox("Features")}
            {TinBox("Do’s & Don’ts")}
            {WhiteBox("Rules")}
            {TinBox("Opening hours")}
          </Box>



          <Box className="CompareItem">
            <Box className="property_Card">
              {propertiesCard(
                Pimage1,
                "#SWISS23808",
                "INR. 4000",
                "Cafe",
                "Puppalguda",
                [buildingIcon, PersonIcon],
                remove,
                page
              )}
            </Box>
            <Box className="property_items">
              {TinBox("Film Shooting ")}
              {WhiteBox("INR. 4000/hr")}
              {TinBox("Maruthi Nagar, Hyderabad")}
              {WhiteBox("100")}
              <Box className="ratingLogoBox">
                <Box mr={1} className="star_logo_box">
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starGrayIcon} />
                </Box>
                <Typography className='ratingLogoBoxText'>4.1 (484)</Typography>
              </Box>
              {WhiteBox("12 Hours")}
              {TinBox("Air Conditioning, Cable ready")}
              {WhiteBox("Trash removal, Lighting system")}
              {TinBox("Smoking not allowed, Pets not allowed  ")}
              {WhiteBox("Smoking not allowed, Pets not allowed  ")}
              {TinBox("6:00 AM - 6:00 PM")}
            </Box>
          </Box>
          <Box className="CompareItem">
            <Box className="property_Card">
              {propertiesCard(
                Pimage3,
                "#SUPRE95269",
                "INR. 4000",
                "GYM",
                "Hyderabad",
                [FilmIcon, buildingIcon, PersonIcon],
                remove,
                page
              )}
            </Box>
            <Box className="property_items">
              {TinBox("Corporate Event")}
              {WhiteBox("INR. 5000/hr")}
              {TinBox("Maruthi Nagar, Hyderabad")}
              {WhiteBox("500")}
              <Box className="ratingLogoBox">
                <Box mr={1} className="star_logo_box">
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starGrayIcon} />
                </Box>
                <Typography className='ratingLogoBoxText'>4.1 (484)</Typography>
              </Box>
              {WhiteBox("10 Hours")}
              {TinBox("Courtyard, Cable ready")}
              {WhiteBox("Photography, Green Screen Room")}
              {TinBox("Smoking not allowed, Pets not allowed  ")}
              {WhiteBox("Smoking not allowed, Pets not allowed  ")}
              {TinBox("6:00 AM - 6:00 PM")}
            </Box>
          </Box>
          <Box className="CompareItem">
            <Box className="property_Card">
              {propertiesCard(
                Pimage3,
                "#SUPRE95269",
                "INR. 4000",
                "GYM",
                "Sri Krishna Nagar",
                [FilmIcon, buildingIcon, PersonIcon],
                remove,
                page
              )}
            </Box>
            <Box className="property_items">
              {TinBox("Individual Event")}
              {WhiteBox("INR. 10,000/hr")}
              {TinBox("Maruthi Nagar, Hyderabad")}
              {WhiteBox("1000")}
              <Box className="ratingLogoBox">
                <Box mr={1} className="star_logo_box">
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starYIcon} />
                  <img src={starGrayIcon} />
                </Box>
                <Typography className='ratingLogoBoxText'>4.1 (484)</Typography>
              </Box>
              {WhiteBox("15 Hours")}
              {TinBox("Courtyard, Air Conditioning")}
              {WhiteBox("Private Entrance, Lighting system")}
              {TinBox("Smoking not allowed, Pets not allowed")}
              {WhiteBox("Smoking not allowed, Pets not allowed  ")}
              {TinBox("6:00 AM - 6:00 PM")}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
