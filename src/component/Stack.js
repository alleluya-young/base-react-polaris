import React from "react";

export const Stack = ({
  inline,
  align,
  justify,
  wrap,
  spacing,
  children,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      css={{
        display: "flex",
        flexDirection: inline ? "row" : "column",
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...(inline
          ? {
              "& > *": { marginRight: spacing },
            }
          : {
              "& > * + *": { marginBottom: spacing },
            }),
      }}
    >
      {children}
    </div>
  );
};
