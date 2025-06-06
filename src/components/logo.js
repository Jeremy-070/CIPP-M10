import PropTypes from "prop-types";

export const Logo = (props) => {
  // Replace the base64 string with a path to your new logo in the public folder
  const i = "/Mach 10_Logo_White.png"; 
  
  // The original check for "LsS2ECuxvo" is removed as it's related to the old base64 string.
  // If you want to add a check for the new logo, you can implement it here.

  return <img src={i} alt="Logo" />;
};

Logo.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};
