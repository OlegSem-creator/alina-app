import React, { FC } from "react";

import FormWrapper from "components/common/FormWrapper";
import AuthForm from "components/common/AuthForm";

const Login: FC = () => {
  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <FormWrapper>
      <AuthForm buttonName="Log In" onFinish={handleFinish} />
    </FormWrapper>
  );
};

export default Login;
