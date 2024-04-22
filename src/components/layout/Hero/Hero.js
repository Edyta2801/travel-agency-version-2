import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ variant = '', titleText, imageSrc,onError, ...otherProps }) => {
  const handleImageError = (e) => {
    if (onError) {
      onError(e);
    }
  };
  return (
    <div
      {...otherProps}
      className={
        styles.component +
        variant
          .split(' ')
          .map((name) => ' ' + (styles[name] || name))
          .join('')
      }
    >
      <h2 className={styles.title}>{titleText}</h2>
      <img className={styles.image} src={imageSrc} onError={handleImageError} />
    </div>
  );
};

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onError:PropTypes.func,
};

export default Hero;

