import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/jogo-da-velha">Jogo da velha</Link>
      </li>
      <li>
        <Link href="/b">b (App Router)</Link>
      </li>
      <li>
        <Link href="/c">c (App Router)</Link>
      </li>
    </ul>
  );
}
