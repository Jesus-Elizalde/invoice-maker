import React from "react";

import { authOptions } from "./api/auth/[...nextauth]";
import { requireAuthentication } from "@/utils/requireAuth";

const home = () => {
  return <div>Home</div>;
};

export default home;

export async function getServerSideProps(context) {
  return requireAuthentication(context, authOptions, (session) => {
    return {
      props: {
        session,
      },
    };
  });
}
