"use client";

import React from "react";

const SvgFromDataUrl = ({ dataUrl }: { dataUrl: string }) => {
  // Step 1: Decode the Base64 string
  const base64Content = dataUrl.split(",")[1]; // Extract after "data:image/svg+xml;base64,"
  const decodedSvg = atob(base64Content);

  // Step 2: Parse the XML into a DOM object
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(decodedSvg, "image/svg+xml");
  const svgElement = svgDoc.documentElement;

  if (!svgElement || svgElement.nodeName !== "svg") {
    console.error("Invalid SVG data");
    return null;
  }

  // Step 3: Convert the XML SVG into JSX
  const getAttributes = (element: Element): Record<string, string> => {
    const attributes: Record<string, string> = {};
    Array.from(element.attributes).forEach((attr) => {
      // Convert attribute names to React-friendly format
      const reactAttr = attr.name.replace(/-(.)/g, (_, char) =>
        char.toUpperCase()
      );
      attributes[reactAttr] = attr.value;
    });
    return attributes;
  };

  const renderElement = (element: Element): React.ReactNode => {
    const attributes = getAttributes(element);
    const tagName = element.tagName;

    return React.createElement(
      tagName,
      attributes,
      Array.from(element.childNodes).map(
        (child) =>
          child.nodeType === 1
            ? renderElement(child as Element) // Element node
            : child.nodeValue // Text node
      )
    );
  };

  return <>{renderElement(svgElement)}</>;
};

export default SvgFromDataUrl;
