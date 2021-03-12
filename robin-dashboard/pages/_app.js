import '../styles/globals.css';
import '../styles/styles.css';
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
