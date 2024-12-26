"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { PortableText } from "next-sanity";
import { JobQueryResult } from "@/sanity/types";
import { JobCard, JobForm } from "@/components";
import { CircleCheck } from "lucide-react";

interface JobDialogProps {
  data: JobQueryResult[0];
}

const SuccessComponenet = () => {
  return (
    <motion.div
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      className="min-h-[50vh] flex flex-col justify-center items-center gap-4 text-center"
    >
      <CircleCheck className="w-40 h-40 text-green-500" />
      <h1 className="text-xl sm:text-4xl font-medium">Submission Successful</h1>
      <p className="text-sm sm:text-base">
        Thank you for submitting your app to Consultation ISGA.
      </p>
    </motion.div>
  );
};

const transitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const JobDialog = ({ data }: JobDialogProps) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  const JobDetails = () => {
    return (
      <motion.div
        variants={transitionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <DialogHeader>
          <DialogTitle className="font-extrabold">{data.title}</DialogTitle>
          <DialogDescription>{data?.job_domain?.title}</DialogDescription>
        </DialogHeader>

        <div className="prose max-w-none mt-8">
          {Array.isArray(data.description) && (
            <PortableText value={data.description} />
          )}

          {Array.isArray(data.qualifications) && (
            <PortableText value={data.qualifications} />
          )}
        </div>

        <DialogFooter>
          <Button type="button" onClick={() => setDisplayForm(true)}>
            Apply Now
          </Button>
        </DialogFooter>
      </motion.div>
    );
  };

  return (
    <div className="cursor-pointer">
      <Dialog
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setDisplaySuccess(false);
            setDisplayForm(false);
          }
        }}
      >
        <DialogTrigger className="w-full">
          <JobCard data={data} />
        </DialogTrigger>
        <DialogContent className="max-w-full lg:max-w-3xl z-[999] h-full lg:max-h-[70vh] overflow-y-auto pb-16 lg:pb-5">
          {!displayForm ? (
            <JobDetails />
          ) : displayForm && !displaySuccess ? (
            <JobForm
              category_id={data?.job_domain?._id}
              setDisplayForm={setDisplayForm}
              setDisplaySuccess={setDisplaySuccess}
            />
          ) : (
            <SuccessComponenet />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDialog;
