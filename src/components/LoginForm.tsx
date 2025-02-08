import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import { Input } from "@/components/ui/input/input";
import { Alert } from "@/components/ui/alerts/alert";

import { CheckCircle, XCircle, Info, AlertCircle } from "lucide-react";

// Schema validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info" | "warning";
    title: string;
    icon: React.ReactNode;
    description: string;
  } | null>(null);

  const alertIcons = {
    success: <CheckCircle className="h-5 w-5 text-green-700" />,
    error: <XCircle className="h-5 w-5 text-red-700" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-800" />,
    info: <Info className="h-5 w-5 text-blue-700" />,
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const testEmail = "test@gmail.com";
      const testPassword = "test123";

      if (values.email === testEmail && values.password === testPassword) {
        setAlert({
          type: "success",
          title: "Success",
          icon: alertIcons.success,
          description: "You have successfully logged in!",
        });

        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        setAlert({
          type: "error",
          icon: alertIcons.error,
          title: "Login Failed",
          description: "Invalid credentials, please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error", error);
      setAlert({
        type: "error",
        title: "Error",
        icon: alertIcons.error,
        description: "Something went wrong. Please try again later.",
      });
    }
  }

  const handleShowCredentials = () => {
    form.setValue("email", "test@gmail.com");
    form.setValue("password", "test123");

    setAlert({
      type: "info",
      title: "Test Credentials",
      icon: alertIcons.info,
      description: "Email: test@gmail.com | Password: test123",
    });
  };

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
      {alert && (
        <div className="absolute top-20 w-[50%] flex items-center justify-center">
          <Alert
            type={alert.type}
            title={alert.title}
            description={alert.description}
            icon={alert.icon}
            onClose={() => setAlert(null)}
          />
        </div>
      )}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account. <br />
            Email: test@gmail.com | Password: test123
          </CardDescription>
          <Button
            variant="outline"
            className="w-full rounded-2xl"
            onClick={handleShowCredentials}
          >
            Click For Email and Password
          </Button>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          className="text-gray-500"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <div className="flex justify-between items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Link
                          href="#"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="******"
                          className="text-gray-500"
                          autoComplete="current-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className="w-full bg-gray-900 text-white rounded-2xl hover:bg-gray-800"
                >
                  Login
                </Button>
                <Button variant="outline" className="w-full rounded-2xl">
                  Login with Google
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
