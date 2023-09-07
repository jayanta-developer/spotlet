import React from 'react';
import { Box, Typography } from '@mui/material'
import { Link } from "react-router-dom";

import "./footer.css"
import spotlet from "../../Assets/images/spotlet-name-logo.svg";
import RightArrow from "../../Assets/images/arrowRight.png"

import FacebookIcon from "../../Assets/images/FooterFacebook.png"
import TwitterIcon from "../../Assets/images/FooterTwitter.png"
import LinkedinIcon from "../../Assets/images/FooterLinkedin.png"
import InstgramIcon from "../../Assets/images/FooterInstgram.png"
import PinterestIcon from "../../Assets/images/FooterPinterest.png"
import YouTubeIcon from "../../Assets/images/FooterYouTube.png"



export default function Footer() {
  return (
    <>
      <Box className="footer">

        <Box className="footerMainBody">
          <Box className="footerBox">
            <Box className="footerItem footerCologos">
              <img style={{ width: "138px", height: "24px", marginBottom: "20px" }} src={spotlet} />
              <Typography className='footerLogoSubText'>
                SpotLet is a platform where hosts, guests, clients and customers come together to find their dream spaces. It’s a collaboration of ideas, places and people to create beautiful moments and memories.
              </Typography>
            </Box>


            <Box className="footerItem">
              <Typography className='footerItemHeader'>
                COMPANY
              </Typography>
              <Box className="footerSubItem">
                <Box className="footerSubText">
                  <Link className="linkTag" to={"http://localhost:3000/aboutUs"}>
                    <img className='RightArrow' src={RightArrow} />
                    <Typography>About Us</Typography>
                  </Link>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Careers</Typography>
                </Box>
                <Box className="footerSubText">
                  <Link className="linkTag" to={"http://localhost:3000/blog/Details"}>
                    <img className='RightArrow' src={RightArrow} />
                    <Typography>Blogs</Typography>
                  </Link>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>SpotLet Go</Typography>
                </Box>

              </Box>
            </Box>
            <Box className="footerItem">
              <Typography className='footerItemHeader'>
                HOST
              </Typography>
              <Box className="footerSubItem">
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>List Your Space</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Community</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Resource Center</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Guidelines</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Photography</Typography>
                </Box>

              </Box>
            </Box>
            <Box className="footerItem">
              <Typography className='footerItemHeader'>
                EXPLORE
              </Typography>
              <Box className="footerSubItem">
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Activities</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Location</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Knowledge Base</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography> Affiliate</Typography>
                </Box>

              </Box>
            </Box>
            <Box className="footerItem">
              <Typography className='footerItemHeader'>
                SUPPORT
              </Typography>
              <Box className="footerSubItem">
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Help Center</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Cancellation</Typography>
                </Box>
                <Box className="footerSubText">
                  <Link className="linkTag" to={"http://localhost:3000/Privacy-Policy"}>
                    <img className='RightArrow' src={RightArrow} />
                    <Typography>Privacy Policy</Typography>
                  </Link>
                </Box>
                <Box className="footerSubText">
                  <Link className="linkTag" to={"http://localhost:3000/Terms-and-Conditions"}>
                    <img className='RightArrow' src={RightArrow} />
                    <Typography>Terms and Conditions</Typography>
                  </Link>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Trust and Safety</Typography>
                </Box>
                <Box className="footerSubText">
                  <img className='RightArrow' src={RightArrow} />
                  <Typography>Disclaimer</Typography>
                </Box>

              </Box>
            </Box>



          </Box>
        </Box>
        <Box className="footerSubBody">
          <Box className="RightsBox">
            <Typography>@2023 Spotlet. All rights Reserved.</Typography>
          </Box>

          <Box className="socialMediaBox">
            <a href="https://www.facebook.com/SpotLetIN" target="_blank"><img src={FacebookIcon} /></a>
            <a href="https://twitter.com/SpotLetIN" target="_blank"><img src={TwitterIcon} /></a>
            <a href="https://www.linkedin.com/company/spotletin/" target="_blank"><img src={LinkedinIcon} /></a>
            <a href="https://www.instagram.com/spotletin/" target="_blank"><img src={InstgramIcon} /></a>
            <a href="https://in.pinterest.com/SpotLetIN/" target="_blank"><img src={PinterestIcon} /></a>
            <a href="https://www.youtube.com/@spotlet" target="_blank"><img src={YouTubeIcon} /></a>

          </Box>
        </Box>

      </Box>

    </>
  )
}
