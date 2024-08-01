"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/action/auth";
import { toast } from "sonner";

export const SignInRow = () => {
  const [pending, setTransition] = useTransition();

  return (
    <div className="flex-1 max-w-[25rem] mx-3">
      <h1 className="text-2xl font-semibold text-center">Admin access</h1>

      <form
        action={(formData: FormData) =>
          setTransition(async () => {
            await signIn(formData)
              .then((data) => {
                if (data?.error) {
                  toast(data.error);
                  return;
                }

                toast("Sign in successfully");
              })
              .catch(() => toast("Something went wrong"));
          })
        }
        className="mt-7 space-y-4"
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="text-black"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="text-black"
          />
        </div>

        <Button disabled={pending} className="w-full uppercase text-sm">
          Sign In
        </Button>
      </form>
    </div>
  );
};
