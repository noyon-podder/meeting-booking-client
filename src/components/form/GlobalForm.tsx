/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ReactNode } from "react";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TGlobalFormProps = {
  children: ReactNode;
  onSubmit: (data: FieldValues) => void;
} & TFormConfig;

// declare the from config to set the value in useForm
const formConfig: TFormConfig = {};

const GlobalForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: TGlobalFormProps) => {
  // if default values have set default values in the config
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  // set validation form data
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default GlobalForm;
