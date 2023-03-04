import Table from "@/components/Table";
import React from "react";

import { authOptions } from "./api/auth/[...nextauth]";
import { requireAuthentication } from "@/utils/requireAuth";

const customers = () => {
  return (
    <div>
      <h1>Customers</h1>
      <Table />
    </div>
  );
};

export default customers;

export async function getServerSideProps(context) {
  return requireAuthentication(context, authOptions, (session) => {
    return {
      props: {
        session,
      },
    };
  });
}
