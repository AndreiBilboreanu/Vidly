import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  library.add(faFacebook, faTwitter, faGoogle);
  return (
    <div className="row socialRow">
      <FontAwesomeIcon icon={faFacebook} className="col-sm socialMediaIcons" />
      <FontAwesomeIcon icon={faTwitter} className="col-sm socialMediaIcons" />
      <FontAwesomeIcon icon={faGoogle} className="col-sm socialMediaIcons" />
      <FontAwesomeIcon icon={faYoutube} className="col-sm socialMediaIcons" />
    </div>
  );
};

export default SocialMedia;
