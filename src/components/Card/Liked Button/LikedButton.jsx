import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./LikedButton.module.scss";

// definitely better way to do this, would invest time if not on time constraint

const likedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"
    />
  </svg>
);

const unlikedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M221.6 58.38a56.06 56.06 0 0 0-79.12-.08L128 71.78L113.52 58.3a56 56 0 0 0-79.15 79.25l89.36 90.66a6 6 0 0 0 8.54 0l89.33-90.62a56 56 0 0 0 0-79.21Zm-8.52 70.75L128 215.45L42.89 129.1a44 44 0 0 1 62.22-62.23a1.07 1.07 0 0 0 .16.14l18.64 17.36a6 6 0 0 0 8.18 0L150.73 67a1.07 1.07 0 0 0 .16-.14a44 44 0 1 1 62.19 62.26Z"
    />
  </svg>
);

const LikedButton = ({ likes, updateLikes }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = (event) => {
    setLiked(!liked);

    liked
      ? updateLikes((likes) => (likes -= 1))
      : updateLikes((likes) => (likes += 1));
  };

  return liked ? (
    <footer className={styles.footer}>
      <button onClick={handleClick} className={styles.buttonLiked}>
        {likedIcon}
      </button>
      <div>{likes}</div>
    </footer>
  ) : (
    <footer className={styles.footer}>
      <button onClick={handleClick} className={styles.buttonUnliked}>
        {unlikedIcon}
      </button>
      <div>{likes}</div>
    </footer>
  );
};

LikedButton.propTypes = {
  likes: PropTypes.number.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default LikedButton;
