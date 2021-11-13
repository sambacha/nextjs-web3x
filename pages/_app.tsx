import { ThemeProvider } from 'next-themes';
import { darkTheme, globalCss, theme } from '../stitches.config';

const globalStyles = globalCss({
  '*': {
    fontFamily: '$sans',
  },
  'html, body': {
    color: '$foreground',
    backgroundColor: '$background',
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      value={{
        // @note Run the .toString method to get the classnames of the stitches-theme
        light: theme.toString(),
        dark: darkTheme.toString(),
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
