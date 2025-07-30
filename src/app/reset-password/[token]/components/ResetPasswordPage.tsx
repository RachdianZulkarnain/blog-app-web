"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useResetPassword from "../_hooks/useResetPassword";
import * as Yup from "yup";
import { Loader } from "lucide-react";

interface ResetPasswordPageProps {
  token: string;
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is requaired").min(6),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password")], "your Password do not match"),
});

const ResetPasswordPage = ({ token }: ResetPasswordPageProps) => {
  const { mutateAsync: resetPassword, isPending } = useResetPassword(token);
  return (
    <main className="container mx-auto">
      <Card className="w-full max-w-sm mx-auto mt-24">
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await resetPassword({ password: values.password });
          }}
        >
          <Form className="space-y-4">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                Enter your password below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {/* PASSWORD */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Field
                  name="password"
                  as={Input}
                  type="password"
                  placeholder="Your password Confirm Password"
                />
                <ErrorMessage
                  name="confirm password"
                  component="p"
                  className="text-sm text-red-500"
                />

                {/*CONFIRM PASSWORD */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Field
                  name="Confirm password"
                  as={Input}
                  type="password"
                  placeholder="Your password Confirm Password"
                />
                <ErrorMessage
                  name="confirm password"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? <Loader className="animate-spin" /> : "Submit"}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default ResetPasswordPage;
