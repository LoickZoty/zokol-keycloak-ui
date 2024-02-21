import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#264653',
          50: '#e5e9ea',
          100: '#bec8cb',
          200: '#93a3a9',
          300: '#677e87',
          400: '#47626d',
          500: '#264653',
          600: '#223f4c',
          700: '#1c3742',
          800: '#172f39',
          900: '#0d2029',
          A100: '#68c8ff',
          A200: '#35b5ff',
          A400: '#02a3ff',
          A700: '#0093e7',
        },
        secondary: colors.gray,

        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
} satisfies Config;
