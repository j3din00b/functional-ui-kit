import { create } from '@storybook/theming/create';
const getCssVarStringValue = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName);
import logoUrl from './sb-logo.png';

export default create({
  base: 'light',
  brandTitle: 'Functional UI Kit',
  brandUrl: 'https://functional-ui-kit.com/',
  brandImage: logoUrl,
  brandTarget: '_blank',
  fontBase: '"Inter", sans-serif',
  fontCode: '"IBM Plex Mono", monospace',
  colorPrimary: "#2856E0",
  colorSecondary: "#2856E0",
  appBg: "#E9ECF5",
  appContentBg: "#E9ECF5",
  appBorderColor: "#BDBFC7",
  appBorderRadius: 4,
  textColor: "#171719",
  textInverseColor: "#F5F6F9",
  textMutedColor: "#47484D",
  barTextColor: "#171719",
  barSelectedColor: "rgba(53, 84, 206, 0.1)",
  barBg: "#F0F4FF",
  buttonBg: "#2856E0",
  buttonBg: "#2856E0",
  booleanBg: "#F0F4FF",
  booleanSelectedBg: "#2856E0",
  inputBg: "#F5F6F9",
  inputBorder: "#BDBFC7",
  inputTextColor: "#171719",
  inputBorderRadius: 4,
});
