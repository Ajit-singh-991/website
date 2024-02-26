import React from "react";

const sizeClasses = {
  txtInterBold6364: "font-bold font-inter",
  txtDaysOneRegular4434: "font-daysone font-normal",
  txtInterBold6364Gray600: "font-bold font-inter",
  txtRobotoRomanBold18: "font-bold font-roboto",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
