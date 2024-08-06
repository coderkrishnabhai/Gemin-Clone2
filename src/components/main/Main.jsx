import React, { useContext } from "react";
import "./Main.css";

import { MdFaceRetouchingNatural } from "react-icons/md";
import { LuImagePlus, LuSendHorizonal } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p className="gemini-logo">
          Gemini
          <IoMdArrowDropdown className="arrow-icon" />
        </p>
        <MdFaceRetouchingNatural className="user-logo" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Hello, Patron</span>
            </p>
            <p>How can I assist you today?</p>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <MdFaceRetouchingNatural className="face-logo" />
              <p className="face-logo2">{recentPromt} ? </p>
            </div>
            <div className="result-data">
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your problem"
              className="input"
            />
            <div className="icon-container">
              <LuImagePlus className="search-icon" />
              {/* <IoMicOutline className="search-icon" /> */}
              {input ? (
                <LuSendHorizonal onClick={onSent} className="search-icon" />
              ) : <LuSendHorizonal onClick={onSent} className="search-icon2" />}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
