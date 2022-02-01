import React, { FC } from "react";

import FormWrapper from "components/common/FormWrapper";
import AuthForm from "components/common/AuthForm";

const ResetPassword: FC = () => {
  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <FormWrapper>
      <AuthForm isReset buttonName="Reset Password" onFinish={handleFinish} />
    </FormWrapper>
  );
};

export default ResetPassword;
