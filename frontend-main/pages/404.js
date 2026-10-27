import Link from "next/link";
import Hexagon from "@/components/Hexagon";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <Layout solidHeader>
      <Seo title="Page introuvable | Garden Pizz" description="Cette page n’existe pas." path="/404" noindex />
      <section className="flex min-h-[80svh] flex-col items-center justify-center px-4 pt-24 text-center">
        <Hexagon className="h-32 w-32" fill="bg-garden-red" border="bg-garden-gold">
          <span className="font-display text-5xl font-extrabold italic text-white">404</span>
        </Hexagon>
        <h1 className="mt-8 font-display text-5xl font-extrabold uppercase italic text-garden-cream">Cette part a disparu</h1>
        <p className="mt-4 max-w-md text-garden-muted">La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link href="/" className="mt-8 rounded-full bg-garden-red px-6 py-3.5 font-semibold text-white transition hover:scale-105 hover:bg-garden-red-dark">
          Retour à l’accueil
        </Link>
      </section>
    </Layout>
  );
}
