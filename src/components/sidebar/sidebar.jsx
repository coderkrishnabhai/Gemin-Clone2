import React, { useState } from "react";
import "./sidebar.css";

import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";

const sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <IoMdMenu className="menu-icon" onClick={() => setExtended(prev => !prev)} />
        </div>
        <div className="new-chat">
          <FaPlus className="plus-icon" />
          {extended ? <p className="new-chat-text">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-text">Recent</p>
            <div className="recent-div">
              <MdOutlineMessage className="recent-icon" />
              <p className="recent-text1">What is react ?</p>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <div className="bottom">
          <div className="help-div">
            <MdQuestionMark className="help-icon" />
            {extended ? <p className="help-text">Help</p> : null}
          </div>
          <div className="activity-div">
            <MdOutlineHistory className="activity-icon" />
            {extended ? <p className="activity-text">Activity</p> :null}
          </div>
          <div className="setting-div">
            <IoSettingsOutline className="setting-icon" />
           {extended ? <p className="setting-text">Setting</p> :null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
