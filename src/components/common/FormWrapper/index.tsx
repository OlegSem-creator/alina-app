import React, { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const FormWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={styles.formPage}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
