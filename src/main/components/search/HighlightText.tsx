import React from "react";

/**
 * Component for highlighting text within a string
 */
const HighlightText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, "gi"); // Capturing group to keep the match in the result
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {regex.test(part) ? (
            <span className="bg-yellow-200">{part}</span>
          ) : (
            part
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

export default HighlightText;
