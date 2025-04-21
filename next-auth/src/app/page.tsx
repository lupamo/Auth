import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <p>Hello world</p>
      <Link href="/users">Users</Link>
    </div>
  );
}
