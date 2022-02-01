import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

import ImageLogo from "../../../assets/images/logo.png";
// import FormWrapper from "../FormWrapper";

import styles from "./styles.module.scss";

interface Props {
  onFinish: (values: any) => void;
  buttonName: string;
  isReset?: boolean;
}

const AuthForm: FC<Props> = ({ onFinish, buttonName, isReset }) => {
  console.log("AuthForm");

  return (
    <Form className={styles.form_reset} onFinish={onFinish}>
      <FormItem className={styles.formItem}>
        <img src={ImageLogo} alt="Logo" className={styles.logoImage} />
      </FormItem>

      <Form.Item
        className={styles.formItem}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className={styles.formInput} placeholder="Username" />
      </Form.Item>

      {!isReset && (
        <Form.Item
          className={styles.formItem}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className={styles.formInput} placeholder="Password" />
        </Form.Item>
      )}

      <Form.Item className={styles.formItem}>
        <Button className={styles.formButton} type="primary" htmlType="submit">
          {buttonName}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
