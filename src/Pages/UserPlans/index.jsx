import React, { useState } from 'react'
import { Box, Typography, Radio } from '@mui/material';

import "./style.css";
import GrayStar from "../../Assets/images/properitiseImage/GrayStar.png";
import Star from "../../Assets/images/star-48.png";


//Component
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function UserPlans() {
  const [couponType, setCouponType] = useState('auto');


  const handleRadioChange = (event) => {
    setCouponType(event.target.value);
  };


  return (
    <>
      <NavBar />
      <Box className="userPlansContainer">
        <Box className="userPlansHeaderBox">
          <Typography className='userPlansHeader'>User profile - Plans</Typography>
          <Typography className='userPlansSubHeader'>Find your saved items and get ready to order them</Typography>
        </Box>
        <Box className="userPlansBox">
          <Box className="plansHederBox">
            <Box className="plansSubscriptionHeder">
              <Typography>Subscription Plans</Typography>
            </Box>
            <Box className="plansRadioBox">
              <label className='radioLabel' style={{ marginRight: "20px" }}>
                <Radio
                  sx={{
                    color: '#EA4335',
                    '&.Mui-checked': {
                      color: '#EA4335',
                    },
                  }}
                  name="couponType"
                  value="auto"
                  checked={couponType === 'auto'}
                  onChange={handleRadioChange}
                />
                <Typography className='radioLabelText PlansRadioLabelText'>Auto Renewal</Typography>
              </label>
              <label className='radioLabel'>
                <Radio
                  sx={{
                    color: '#EA4335',
                    '&.Mui-checked': {
                      color: '#EA4335',
                    },
                  }}
                  name="couponType"
                  value="manual"
                  checked={couponType === 'manual'}
                  onChange={handleRadioChange}
                />
                <Typography className='radioLabelText PlansRadioLabelText'>Manual Renewal</Typography>
              </label>
            </Box>
          </Box>

          <Box className="plansInfoBox">
            <Box className="plansInfoItem">
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>SubscriptionsLocation ID</Typography>
                <Typography className='plansSId'>#SPEED41606</Typography>
              </Box>
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Plan Name</Typography>
                <Typography className='plansStandard'>Standard Plan</Typography>
              </Box>
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Expires On</Typography>
                <Typography className='plansExpires'>08/11/2023        9:30 am</Typography>
              </Box>
            </Box>


            <Box className="plansInfoItem">
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Location Name</Typography>
                <Typography className='plansExpires'>Coworking Space: Serendipity Labs</Typography>
              </Box>
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Paid on</Typography>
                <Typography className='plansExpires'>08/11/2023        9:30 am</Typography>
              </Box>
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Status</Typography>
                <Typography className='plansActive'>Active</Typography>
              </Box>

            </Box>
            <Box className="plansInfoItemSecond">
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Address</Typography>
                <Typography className='plansAddress'>Maruthi Nagar, Hyderabad</Typography>
              </Box>
              <Box className="plansInfoTextBox ItemSecondM">
                <Typography className='plansInfoLabel'>Paid amount</Typography>
                <Typography className='plansPaidAmount'>INR 24,999/Per annum</Typography>
              </Box>
            </Box>
            <Box className="plansInfoItemSecond">
              <Box className="plansInfoTextBox">
                <Typography className='plansInfoLabel'>Ratings</Typography>
                <Box className="rattingStartBox">
                  <Box className="cardStarBox">
                    <img style={{ width: "14px", height: "14px" }} src={Star} />
                    <img style={{ width: "14px", height: "14px" }} src={Star} />
                    <img style={{ width: "14px", height: "14px" }} src={Star} />
                    <img style={{ width: "14px", height: "14px" }} src={Star} />
                    <img style={{ width: "16px", height: "16px" }} src={GrayStar} />
                    <span>(0)</span>
                  </Box>
                </Box>
              </Box>
              <Box className="plansInfoTextBox ItemSecondM">
                <Typography className='plansInfoLabel'>Activated Date</Typography>
                <Typography className='plansExpires'>08/11/2023        9:30 am</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="placeBtnBox">
            <Box className="plansUpgradeBtn">
              <Typography>Upgrade Plan</Typography>
            </Box>
          </Box>


        </Box>

      </Box>
      <Footer />
    </>
  )
}
