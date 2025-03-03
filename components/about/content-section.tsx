import Link from 'next/link';

export default function ContentSection() {
  return (
    <section className="mb-12">
      <main>
        <article className="space-y-4">
          <p>
            <span className="font-semibold">The Ghazal Project</span> was
            founded to celebrate and share the rich artistic heritage of
            Pakistan and the greater subcontinent with the world. At its heart
            lies the timeless beauty of the ghazal, a poetic form that has
            inspired generations with its themes of love, loss, and
            spirituality.
          </p>

          <p>
            Our mission is twofold: to preserve this cherished tradition while
            fostering cultural amalgamation by adapting the ghazal for English
            poetry. By exploring variants of the ghazal form that resonate with
            contemporary voices, we aim to create a bridge between diverse
            cultures and artistic expressions.
          </p>

          <p>
            We believe that writing ghazals is not just an artistic exercise but
            also a contemplative and meditative practice. By engaging with the
            form’s inherent structure and its themes, poets are encouraged to
            explore metaphysical insights and gain deeper spiritual awareness.
          </p>

          <p>
            Through collaborative features like the{' '}
            <Link href="/collective-ghazal">Collective Ghazal</Link>, The Ghazal
            Project invites poets, writers, and enthusiasts to participate in
            this living tradition. In this way, we honor the past, enrich the
            present, and develop the future of this extraordinary art form.
          </p>
        </article>
      </main>
    </section>
  );
}
