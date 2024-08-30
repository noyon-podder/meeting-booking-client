import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type TGlobalInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
};
const GlobalInput = ({
  name,
  type,
  placeholder,
  className,
  label,
  value,
}: TGlobalInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = !!errors[name];
  return (
    <div className="mb-5  ">
      {label ? (
        <Label htmlFor={name} className="mb-3 block">
          {label}
        </Label>
      ) : null}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        id={name}
        {...register(name)}
        className={cn(
          className,

          isError
            ? "border-red-500 dark:border-red-700"
            : "focus:dark:border-color-baseLightColor focus:border-color-baseColor  "
          //
        )}
      />
      {isError && (
        <p className="text-red-500 mt-1 dark:text-red-700 text-sm ">
          {errors[name]?.message as string}{" "}
        </p>
      )}
    </div>
  );
};

export default GlobalInput;
