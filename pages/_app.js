import '../styles/index.css';
import { SearchFilterProvider } from '../contexts/searchFilter';
function MyApp({ Component, pageProps }) {
  return (
    <SearchFilterProvider>
      <Component {...pageProps} />
    </SearchFilterProvider>
  );
}

export default MyApp;
