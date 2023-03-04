import React from "react";

import { requireAuthentication } from "@/utils/requireAuth";
import { authOptions } from "./api/auth/[...nextauth]";

const estimates = () => {
  return <div>Estimates</div>;
};

export default estimates;

export async function getServerSideProps(context) {
  return requireAuthentication(context, authOptions, (session) => {
    return {
      props: {
        session,
      },
    };
  });
}
