import {
  type SignupForm,
  signupSchema,
} from "@/components/domain/signup/page.schema";
import type { HooksType } from "@/components/domain/signup/page.types";
import { useForm as useMantineForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

export const useSignupForm = (): HooksType => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useMantineForm<SignupForm>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validate: (values) => {
      try {
        signupSchema.parse(values);
        return {};
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.errors.reduce((acc, curr) => {
            const path = curr.path[0] as string;
            acc[path] = curr.message;
            return acc;
          }, {} as Record<string, string>);
        }
        return {};
      }
    },
  });

  const handleSubmit = async (values: SignupForm) => {
    try {
      console.log("values", values);
      setIsLoading(true);
      setError("");

      const validatedData = signupSchema.parse(values);

      // ここをAPIを叩くカスタムフックに変更する
      // const response = await fetch("/api/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(validatedData),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json().catch(() => ({}));
      //   throw new Error(errorData.message || "登録に失敗しました");
      // }

      router.push("/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError("入力内容を確認してください");
      } else {
        setError(err instanceof Error ? err.message : "登録に失敗しました");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = form.onSubmit((values) => {
    handleSubmit(values);
  });

  return {
    form,
    error,
    isLoading,
    onSubmit,
  };
};
