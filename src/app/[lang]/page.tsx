import { notFound } from "next/navigation";
import Site from "@/components/Site";
import { supportedLangs, type Lang } from "@/data/site";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang as Lang)) notFound();
  return <Site lang={lang as Lang} />;
}
