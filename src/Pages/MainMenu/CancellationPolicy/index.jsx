import { Box, Typography } from '@mui/material'
import React from 'react'
import "./policy.css"
import "../../Overview/overview.css"


import cancellPolicyIcon from "../../../Assets/images/cancellPolicy.png"

export default function CancellationPolicy({ Cancellation }) {
  return (
    <>
      <Box ref={Cancellation} className="mainItemBox cancellationBox">
        <Box className="featuresHeader">
          <Box ml={2} mr={2} className="descriptionIconBox">
            <img style={{ width: "100%" }} src={cancellPolicyIcon} />
          </Box>
          <Typography className='descriptionHeaderText'>Cancellation Policy</Typography>
          <Box sx={{ paddingLeft: "39.5%" }} className="seeMoreBtn">
            <Typography pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>
        <Box className="cancelTextBox">
          <Typography>If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without any penalties or charges by calling us or informing us in advance. You will receive a full refund of any fees paid for this particular service. If for any reason you wish</Typography>

        </Box>

      </Box>
    </>
  )
}
