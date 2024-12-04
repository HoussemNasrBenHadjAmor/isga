"use client";

import React, { useEffect, useState } from "react";

const SvgFromDataUrl = ({ dataUrl }: { dataUrl: string }) => {
  const [svgElement, setSvgElement] = useState<SVGElement | null>(null);

  useEffect(() => {
    // Ensure DOMParser is only used in the browser
    if (typeof window !== "undefined" && dataUrl) {
      try {
        // Step 1: Decode the Base64 string
        const base64Content = dataUrl.split(",")[1]; // Extract after "data:image/svg+xml;base64,"
        const decodedSvg = atob(base64Content);

        // Step 2: Parse the XML into a DOM object
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(decodedSvg, "image/svg+xml");
        const svgRoot = svgDoc.documentElement as unknown as SVGElement; // Cast to SVGElement

        if (svgRoot && svgRoot.nodeName === "svg") {
          setSvgElement(svgRoot);
        } else {
          console.error("Invalid SVG data");
        }
      } catch (error) {
        console.error("Error parsing SVG data:", error);
      }
    }
  }, [dataUrl]);

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

  const renderElement = (element: Element, index: number): React.ReactNode => {
    const attributes = getAttributes(element);
    const tagName = element.tagName;

    return React.createElement(
      tagName,
      { ...attributes, key: index }, // Add a unique key
      Array.from(element.childNodes).map(
        (child, childIndex) =>
          child.nodeType === 1
            ? renderElement(child as Element, childIndex) // Pass childIndex for keys
            : child.nodeValue // Text node
      )
    );
  };

  // Render the SVG JSX or return null if SVG is not ready
  return svgElement ? <>{renderElement(svgElement, 0)}</> : null;
};

export default SvgFromDataUrl;
