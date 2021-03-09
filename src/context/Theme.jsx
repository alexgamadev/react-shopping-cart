import { ThemeProvider } from 'styled-components';

const Theme = ({ children, value }) => (
    <ThemeProvider theme={value}>{children}</ThemeProvider>
  );
  
export default Theme;