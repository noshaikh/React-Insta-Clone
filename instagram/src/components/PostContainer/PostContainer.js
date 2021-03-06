// import PropTypes from "prop-types";
import React from "react";
// import "./PostContainer.css";
import styled from "styled-components";
import Post from "./Post.js";
import PropTypes from "prop-types";

const Postcontainer = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
`;

const postContainer = props => {
  return (
    <div className="post-container">
      {props.toes.map(item => <Post butt={item} />)}
      {/* map through toes to make
      each butt prop an item */}
    </div>
  );
};

Postcontainer.propTypes = {
  toes: PropTypes.arrayOf(PropTypes.object)
};

export default postContainer;
