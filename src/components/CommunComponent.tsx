import React, { ReactNode } from "react";

interface CommunComponentProps {
  children: ReactNode;
}

const CommunComponent: React.FC<CommunComponentProps> = ({ children }) => {
  return <div className="mx-5 lg:mx-auto max-w-7xl flex-grow">{children}</div>;
};

export default CommunComponent;
