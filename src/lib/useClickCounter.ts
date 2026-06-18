"use client";
import { useEffect, useState } from "react";

const NS = "dately-hadi-homa";
const BASE = "https://abacus.jasoncameron.dev";

export function useClickCounter(key: string, total: number) {
  const [clicks, setClicks] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${BASE}/get/${NS}/${key}`)
      .then((r) => (r.ok ? r.json() : { value: 0 }))
      .then((d) => setClicks(d.value ?? 0))
      .catch(() => setClicks(0));
  }, [key]);

  const increment = () => {
    fetch(`${BASE}/hit/${NS}/${key}`)
      .then((r) => r.json())
      .then((d) => setClicks(d.value))
      .catch(() => {});
  };

  const remaining = clicks === null ? null : Math.max(0, total - clicks);
  return { remaining, increment };
}
