import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const SECTIONS = [
  {
    title: "1. Éditeur du site",
    body: (
      <>
        <p>
          Le site Garden Pizz est édité par la société SAS CLA, immatriculée sous le numéro SIRET 981 907 330 00014.
        </p>
        <p>Siège social : 55 rue de l’Artisanat, 83140 Six-Fours-les-Plages.</p>
        <p>
          Responsable de la publication : Aurélie Egea. Contact :{" "}
          <a href="mailto:aurelie_fedele@hotmail.fr">aurelie_fedele@hotmail.fr</a> ·{" "}
          <a href="tel:+33630265740">06 30 26 57 40</a>
        </p>
      </>
    ),
  },
  {
    title: "2. Hébergement",
    body: <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).</p>,
  },
  {
    title: "3. Conception et réalisation",
    body: (
      <p>
        Site conçu et développé par <a href="https://www.mfagency.fr">MF Agency</a>, La Seyne-sur-Mer.
      </p>
    ),
  },
  {
    title: "4. Propriété intellectuelle",
    body: (
      <p>
        L’ensemble du contenu du site (textes, images, logos, etc.) est la propriété exclusive de Garden Pizz ou fait
        l’objet d’une autorisation d’utilisation. Toute reproduction, distribution ou modification sans autorisation est
        interdite.
      </p>
    ),
  },
  {
    id: "donnees",
    title: "5. Données personnelles et cookies",
    body: (
      <>
        <p>
          Le site ne comporte aucun formulaire et ne collecte pas de données personnelles de manière directe. Les
          informations transmises par téléphone ou par e-mail sont uniquement utilisées pour traiter votre demande.
        </p>
        <p>
          Avec votre accord, le site utilise Google Analytics pour mesurer sa fréquentation de façon statistique. Aucun
          cookie de mesure n’est déposé tant que vous n’avez pas cliqué sur « Accepter ». Vous pouvez changer d’avis à
          tout moment grâce au lien « Gestion des cookies » en bas de page.
        </p>
        <p>
          Les plans Google Maps ne sont chargés que si vous cliquez sur « Afficher le plan Google Maps » ; Google peut
          alors déposer ses propres cookies.
        </p>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données, que
          vous pouvez exercer en écrivant au responsable de la publication.
        </p>
      </>
    ),
  },
  {
    title: "6. Responsabilité",
    body: (
      <p>
        Garden Pizz s’efforce d’assurer l’exactitude des informations publiées sur ce site (carte, prix, horaires), mais
        ne peut garantir leur exhaustivité ou leur mise à jour en temps réel. L’utilisateur reconnaît utiliser ces
        informations sous sa propre responsabilité.
      </p>
    ),
  },
  {
    title: "7. Liens hypertextes",
    body: (
      <p>
        Le site peut contenir des liens vers des sites externes. Garden Pizz ne peut être tenu responsable du contenu de
        ces sites tiers.
      </p>
    ),
  },
  {
    title: "8. Droit applicable",
    body: (
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront
        ceux du ressort du siège social de Garden Pizz.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <Layout solidHeader>
      <Seo
        title="Mentions légales | Garden Pizz"
        description="Mentions légales du site Garden Pizz : éditeur, hébergement, propriété intellectuelle, données personnelles et cookies."
        path="/mentions-legales"
      />
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <p className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.3em] text-garden-gold">
          <span className="tricolore h-1 w-8 rounded-full" aria-hidden="true" />
          Informations
        </p>
        <h1 className="mt-3 font-display text-5xl font-extrabold uppercase italic text-garden-cream sm:text-6xl">
          Mentions légales
        </h1>
        <div className="mt-12 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title} id={section.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-extrabold uppercase italic text-garden-gold">{section.title}</h2>
              <div className="legal-text mt-3 space-y-3 leading-relaxed text-garden-muted">{section.body}</div>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
