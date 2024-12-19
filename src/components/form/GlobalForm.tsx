/**
 * Title: Write a program using JavaScript on GlobalForm
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 16 December 2024
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TGlobalFormProps = {
  children: ReactNode;
  onSubmit: (data: FieldValues) => void;
} & TFormConfig;

const GlobalForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: TGlobalFormProps) => {
  const methods = useForm({ resolver, defaultValues });

  // Watch for changes in defaultValues and reset the form
  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

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
