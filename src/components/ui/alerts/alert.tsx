import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode, useState } from "react";

const alertVariants = cva(
  "relative flex w-full items-start gap-3 rounded-lg border p-4 text-sm transition-all",
  {
    variants: {
      type: {
        success: "border-green-500 bg-green-100 text-green-700",
        error: "border-red-500 bg-red-100 text-red-700",
        warning: "border-yellow-500 bg-yellow-100 text-yellow-800",
        info: "border-blue-500 bg-blue-100 text-blue-700",
      },
      variant: {
        solid: "bg-opacity-100",
        subtle: "bg-opacity-20",
      },
    },
    defaultVariants: {
      type: "info",
      variant: "solid",
    },
  }
);

const icons = {
  success: <CheckCircle className="h-5 w-5 text-green-700" />,
  error: <XCircle className="h-5 w-5 text-red-700" />,
  warning: <AlertCircle className="h-5 w-5 text-yellow-800" />,
  info: <Info className="h-5 w-5 text-blue-700" />,
};

interface AlertProps extends VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: ReactNode | boolean;
  onClose?: () => void;
}

export function Alert({
  type,
  variant,
  title,
  description,
  icon,
  onClose,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div role="alert" className={cn(alertVariants({ type, variant }))}>
      {icon !== false && (
        <span>{icon === true ? icons[type || "info"] : icon}</span>
      )}
      <div className="flex-1">
        {title && <strong className="block">{title}</strong>}
        {description && <p>{description}</p>}
      </div>
      {onClose && (
        <button
          onClick={() => {
            setVisible(false);
            onClose();
          }}
          className="ml-auto text-gray-500 hover:text-gray-700"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
