import React, { useState } from "react";
import { Alert } from "@/components/ui/alerts/alert";
import { Button } from "@/components/ui/button/button";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

const alertTypes = {
  success: {
    title: "Success",
    description: "Operation completed successfully.",
    icon: <CheckCircle className="h-5 w-5 text-green-700" />,
  },
  error: {
    title: "Error",
    description: "Something went wrong.",
    icon: <XCircle className="h-5 w-5 text-red-700" />,
  },
  warning: {
    title: "Warning",
    description: "A new version is ready to install.",
    icon: <AlertTriangle className="h-5 w-5 text-yellow-700" />,
  },
  info: {
    title: "Info",
    description: "This is an informational message.",
    icon: <Info className="h-5 w-5 text-blue-700" />,
  },
};

const AlertDemo = () => {
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning" | "info" | null;
    title: string;
    description: string;
    icon: React.ReactNode;
    onClose?: () => void;
  } | null>(null);

  const showAlert = (type: keyof typeof alertTypes) => {
    setAlert({ type, ...alertTypes[type], onClose: () => setAlert(null) });

    if (type !== "info" && type !== "warning") {
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <Card className="mx-auto h-fit w-fit ml-20 mt-16">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-2xl">Alert Demo</CardTitle>
        <CardDescription>
          This is a demo of how to show alerts in different styles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {alert && (
          <div className="flex justify-center items-center my-4">
            <Alert
              type={alert.type}
              icon={alert.icon}
              title={alert.title}
              description={alert.description}
              onClose={alert.onClose}
            />
          </div>
        )}

        <div className="flex justify-between w-full space-x-4 mt-4">
          <Button
            className="bg-emerald-500 text-white hover:bg-emerald-400 w-40 rounded-full"
            onClick={() => showAlert("success")}
          >
            Success
          </Button>
          <Button
            className="bg-rose-500 text-white hover:bg-red-500 w-40 rounded-full"
            onClick={() => showAlert("error")}
          >
            Error
          </Button>
          <Button
            className="bg-yellow-500 text-white hover:bg-yellow-400 w-40 rounded-full"
            onClick={() => showAlert("warning")}
          >
            Warning
          </Button>
          <Button
            className="bg-cyan-600 text-white hover:bg-cyan-500 w-40 rounded-full"
            onClick={() => showAlert("info")}
          >
            Info
          </Button>
        </div>

        <div className="flex justify-between w-full space-x-4 mt-4">
          <Button
            className="bg-gray-500 text-white hover:bg-gray-400 w-40 rounded-full"
            onClick={() => {
              setAlert({
                type: "success",
                title: "Custom Success",
                description: "This is a custom success message.",
                icon: <CheckCircle className="h-5 w-5 text-green-700" />,
              });
            }}
          >
            Custom Success
          </Button>

          <Button
            className="bg-blue-500 text-white hover:bg-blue-400 w-40 rounded-full"
            onClick={() => {
              setAlert({
                type: "info",
                title: "Information",
                description: "Here is a custom info message.",
                icon: <Info className="h-5 w-5 text-blue-700" />,
              });
            }}
          >
            Custom Info
          </Button>

          <Button
            className="bg-gray-300 text-white hover:bg-gray-200 w-40 rounded-full"
            onClick={() => {
              setAlert({
                type: "warning",
                title: "Warning",
                description: "This alert has no icon.",
                icon: null,
              });
            }}
          >
            Warning Without Icon
          </Button>

          <Button
            className="bg-purple-600 text-white hover:bg-purple-500 w-40 rounded-full"
            onClick={() => {
              setAlert({
                type: "error",
                title: "Error",
                description: "This alert can be closed.",
                icon: <XCircle className="h-5 w-5 text-red-700" />,
                onClose: () => setAlert(null),
              });
            }}
          >
            Closable Error
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertDemo;
