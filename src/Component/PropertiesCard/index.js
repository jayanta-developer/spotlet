import { Box, TextField, Typography } from "@mui/material";

import buildingIcon from "../../Assets/images/properitiseImage/BildingIcon.png";
import FilmIcon from "../../Assets/images/properitiseImage/FlimBoxIcon.png";
import PersonIcon from "../../Assets/images/properitiseImage/PersonIcon.png";
import LocationIcon from "../../Assets/images/properitiseImage/locationIcon.png";
import verifyIcon from "../../Assets/images/image 24.png";
import borderHeartLogo from "../../Assets/images/border-heart.svg";
import GrayStar from "../../Assets/images/properitiseImage/GrayStar.png";
import Star from "../../Assets/images/star-48.png";

import RedCross from "../../Assets/images/red_cross.svg";

export const propertiesCard = (
  img,
  fBoxHText,
  fBoxSText,
  locationHeader,
  address,
  iconArray,
  remove,
  page
) => {
  return (
    <Box className="propertiesCard">
      <Box className={remove ? "removeText" : "removeNoneText"}>
        <img className="crossLogo" src={RedCross} />
        <Typography ml={1}>Remove</Typography>
      </Box>
      <Box className="imageBox">
        <img style={{ width: "100%", height: "100%" }} src={img} />
      </Box>
      <Box className="verifyTab">
        <img src={verifyIcon} />
        <Typography>Verified</Typography>
      </Box>
      <Box className="borderHeartLogo">
        <img src={borderHeartLogo} />
      </Box>
      <Box
        className={
          page == "compare" ? "logo_Box logo_BoxComparePage" : "logo_Box"
        }
      >
        {iconArray?.map((el) => (
          <img key={el} className="propertyCardMIcons" src={el} />
        ))}
        {/* <img src={buildingIcon} /> */}
      </Box>
      <Box className="CardTextBox">
        <Box className="cardText">
          <Typography className="cardText1stHeader">{fBoxHText}</Typography>
          <Box className="cardSubTextBox">
            <Typography className="cardSubText">{fBoxSText}</Typography>
            <Typography className="cardSubImr">/hr</Typography>
          </Box>
        </Box>

        <Box className="cardText cardText2nd">
          <Box className="cardStarBox">
            <img style={{ width: "14px", height: "14px" }} src={Star} />
            <img style={{ width: "14px", height: "14px" }} src={Star} />
            <img style={{ width: "14px", height: "14px" }} src={Star} />
            <img style={{ width: "14px", height: "14px" }} src={Star} />
            <img style={{ width: "16px", height: "16px" }} src={GrayStar} />
            <span>(0)</span>
          </Box>
          <Typography className="cardLocationHeader">
            {locationHeader}
          </Typography>
        </Box>
      </Box>
      <Box className="cardLocationBox">
        <img style={{ width: "10px", height: "14px" }} src={LocationIcon} />
        <span>{address}</span>
      </Box>
    </Box>
  );
};
