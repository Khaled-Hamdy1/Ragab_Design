
import { cn } from "@/utils/utils";
import { IconBaseProps } from "react-icons";
import { CgSpinner } from "react-icons/cg";

export const Loader = () => {
  return (
    <div className='flex-center z-50 h-screen w-full bg-background bg-opacity-50'>
      <CgSpinner className='animate-spin' size={50} />
    </div>
  );
};

export const LoaderIcon = ({ size, className, ...props }: IconBaseProps) => (
  <CgSpinner
    className={cn("animate-spin", className)}
    size={size || 50}
    {...props}
  />
);
