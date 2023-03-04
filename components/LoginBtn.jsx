import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}> Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not sign in <br />
      <button onClick={() => signIn()}>sign in</button>
    </>
  );
}
