import React, { FC } from 'react';

import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.png';

const ImageLogo: FC = () => {
  return <img className={styles.logoImage} src={logo} alt="Logo" />;
};

export default ImageLogo;
