import { Text } from "react-native";
import { theme, styled } from "../../themes/theme";

type Theme = typeof theme;

const defaultStyles = (theme: Theme) => `
 font-family: ${theme.fonts.body};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.palette.text.primary};
 flex-wrap: wrap;
 margin-top: 0px;
 margin-bottom: 0px;
`;

const boldStyling = (theme: Theme) => `
 font-weight: bold;  
`;

const h1 = (theme: Theme) => `
 font-size: ${theme.fontSizes.h1}  
`;

const h2 = (theme: Theme) => `
 font-size: ${theme.fontSizes.h2}  
`;

const h3 = (theme: Theme) => `
 font-size: ${theme.fontSizes.h3}  
`;

const h4 = (theme: Theme) => `
 font-size: ${theme.fontSizes.h4}  
`;

const h5 = (theme: Theme) => `
 font-size: ${theme.fontSizes.h5}  
`;

const title = (theme: Theme) => `
 font-size: ${theme.fontSizes.title}  
`;

const subtitle = (theme: Theme) => `
 font-size: ${theme.fontSizes.subtitle}  
`;

const body = (theme: Theme) => `
 font-size: ${theme.fontSizes.body}  
`;

const caption = (theme: Theme) => `
 font-size: ${theme.fontSizes.caption}  
`;
const button = (theme: Theme) => `
 font-size: ${theme.fontSizes.button}  
`;

/**
 * Defines the TypographyProps interface
 */
export interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "title"
    | "subtitle"
    | "body"
    | "caption"
    | "button";
  bold?: boolean;
}

const variants = {
  h1,
  h2,
  h3,
  h4,
  h5,
  title,
  subtitle,
  body,
  caption,
  button
};

export const Typography = styled(Text)<TypographyProps>`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant }) => (variant ? variants[variant](theme) : "")}
  ${({ theme, bold }) => (bold ? boldStyling(theme) : "")}
`;

Typography.defaultProps = {
  variant: "body"
};
