import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "../redux/features/authSlice";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // const authState = useSelector((state) => state);
  // console.log(authState);
  // const authState = useSelector((state) => state);
  // console.log(authState);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setAuthState(true));
  // }, []);
  // console.log(authState);
  return (
    <div>
      <div>
        <button
        // onClick={() =>
        //   authState
        //     ? dispatch(setAuthState(false))
        //     : dispatch(setAuthState(true))
        // }
        >
          Auth
        </button>
      </div>
    </div>
  );
};

export default Home;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(setAuthState(false));
      return {
        props: {
          authState: false,
        },
      };
    }
);
