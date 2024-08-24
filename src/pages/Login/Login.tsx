import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const handleLoginForm: SubmitHandler<FieldValues> = (data) => {
    console.log("Login from : ", data);
  };

  return (
    <>
      <GlobalForm onSubmit={handleLoginForm}>
        <GlobalInput
          type="text"
          placeholder="Email"
          name="email"
          label="Email Address"
          className=""
        />

        <GlobalInput
          type="password"
          placeholder="Password"
          name="password"
          label="Password"
        />

        <Button type="submit">Submit</Button>
      </GlobalForm>
    </>
  );
};

export default Login;
