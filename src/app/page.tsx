import Link from "next/link";
import MemberPage from "./DynNav_member/[slug]"
export default function Home() {
  return (
    <>
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Hello World 👋</h1>
      <p>ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</p>

      <div style={{ marginTop: "1rem" }}>
      </div>
    </main>

    <MemberPage />
    </>
  );
}
