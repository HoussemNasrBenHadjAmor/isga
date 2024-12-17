"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

// Max size is 5MB.
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_TYPES = ["application/pdf"];

const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Name is 5 characters at least.",
  }),
  email: z.string().email(),
  file: z
    .any()
    .refine(
      (file) =>
        typeof window !== "undefined" &&
        file instanceof FileList &&
        file.length > 0,
      "Resume is required."
    )
    .refine(
      (file) =>
        typeof window !== "undefined" &&
        file instanceof FileList &&
        file[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (file) =>
        typeof window !== "undefined" &&
        file instanceof FileList &&
        ACCEPTED_TYPES.includes(file[0]?.type),
      "Only .pdf files are accepted."
    ),
});

interface JobFormProps {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplaySuccess: React.Dispatch<React.SetStateAction<boolean>>;
  category_id?: string;
}

const JobForm = ({
  setDisplayForm,
  setDisplaySuccess,
  category_id,
}: JobFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const transitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      file: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email.toLowerCase());
      formData.append("file", data.file[0]); // Append the file
      if (category_id) {
        formData.append("category_id", category_id);
      }

      const response = await fetch("/api/submitCandidate", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setLoading(false);
        setDisplaySuccess(true);
      } else {
        throw new Error("Internal server error");
      }
    } catch (error) {
      setLoading(false);
      toast({
        className: "z-[999]",
        duration: 1000 * 3,
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again later">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <ArrowLeft
        className="w-5 h-5 absolute left-4 top-4 cursor-pointer"
        onClick={() => setDisplayForm(false)} // Close the form
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full mt-10"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume*</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            loading={loading}
            type="submit"
            className="w-full md:w-auto"
          >
            Submit
          </LoadingButton>
        </form>
      </Form>
    </motion.div>
  );
};

export default JobForm;
