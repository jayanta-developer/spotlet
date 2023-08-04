import React, { useState, useEffect, useRef } from "react";

import { Box, Typography, Divider, Menu, MenuItem } from "@mui/material";
import "../../Pages/Home/home.css";
import "./style.css";

import redHeartP from "../../Assets/images/redHeartP.svg";
import redHeart from "../../Assets/images/redHartLogo.png";
import downArrowF from "../../Assets/images/DownArrowfill.svg";
import fileListSearch from "../../Assets/images/file-list-search.svg";
import Star1 from "../../Assets/images/Star 1.svg";
import copyIcon from "../../Assets/images/copyIcon.svg";
import MailIcon from "../../Assets/images/MailIcon.svg";
import MessageIcon from "../../Assets/images/messagesIcon.svg";
import WhatsAppIcon from "../../Assets/images/whatsappIcon.svg";
import FacebookIcon from "../../Assets/images/facebookIcon.svg";

export default function TopTabs() {
  const ref = useRef(null);
  const [printBox, setPrintBox] = useState(false);
  const [Favorite, setFavorite] = useState(false);
  const [shareBox, setShareBox] = useState(false);

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.id !== "Print" &&
      event.target.id !== "PrintImg" &&
      event.target.id !== "PrintText"
    ) {
      setPrintBox(false);
    }
    if (event.target.id === "printBox") {
      setPrintBox(true);
    }
  };

  const handleClickOutsideShareBox = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.id !== "share" &&
      event.target.id !== "shareText"
    ) {
      setShareBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutsideShareBox);
    return () => {
      // Remove the click event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutsideShareBox);
    };
  }, []);

  return (
    <>
      <Box className="topTabs">
        <Box className="top_TabBox">
          <Box
            onClick={() => setPrintBox(!printBox)}
            id="Print"
            className="topWhite_Tab pointer"
            sx={{
              background: printBox ? "#EA4335" : "#fff",
              color: printBox ? "white" : "black",
            }}
          >
            {printBox ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M9.5 2C9.5 1.46957 9.28929 0.960859 8.91421 0.585786C8.53914 0.210714 8.03043 0 7.5 0H4.5C3.96957 0 3.46086 0.210714 3.08579 0.585786C2.71071 0.960859 2.5 1.46957 2.5 2V2.5H9.5V2Z"
                  fill="white"
                />
                <path
                  d="M8 7.5H4C3.17157 7.5 2.5 8.17157 2.5 9V10.5C2.5 11.3284 3.17157 12 4 12H8C8.82843 12 9.5 11.3284 9.5 10.5V9C9.5 8.17157 8.82843 7.5 8 7.5Z"
                  fill="white"
                />
                <path
                  d="M9.5 3.5H2.5C1.8372 3.50079 1.20178 3.76444 0.73311 4.23311C0.264441 4.70178 0.000793929 5.3372 0 6V8C0.000639188 8.48588 0.142853 8.96105 0.40925 9.36739C0.675646 9.77374 1.05468 10.0936 1.5 10.288V9C1.50079 8.3372 1.76444 7.70178 2.23311 7.23311C2.70178 6.76444 3.3372 6.50079 4 6.5H8C8.6628 6.50079 9.29822 6.76444 9.76689 7.23311C10.2356 7.70178 10.4992 8.3372 10.5 9V10.288C10.9453 10.0936 11.3244 9.77374 11.5908 9.36739C11.8571 8.96105 11.9994 8.48588 12 8V6C11.9992 5.3372 11.7356 4.70178 11.2669 4.23311C10.7982 3.76444 10.1628 3.50079 9.5 3.5ZM9 5.5H8C7.86739 5.5 7.74022 5.44732 7.64645 5.35355C7.55268 5.25979 7.5 5.13261 7.5 5C7.5 4.86739 7.55268 4.74021 7.64645 4.64645C7.74022 4.55268 7.86739 4.5 8 4.5H9C9.13261 4.5 9.25979 4.55268 9.35355 4.64645C9.44732 4.74021 9.5 4.86739 9.5 5C9.5 5.13261 9.44732 5.25979 9.35355 5.35355C9.25979 5.44732 9.13261 5.5 9 5.5Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.5 2C9.5 1.46957 9.28929 0.960859 8.91421 0.585786C8.53914 0.210714 8.03043 0 7.5 0H4.5C3.96957 0 3.46086 0.210714 3.08579 0.585786C2.71071 0.960859 2.5 1.46957 2.5 2V2.5H9.5V2Z"
                  fill="black"
                />
                <path
                  d="M8 7.5H4C3.17157 7.5 2.5 8.17157 2.5 9V10.5C2.5 11.3284 3.17157 12 4 12H8C8.82843 12 9.5 11.3284 9.5 10.5V9C9.5 8.17157 8.82843 7.5 8 7.5Z"
                  fill="black"
                />
                <path
                  d="M9.5 3.5H2.5C1.8372 3.50079 1.20178 3.76444 0.73311 4.23311C0.264441 4.70178 0.000793929 5.3372 0 6V8C0.000639188 8.48588 0.142853 8.96105 0.40925 9.36739C0.675646 9.77374 1.05468 10.0936 1.5 10.288V9C1.50079 8.3372 1.76444 7.70178 2.23311 7.23311C2.70178 6.76444 3.3372 6.50079 4 6.5H8C8.6628 6.50079 9.29822 6.76444 9.76689 7.23311C10.2356 7.70178 10.4992 8.3372 10.5 9V10.288C10.9453 10.0936 11.3244 9.77374 11.5908 9.36739C11.8571 8.96105 11.9994 8.48588 12 8V6C11.9992 5.3372 11.7356 4.70178 11.2669 4.23311C10.7982 3.76444 10.1628 3.50079 9.5 3.5ZM9 5.5H8C7.86739 5.5 7.74022 5.44732 7.64645 5.35355C7.55268 5.25979 7.5 5.13261 7.5 5C7.5 4.86739 7.55268 4.74021 7.64645 4.64645C7.74022 4.55268 7.86739 4.5 8 4.5H9C9.13261 4.5 9.25979 4.55268 9.35355 4.64645C9.44732 4.74021 9.5 4.86739 9.5 5C9.5 5.13261 9.44732 5.25979 9.35355 5.35355C9.25979 5.44732 9.13261 5.5 9 5.5Z"
                  fill="black"
                />
              </svg>
            )}
            <Typography sx={{ marginLeft: "5px" }} id="PrintText">
              Print
            </Typography>
          </Box>

          {/* <Box
            onClick={() => setFavorite(!Favorite)}
            sx={{ width: "90px", background: "#fff" }}
            className="topWhiteTab pointer"
          >
            {Favorite ? (
              <img
                style={{ width: "16px", height: "16px" }}
                className="topTabLogo"
                src={redHeartP}
              />
            ) : (
              <img
                style={{ width: "16px", height: "15px" }}
                className="topTabLogo"
                src={redHeart}
              />
            )}
            <Typography>Favorite</Typography>
          </Box> */}

          <Box
            onClick={() => setShareBox(!shareBox)}
            className="topWhite_Tab pointer share_Box"
            sx={{
              background: shareBox ? "#EA4335" : "#fff",
              color: shareBox ? "#fff" : "black",
            }}
            id="share"
          >
            {shareBox ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
              >
                <path
                  d="M8.9375 7.78125C8.25823 7.78125 7.65964 8.12299 7.28367 8.6427L4.0331 6.94041C4.08707 6.75227 4.125 6.5573 4.125 6.35156C4.125 6.07252 4.06906 5.80723 3.97242 5.56322L7.37429 3.46959C7.75287 3.924 8.30933 4.21875 8.9375 4.21875C10.0748 4.21875 11 3.27255 11 2.10938C11 0.946195 10.0748 0 8.9375 0C7.80017 0 6.875 0.946195 6.875 2.10938C6.875 2.37743 6.92897 2.6317 7.0185 2.86777L3.60651 4.96753C3.22825 4.52663 2.67981 4.24219 2.0625 4.24219C0.925169 4.24219 0 5.18838 0 6.35156C0 7.51474 0.925169 8.46094 2.0625 8.46094C2.75298 8.46094 3.36167 8.10916 3.73622 7.57486L6.97609 9.27162C6.91641 9.46863 6.875 9.67383 6.875 9.89062C6.875 11.0538 7.80017 12 8.9375 12C10.0748 12 11 11.0538 11 9.89062C11 8.72745 10.0748 7.78125 8.9375 7.78125Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
              >
                <path
                  d="M8.9375 7.78125C8.25823 7.78125 7.65964 8.12299 7.28367 8.6427L4.0331 6.94041C4.08707 6.75227 4.125 6.5573 4.125 6.35156C4.125 6.07252 4.06906 5.80723 3.97242 5.56322L7.37429 3.46959C7.75287 3.924 8.30933 4.21875 8.9375 4.21875C10.0748 4.21875 11 3.27255 11 2.10938C11 0.946195 10.0748 0 8.9375 0C7.80017 0 6.875 0.946195 6.875 2.10938C6.875 2.37743 6.92897 2.6317 7.0185 2.86777L3.60651 4.96753C3.22825 4.52663 2.67981 4.24219 2.0625 4.24219C0.925169 4.24219 0 5.18838 0 6.35156C0 7.51474 0.925169 8.46094 2.0625 8.46094C2.75298 8.46094 3.36167 8.10916 3.73622 7.57486L6.97609 9.27162C6.91641 9.46863 6.875 9.67383 6.875 9.89062C6.875 11.0538 7.80017 12 8.9375 12C10.0748 12 11 11.0538 11 9.89062C11 8.72745 10.0748 7.78125 8.9375 7.78125Z"
                  fill="black"
                />
              </svg>
            )}

            <Typography id="shareText" sx={{ marginLeft: "5px" }}>
              Share
            </Typography>
          </Box>
        </Box>

        {/* Print Box */}
        <Box
          ref={ref}
          sx={{ display: printBox ? "block" : "none" }}
          className="Print_Box"
          id="printBox"
          onClick={(event) => event.stopPropagation()}
        >
          <Box pl={1.2} className="printHeader">
            <Typography className="printHeaderText">Print</Typography>
          </Box>

          <Box mt={1.9} className="printInputField">
            <Typography className="printInputFieldLabel">
              Destination
            </Typography>
            <Box className="PrintDropDown">
              <Typography className="PrintDropDownPlaceholder">
                Save as PDF
              </Typography>
              <img src={downArrowF} />
            </Box>
          </Box>
          <Box className="printInputField">
            <Typography className="printInputFieldLabel">Pages</Typography>
            <Box className="PrintDropDown">
              <Typography className="PrintDropDownPlaceholder">All</Typography>
              <img src={downArrowF} />
            </Box>
          </Box>
          <Box className="printInputField">
            <Typography className="printInputFieldLabel">Layout</Typography>
            <Box className="PrintDropDown">
              <Typography className="PrintDropDownPlaceholder">
                Potrait
              </Typography>
              <img src={downArrowF} />
            </Box>
          </Box>
          <Box className="printInputField bottomMargin">
            <Typography className="printInputFieldLabel">Color</Typography>
            <Box className="PrintDropDown">
              <Typography className="PrintDropDownPlaceholder">B&W</Typography>
              <img src={downArrowF} />
            </Box>
          </Box>

          <Box className="printButton">
            <Box className="PrintPreviewBtn pointer">
              <img src={fileListSearch} />
              <Typography>Print preview</Typography>
            </Box>
            <Box
              onClick={() => setPrintBox(false)}
              className="CancelBtn pointer"
            >
              <Typography className="redBtnText">Cancel</Typography>
            </Box>
            <Box className="saveBtn pointer">
              <Typography className="whiteBtnText">Save</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          ref={ref}
          sx={{ display: shareBox ? "block" : "none" }}
          className="Share_Box"
        >
          <Box className="shareBoxHeader">
            <Typography className="shareBoxHeaderText">
              Share this location
            </Typography>
            <Box className="shareSubHeader">
              <Typography className="shareId">#SPOTL83712</Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
              >
                <circle cx="7" cy="2" r="2" fill="#525151" />
              </svg>

              <img src={Star1} />
              <Typography className="shareBoxSubHeaderText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                >
                  <circle cx="7" cy="2" r="2" fill="#525151" />
                </svg>
                4.0
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                >
                  <circle cx="7" cy="2" r="2" fill="#525151" />
                </svg>
                Spotle
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                >
                  <circle cx="7" cy="2" r="2" fill="#525151" />
                </svg>
                Verified
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                >
                  <circle cx="7" cy="2" r="2" fill="#525151" />
                </svg>
                Exclusive
              </Typography>
            </Box>
          </Box>
          <Box className="shareItemBox">
            <Box className="shareItem">
              <img src={copyIcon} />
              <Typography className="shareItemText">Copy Link</Typography>
            </Box>
            <Box className="shareItem">
              <img src={MailIcon} />
              <Typography className="shareItemText">Email</Typography>
            </Box>
            <Box className="shareItem">
              <img src={MessageIcon} />
              <Typography className="shareItemText">Messages</Typography>
            </Box>
            <Box className="shareItem">
              <img src={WhatsAppIcon} />
              <Typography className="shareItemText">WhatsApp</Typography>
            </Box>
            <Box className="shareItem">
              <img src={FacebookIcon} />
              <Typography className="shareItemText">Facebook</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
