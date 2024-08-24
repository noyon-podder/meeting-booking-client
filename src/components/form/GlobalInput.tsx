import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TGlobalInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label?: string;
};

const GlobalInput = ({
  name,
  type,
  placeholder,
  className,
  label,
}: TGlobalInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="mb-5 grid w-full max-w-sm items-center gap-4">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name)}
        className={className}
      />
    </div>
  );
};

export default GlobalInput;
