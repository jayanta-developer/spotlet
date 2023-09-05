import React, { useState } from 'react';
import { Box, TextField, Typography, Radio } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "./style.css"

import downArrowFill from "../../Assets/images/DownArrowfill.svg"

//Component 
import NavBar from '../NavBar';
import Footer from '../Footer';


export default function CreateCoupon() {
  const [couponType, setCouponType] = useState('single');
  const [couponPopUp, setCouponPopUp] = useState(false)
  const [couponVal, setCouponVal] = useState()

  const coupon_Type = ["1GR589P87IUY8956", "1GR439POIUY8956", "1GR589P6GY8956", "1GR079POIUY8956"]

  const handleRadioChange = (event) => {
    setCouponType(event.target.value);
  };

  const handelCouPonType = (e) => {
    setCouponVal(e.target.innerText)
    setCouponPopUp(false)
  }

  return (
    <>
      <NavBar />
      <Box className="couponContainer">
        <Box className="CreateCouponBox">
          <Box className="couponNavBar">
            <Typography>Creating a new coupon</Typography>
          </Box>
          <Box className="CouponFB FirstInnerBox">

            <Box className="cupInputBox couponNameBox">

              <Box className="coupon couponNameInputFieldBox">
                <Typography className='InputLabelText'>Coupon Name</Typography>
                <TextField placeholder='Enter your coupon name' />
              </Box>
              <Box className="coupon couponTypeInputFieldBox">
                <Typography className='InputLabelText'>Coupon Type</Typography>
                <TextField placeholder='Enter coupon type' value={couponVal} />
                <img onClick={() => setCouponPopUp(!couponPopUp)} src={downArrowFill} className='CouponTypeDArrow' />
                {/* drop down */}
                <Box sx={{ display: couponPopUp ? "flex" : "none" }} className="CouponTypeDBox">
                  {
                    coupon_Type?.map((el) => (
                      <Box key={el} onClick={handelCouPonType} className="CDItems">
                        <Typography>{el}</Typography>
                      </Box>
                    ))
                  }
                </Box>
              </Box>
              <Box className="coupon couponMinimumBookingInputFieldBox">
                <Typography className='InputLabelText'>Minimum booking</Typography>
                <TextField placeholder='Minimum booking' />
              </Box>

            </Box>

            <Box className="cupInputBox couponIdBox">

              <Box className="coupon couponIdInputFieldBox">
                <Typography className='InputLabelText'>Coupon ID</Typography>
                <TextField placeholder='1GR589POIUY8956' />
              </Box>
              <Box className="coupon couponNameInputFieldBox">
                <TextField placeholder='Enter your coupon name' />
              </Box>
              <Box className="coupon couponActivationDateInputFieldBox">
                <Typography className='InputLabelText'>Activation Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Box>

            </Box>

            <Box className="cupInputBox couponExpiryBox">
              <Box className="coupon couponActivationDateInputFieldBox">
                <Typography className='InputLabelText'>Expiry Date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Box>


            </Box>
          </Box>


          <Box className="CouponFB SecondInnerBox">
            <Box className="SecondRadioBox">
              <label className='radioLabel' style={{ marginRight: "20px" }}>
                <Radio
                  sx={{
                    color: '#EA4335',
                    '&.Mui-checked': {
                      color: '#EA4335',
                    },
                  }}
                  name="couponType"
                  value="single"
                  checked={couponType === 'single'}
                  onChange={handleRadioChange}
                />
                <Typography className='radioLabelText'>Single-Usage Coupons</Typography>
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
                  value="multi"
                  checked={couponType === 'multi'}
                  onChange={handleRadioChange}
                />
                <Typography className='radioLabelText'>Multi-Usage Coupons</Typography>
              </label>
            </Box>

            <Box className="SecondFieldBox">
              <Box className="cupInputBox couponIdBox">
                <Box className="coupon couponBookingIDInputFieldBox ">
                  <Typography className='InputLabelText'>Specific to Booking ID</Typography>
                  <TextField placeholder='1GR589POIUY8956' />
                </Box>
              </Box>
              <Box className="cupInputBox couponIdBox">
                <Box className="coupon couponLocationIDInputFieldBox  ">
                  <Typography className='InputLabelText'>Specific to Location ID</Typography>
                  <TextField placeholder='1GR589POIUY8956' />
                </Box>
              </Box>
              <Box className="cupInputBox couponIdBox">
                <Box className="coupon couponEmailIDInputFieldBox ">
                  <Typography className='InputLabelText'>Specific to User Email ID</Typography>
                  <TextField placeholder='info@ert.com' />
                </Box>
              </Box>

            </Box>
            <Box className="CouponButtonBox">
              <Box className="couponCancelBtn pointer">
                <Typography>Cancel</Typography>
              </Box>

              <Box className="couponCodeBtn pointer">
                <Typography>Generate unique coupon code</Typography>
              </Box>
            </Box>


          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
