import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FieldValues, SubmitHandler } from "react-hook-form";

type TLoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  // onLogin: (data: FieldValues) => void;
};

const LoginModal = ({ isOpen, onClose }: TLoginModalProps) => {
  const handleLoginModalSubmit: SubmitHandler<FieldValues> = (data) => {
    // const accessToken = "dummy_token"; // Replace with actual token from API response
    // dispatch(setAccessToken(accessToken));
    console.log(data);
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-5 text-3xl">Login</DialogTitle>
          <DialogDescription>
            <GlobalForm onSubmit={handleLoginModalSubmit}>
              <GlobalInput
                type="text"
                placeholder="Enter your email address"
                name="email"
                label="Email Address"
              />
              <GlobalInput
                type="password"
                placeholder="Enter your password"
                name="password"
                label="Password"
              />
              <Button
                className="bg-color-baseColor text-white hover:bg-color-baseLightColor"
                type="submit"
              >
                Login
              </Button>
            </GlobalForm>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
