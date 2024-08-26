import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { setModalOpen } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { FieldValues, SubmitHandler } from "react-hook-form";

type TLoginModalProps = {
  isOpen: boolean;
  // onClose: () => void;
  // onLogin: (data: FieldValues) => void;
};

const LoginModal = ({ isOpen }: TLoginModalProps) => {
  const dispatch = useAppDispatch();
  const handleLoginModalSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(setModalOpen(false));
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button type="submit">Login</Button>
      </DialogTrigger>
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
