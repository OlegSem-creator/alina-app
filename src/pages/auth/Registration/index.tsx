import React, { FC } from "react";

import FormWrapper from "components/common/FormWrapper";
import AuthForm from "components/common/AuthForm";

const Registration: FC = () => {
  const handleFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <FormWrapper>
      <AuthForm buttonName="Registration" onFinish={handleFinish} />
    </FormWrapper>
  );
};

export default Registration;
