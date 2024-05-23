import React from "react";
import TextInput from "@repo/ui/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInSchema, SignInSchemaValue } from "@repo/common/SigninSchema";
import { useRouter } from "next/navigation";
import CTAButton from "@repo/ui/button";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaValue>({
    resolver: zodResolver(SignInSchema),
  });
  const Router = useRouter();
  const onSubmit: SubmitHandler<SignInSchemaValue> = (data, e) => {
    e?.preventDefault();

    Router.push("/");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-2"
    >
      <div className="flex w-full gap-10">
        <TextInput
          placeholder="Enter first name"
          label="First Name"
          inputType="text"
          {...register("FirstName")}
          ErrorMessage={errors.FirstName && errors.FirstName.message}
        />
        <TextInput
          placeholder="Enter last name"
          label="Last Name"
          inputType="text"
          {...register("LastName")}
          ErrorMessage={errors.LastName && errors.LastName.message}
        />
      </div>
      <div className="my-2">
        <TextInput
          placeholder="Enter email address"
          label="Email Address"
          inputType="text"
          {...register("email")}
          ErrorMessage={errors.email && errors.email.message}
        />
      </div>
      <div className="flex gap-10">
        <TextInput
          placeholder="Enter password"
          label="Create Password"
          inputType="password"
          typePassword={true}
          {...register("password")}
          ErrorMessage={errors.password && errors.password.message}
        />
        <TextInput
          placeholder="Confirm password"
          label="Confirm Password"
          inputType="password"
          typePassword={true}
          {...register("confirmPassword")}
          ErrorMessage={
            errors.confirmPassword && errors.confirmPassword.message
          }
        />
      </div>
      <button
        type="submit"
        className="bg-[#9C49CF] h-[50px] text-[13px] sm:text-[16px] font-bold rounded p-2 text-center mt-3 hover:scale-95 transition-all duration-200 hover:ring-1 ring-white text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
