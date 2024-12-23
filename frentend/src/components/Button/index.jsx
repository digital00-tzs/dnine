import React from "react";
import PropTypes from "prop-types";

const shape = {
    circle:"rounded-[50%}",
    square: "rounded-[0px]",
    round: "rounded-lg"
}

const variants = {
    fill: {
    black_900_01: "bg-black-900_01",
    gray_50_02: "bg-gray-50_02 shadow-sm",
    gray_900: "bg-gray-900 shadow-sm",
    white_A700: "bg-white-a700",
    gray_50_cc: "bg-gray-50_cc shadow-sm",
    },
    outline: {
    white_A700: "border-white-a700 border border-solid text-white-a700",
    red_700: "border-red-700 border border-solid text-red-700",
    },
    };

    const sizes = {
    md: "h-[44px] px-2.5",
    "2xl": "h-[56px] px-3",
    xl: "h-[52px] px-2.5",
    xs: "h-[32px]",
    sm: "h-[40px] px-[18px] text-[18px]",
    "3xl": "h-[60px] px-2.5",
    lg: "h-[48px] px-2",
    "4xl": "h-[64px] px-8 text-[20px]",
    };



    const Button = ({
        children,
        className = "",
        leftIcon,
        rightIcon,
        shape,
        variant = "outline",
        size = "4x1",
        color = "gray 900",
        ...restProps
      }) => {
        return (
          <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
              shape || ""
            } ${size || ""} ${variant && variant[color]}`}
            {...restProps}
          >
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
          </button>
        );
      };

      Button.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        leftIcon: PropTypes.node,
        rightIcon: PropTypes.node,
        shape: PropTypes.oneof(["circle", "square", "round"]),
        size: PropTypes.oneof(["md", "2xl", "xl", "xs", "sm", "3xl", "lg", "4x1"]),
        variant: PropTypes.oneof(["fill", "outline"]),
        color: PropTypes.oneof(["black_900_01", "gray_50_02", "gray_900", "white_A700", "gray_50_cc", "red_700"]),
        };
        export { Button };