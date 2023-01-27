import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const SocialMedia = () => {
  return (
    <div className="row socialRow">
      <FontAwesomeIcon icon={faEnvelope} className="col-sm socialMediaIcons" />
      <FontAwesomeIcon icon={faPhone} className="col-sm socialMediaIcons" />
      <FontAwesomeIcon icon={faComments} className="col-sm socialMediaIcons" />
    </div>
  );
};

export default SocialMedia;
