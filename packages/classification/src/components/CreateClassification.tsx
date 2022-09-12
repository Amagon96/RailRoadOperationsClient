import React from "react";
import { useForm } from "react-hook-form";
import { Classification } from "../../types/Classification";

const CreateClassification = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
};

export default CreateClassification;
