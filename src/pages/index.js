import Header from "./Header"
import dynamic from "next/dynamic";

export default function Main() {
  const Home = dynamic(() => import("./home/Home"), { ssr: false });
  return (
    <main>
      <Header />
      <Home />
    </main>
  )
}
