import { cn } from "@/lib/utils";

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;