"use client";
import { useState } from "react";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("AiPage");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      comment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("subject", data.subject);
      formData.append("email", data.email.toLowerCase());
      formData.append("comment", data.comment);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setLoading(false);
        toast({
          className: "z-[999]",
          duration: 1000 * 5,
          variant: "success",
          title: "Good news!! 🚀",
          description:
            "Thank you for submitting your message to Consultation ISGA. We'll be in touch soon 😊",
        });
        form.reset();
      } else {
        throw new Error("Internal server error");
      }
    } catch (error) {
      setLoading(false);
      toast({
        className: "z-[999]",
        duration: 1000 * 5,
        variant: "destructive",
        title: "Uh oh! Something went wrong 😱🔥",
        description:
          "There was a problem with your request. Please try again later!",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   form.handleSubmit(onSubmit)(e);
        // }}
        className="space-y-6 w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.fields.fullname")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("contact.placeHolder.fullname")}
                  {...field}
                />
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
              <FormLabel>{t("contact.fields.email")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("contact.placeHolder.email")}
                  {...field}
                />
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
              <FormLabel>{t("contact.fields.subject")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("contact.placeHolder.subject")}
                  {...field}
                />
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
              <FormLabel>{t("contact.fields.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact.placeHolder.message")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          loading={loading}
          type="submit"
          className="w-full md:w-auto bg-[#7456F1] hover:bg-[#5E3FDE]"
        >
          {t("contact.button")}
        </LoadingButton>
      </form>
    </Form>
  );
};

export default ContactForm;
