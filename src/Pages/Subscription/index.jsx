import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import "./style.css"
import basicPlan from "../../Assets/images/Plans/BasicPlanIcon.png"
import standardPlan from "../../Assets/images/Plans/standaraPlanIcon.png"
import premiumPlan from "../../Assets/images/Plans/spotlet/Group 5244.png"
import iIcon from "../../Assets/images/Plans/Iicon.svg"

//Component
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Subscription() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box className="subscriptionContainer">
        <Box className="subscriptionHeaderBox">
          <Box className="backButtonBox backButtonPosition">
            <Box onClick={() => navigate('/')} className="backButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M6.5375 14.4479C6.37917 14.4479 6.22084 14.3896 6.09584 14.2646L0.6625 8.83125C-0.220833 7.94792 -0.220833 6.49792 0.6625 5.61458L6.09584 0.18125C6.3375 -0.0604167 6.7375 -0.0604167 6.97917 0.18125C7.22084 0.422917 7.22084 0.822917 6.97917 1.06458L1.54583 6.49792C1.14583 6.89792 1.14583 7.54792 1.54583 7.94792L6.97917 13.3812C7.22084 13.6229 7.22084 14.0229 6.97917 14.2646C6.85417 14.3812 6.69584 14.4479 6.5375 14.4479Z" fill="#1A1E25" />
              </svg>
              <Typography ml={1}>Go back</Typography>
            </Box>
          </Box>
          <Box className="subscriptionHeader">
            <Typography>Our Subscription</Typography>
          </Box>
        </Box>

        <Box className="subscriptionPlanBox">

          <Box className="subCLabel">
            <Box className="planeItem tinBackground leftBorderRadius imgC">
              <Typography mr={1.5}>Property Name</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem WhiteBackground imgC">
              <Typography mr={1.5}>Image Upload Limit</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem tinBackground leftBorderRadius imgC">
              <Typography mr={1.5}>Video Upload</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>

            </Box>
            <Box className="planeItem WhiteBackground imgC">
              <Typography mr={1.5}>Search Priority</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem tinBackground leftBorderRadius imgC">
              <Typography mr={1.5}>SpotLet Support for Content<br />
                Writing for Professional approach</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem WhiteBackground imgC">
              <Typography mr={1.5}>Theme Options</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem tinBackground leftBorderRadius imgC ">
              <Typography mr={1.5}>Modifications allowed in Listing</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem WhiteBackground imgC">
              <Typography mr={1.5}>Social Media Promotion</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
            <Box className="planeItem tinBackground leftBorderRadius imgC">
              <Typography mr={1.5}>Discount In (%)</Typography>
              <img src={iIcon} />
              <span class="message">Text message for subscription plan</span>
            </Box>
          </Box>


          <Box className="basicPlan">
            <Box className="basicPlanHeader">
              <Box className="planHeaderLogo">
                <img style={{ width: "100%", height: "100%" }} src={basicPlan} />
              </Box>
              <Box className="planeHeaderText">
                <Typography>Basic Plan</Typography>
              </Box>
              <Box mb={5} className="planPrice">
                <Typography>Free</Typography>
              </Box>
              <Box className="StartButtonBox">
                <Box sx={{ background: "#000" }} className="getStartButton">
                  <Typography>Get Started</Typography>
                </Box>
              </Box>
            </Box>

            <Box className="planItems planItemsText">
              <Box className="planeItem tinBackground">
                <Typography variant='h7' className='responsiveLabelText' >Property Name -</Typography>
                <Typography mr={1.5}>1DER58TYUIOP</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabelText' >Image Upload Limit -</Typography>
                <Typography mr={1.5}>Up to 5 images</Typography>
              </Box>
              <Box className="planeItem tinBackground">
                <Typography variant='h7' className='responsiveLabelText' >Video Upload -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabelText' >Search Priority -</Typography>
                <Typography mr={1.5}>Lower Priority</Typography>
              </Box>
              <Box className="planeItem tinBackground">
                <Typography variant='h7' className='responsiveLabelText'>Professional approach -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabelText' >Theme Options -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem tinBackground">
                <Typography variant='h7' className='responsiveLabelText' >Modifications Listing -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabelText' >Social Media Promotion -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem tinBackground">
                <Typography variant='h7' className='responsiveLabelText' >Discount In (%) -</Typography>
                <Typography mr={1.5}>Free</Typography>
              </Box>
            </Box>

          </Box>


          <Box className="standardPlan">
            <Box className="basicPlanHeader">
              <Box className="planHeaderLogo">
                <img style={{ width: "100%", height: "100%" }} src={standardPlan} />
              </Box>
              <Box className="planeHeaderText">
                <Typography sx={{ color: "#EA4335" }}>Standard Plan</Typography>
              </Box>
              <Box className="planPrice">
                <Typography sx={{ color: "#EA4335" }}>INR 24,999</Typography>
              </Box>
              <Box className="planeHeaderText PerAnnumText">
                <Typography sx={{ color: "#EA4335" }}>Per annum</Typography>
              </Box>
              <Box mb={1.5} className="planeHeaderText lastPlanText">
                <Typography>Recommended plan</Typography>
              </Box>
              <Box className="StartButtonBox">
                <Box sx={{ background: "#EA4335" }} className="getStartButton">
                  <Typography>Get Started</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="planItems planItemsText">
              <Box className="planeItem ">
                <Typography variant='h7' className='responsiveLabel2ndText' >Property Name -</Typography>
                <Typography mr={1.5}>Coworking Space</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Image Upload Limit -</Typography>
                <Typography mr={1.5}>Up to 25 images</Typography>
              </Box>
              <Box className="planeItem ">
                <Typography variant='h7' className='responsiveLabel2ndText' >Video Upload -</Typography>
                <Typography mr={1.5}>Up to 10 Mb</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Search Priority -</Typography>
                <Typography mr={1.5}>Medium Priority</Typography>
              </Box>
              <Box className="planeItem ">
                <Typography variant='h7' className='responsiveLabel2ndText'>Professional approach -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Theme Options -</Typography>
                <Typography mr={1.5}>Not available</Typography>
              </Box>
              <Box className="planeItem ">
                <Typography variant='h7' className='responsiveLabel2ndText' >Modifications Listing -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Social Media Promotion -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem ">
                <Typography variant='h7' className='responsiveLabel2ndText' >Discount In (%) -</Typography>
                <Typography mr={1.5}>80%</Typography>
              </Box>
            </Box>

          </Box>
          <Box className="premiumPlan">
            <Box className="basicPlanHeader">
              <Box className="planHeaderLogo">
                <img style={{ width: "100%", height: "100%" }} src={premiumPlan} />
              </Box>
              <Box className="planeHeaderText">
                <Typography>Premium Plan</Typography>
              </Box>
              <Box className="planPrice">
                <Typography>INR 37,499</Typography>
              </Box>
              <Box className="planeHeaderText PerAnnumText">
                <Typography sx={{ color: "#EA4335" }}>Per annum</Typography>
              </Box>
              <Box mb={1.5} className="planeHeaderText lastPlanText">
                <Typography>Our most popular plan.</Typography>
              </Box>
              <Box className="StartButtonBox">
                <Box sx={{ background: "#000" }} className="getStartButton">
                  <Typography>Get Started</Typography>
                </Box>
              </Box>
            </Box>

            <Box className="planItems planItemsText">
              <Box className="planeItem tinBackground rightBorderRadius">
                <Typography variant='h7' className='responsiveLabel2ndText' >Property Name -</Typography>
                <Typography mr={1.5}>Coworking Space</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Image Upload Limit -</Typography>
                <Typography mr={1.5}>Up to 50 images</Typography>
              </Box>
              <Box className="planeItem tinBackground rightBorderRadius">
                <Typography variant='h7' className='responsiveLabel2ndText' >Video Upload -</Typography>
                <Typography mr={1.5}>Higher Priority</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Search Priority -</Typography>
                <Typography mr={1.5}>Higher Priority</Typography>
              </Box>
              <Box className="planeItem tinBackground rightBorderRadius">
                <Typography variant='h7' className='responsiveLabel2ndText'>Professional approach -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Theme Options -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem tinBackground rightBorderRadius">
                <Typography variant='h7' className='responsiveLabel2ndText' >Modifications Listing -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem WhiteBackground">
                <Typography variant='h7' className='responsiveLabel2ndText' >Social Media Promotion -</Typography>
                <Typography mr={1.5}>Yes</Typography>
              </Box>
              <Box className="planeItem tinBackground rightBorderRadius">
                <Typography variant='h7' className='responsiveLabel2ndText' >Discount In (%) -</Typography>
                <Typography mr={1.5}>80%</Typography>
              </Box>
            </Box>

          </Box>

        </Box>
      </Box>
      <Footer />
    </>
  )
}
