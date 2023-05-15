import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Container.module.css";

const Container = ({ children, keywords = "" }) => {
  return (
    <>
      <Head>
        <meta keywords={`the funnel ${keywords}`} />

        <title>Add project</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Navbar href="/" text="Add project" />
          <Navbar href="/projects" text="Projects" />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Container;
