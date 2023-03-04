import { getServerSession } from "next-auth";

export const requireAuthentication = async (context, authOptions, cb) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return cb({ session });
};
