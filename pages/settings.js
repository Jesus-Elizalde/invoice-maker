import { requireAuthentication } from "@/utils/requireAuth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";

const settings = () => {
  return <div>settings</div>;
};

export default settings;

export async function getServerSideProps(context) {
  return requireAuthentication(context, authOptions, (session) => {
    return {
      props: {
        session,
      },
    };
  });
}
