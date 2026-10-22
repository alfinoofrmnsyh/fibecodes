import nextConfig from "eslint-config-next";

/**
 * Minimal ESLint Flat Configuration compatible with Next.js 16 & ESLint 9.
 * 
 * Rules rationale:
 * - @next/next/no-html-link-for-pages: Disabled for external WhatsApp & anchor links.
 * - react/no-unescaped-entities: Disabled for editorial copy with standard typography quotes.
 * - react-hooks/set-state-in-effect, react-hooks/refs, react-hooks/purity: Set to 'warn' to
 *   accommodate standard client-side hydration mounting patterns in Next.js App Router.
 */
const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/purity": "warn",
    },
  },
];

export default eslintConfig;
