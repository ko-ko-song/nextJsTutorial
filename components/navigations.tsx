"use client";
//use client를 사용하더라도 렌더링은 서버사이드에서 됨.
//이름 떄문에 클라이언트 사이드에서 렌더링된다고 혼란을 줄 수 있음.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link> {path === "/" ? "o" : ""}
        </li>
        <li>
          <Link href="/about-us">about-us</Link> {path === "/about-us" ? "o" : ""}
        </li>
        <li>
          <button onClick={() => setCount(count + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
