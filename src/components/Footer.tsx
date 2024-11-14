import Link from "next/link";
import { Linkedin } from "lucide-react";
import { footerConctactInfo, footerItems } from "@/constants";

function Footer() {
  return (
    <div className="bg-[#102136] text-[#5e7086]">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5 mb-10">
        <ContactInfo />
        {footerItems.map((item) => (
          <div key={item.title} className="gap-4 flex flex-col">
            <h5 className="font-bold text-white">{item.title}</h5>
            <div className="flex flex-col gap-1">
              {item.sub.map((sub) => (
                <Link href={sub.link}>
                  <p className="hover:text-[#7456F1] transition-all duration-300">
                    {sub.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CopyRight />
    </div>
  );
}

export default Footer;

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold text-white">Contact Info</h5>
      <p>Send Us Your Feedback. We Love Hearing It!</p>
      <div className="flex flex-col gap-3">
        {footerConctactInfo.map((item) => (
          <div key={item.title} className="flex gap-3 items-center">
            <item.Icon />
            <div>
              <p> {item.title}</p>
              <p> {item.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CopyRight = () => {
  return (
    <div className="bg-[#0d1c2f]">
      <div className="max-w-7xl mx-auto p-5 flex flex-col items-center gap-5 lg:flex-row lg:justify-between lg:items-center ">
        <p>Copyright © 2024 - ISGA Consult.</p>
        <p>Privacy Policy</p>

        <a
          target="_blank"
          href="https://www.linkedin.com/company/consultation-isga-inc/?originalSubdomain=fr"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};
