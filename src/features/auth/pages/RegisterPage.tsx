import { useForm } from "react-hook-form";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Form } from "~/components/ui/form";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { RegisterFormInner } from "../components/RegisterFormInner";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterSubmit = (values: RegisterFormSchema) => {
    alert("register!!");
  };

  return (
    <PageContainer>
      <SectionContainer
        padded
        className="container mx-auto flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center justify-center">
            <h1 className="text-primary text-3xl font-bold">Buat Akun</h1>
            <p className="text-muted-foreground">
              Qepoin kreator favorite kamu
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <RegisterFormInner onRegisterSubmit={handleRegisterSubmit} />
            </Form>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-4">
              <div className="h-[2px] w-full border-t-2" />
              <p className="text-muted-foreground flex-1 text-sm text-nowrap">
                Atau lanjut dengan
              </p>
              <div className="h-[2px] w-full border-t-2" />
            </div>

            <Button variant="secondary" className="w-full" size="lg">
              <FcGoogle />
              Buat Akun dengan Google
            </Button>

            <p>
              Sudah punya akun?{" "}
              <Link href="/login" className="font-bold text-purple-600">
                P, Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
