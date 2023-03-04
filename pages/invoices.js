import { requireAuthentication } from "@/utils/requireAuth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";

const invoices = () => {
  return <div>Invoice</div>;
};

export default invoices;

export async function getServerSideProps(context) {
  return requireAuthentication(context, authOptions, (session) => {
    return {
      props: {
        session,
      },
    };
  });
}
