import LoginBtn from "@/components/LoginBtn";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // temp auth true
  // useEffect(() => {
  //   router.push("/home");
  // });
  return (
    <div>
      <h1>Welcome to Invoice Maker</h1>
      <LoginBtn />
    </div>
  );
}
