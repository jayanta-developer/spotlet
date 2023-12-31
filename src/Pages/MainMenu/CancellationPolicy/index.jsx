import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import "./policy.css"
import "../../Overview/overview.css"


import cancellPolicyIcon from "../../../Assets/images/cancellPolicy.png"
import RedCross from "../../../Assets/images/RedCross.svg";


export default function CancellationPolicy({ Cancellation, setShowPopup }) {
  const [cancel, setCancel] = useState(false)



  return (
    <>
      <Box className="cancelBox">
        <Box ref={Cancellation} className="cancellationBox">
          <Box className="cancellationHeader">
            <Box ml={2} mr={2} className="descriptionIconBox">
              <img style={{ width: "100%" }} src={cancellPolicyIcon} />
            </Box>
            <Typography className='descriptionHeaderText'>Cancellation Policy</Typography>
          </Box>
          <Box className="cancelTextBox">
            <Typography>If for any reason you wish to cancel a service before your flight reservation or hotel booking were processed you can do so without any penalties or charges by calling us or informing us in advance. You will receive a full refund of any fees paid for this particular service. If for any reason you wish</Typography>
          </Box>
          <Box mb={1.3} className="seeMoreBtn">
            <Typography onClick={() => {
              setCancel(true)
              setShowPopup(true)
            }} pl={2} className='seeMoreText amenitiesSeeMoreBtn'>+ SEE MORE</Typography>
          </Box>
        </Box>

        <Box sx={{ display: cancel ? "block" : "none" }} className="cancelPopUpBox">
          <Box className="cancellationHeader">
            <Box ml={2} mr={2} className="descriptionIconBox">
              <img style={{ width: "100%" }} src={cancellPolicyIcon} />
            </Box>
            <Typography className='descriptionHeaderText'>Cancellation Policy</Typography>
            <Box className="descriptionIconBox cancelRedCrossMargin">
              <img onClick={() => {
                setCancel(false)
                setShowPopup(false)
              }} style={{ width: "100%", cursor: "pointer" }} src={RedCross} />
            </Box>
          </Box>
          <Box className="cancelTextBox CancelBoxScroll">
            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever.</Typography>
            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard dummy text ever since the 1500s, when an unknown printer took a & scrambled it to make a type specimen book. It has survived not only five centuries, galley of type. ake a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry s standard.</Typography>
          </Box>

        </Box>
      </Box>
    </>
  )
}
