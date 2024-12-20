"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "./ui/loading-button";

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "",
  }),
  email: z.string().email(),
  subject: z.string().min(1, {
    message: "",
  }),
  comment: z.string().min(1, {
    message: "",
  }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      comment: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      toast({
        className: "z-[999]",
        duration: 1000 * 5,
        variant: "success",
        title: "Good news!! 🚀",
        description:
          "Thank you for submitting your message to Consultation ISGA. We'll be in touch soon 😊",
      });
      form.reset();
    } catch (error) {
      toast({
        className: "z-[999]",
        duration: 1000 * 5,
        variant: "destructive",
        title: "Uh oh! Something went wrong 😱🔥",
        description:
          "There was a problem with your request. Please try again later!",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject*</FormLabel>
              <FormControl>
                <Input placeholder="Enter your subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment or Message*</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your comment" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          // loading={loading}
          type="submit"
          className="w-full md:w-auto"
        >
          Send Message
        </LoadingButton>
      </form>
    </Form>
  );
};

export default ContactForm;
