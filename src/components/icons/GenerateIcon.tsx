import React from "react";
import { Icon, IconProps } from ".";

export type IconType = "dollar" | "delete";
interface GenerateIconProps extends IconProps {
  icon?: IconType;
}
const GenerateIcon: React.FC<GenerateIconProps> = (props) => {
  const { icon, className, ...rest } = props;
  switch (icon) {
    case "dollar":
      return <Icon.dollar className={className} {...rest} />;
    case "delete":
      return <Icon.delete className={className} {...rest} />;
  }
};
export default GenerateIcon;
