import Link from "next/link";

export default function About() {
  return (
    <main className="px-[20px] h-full bg-black text-white text-xl sm:text-2xl xl:text-3xl font-bold leading-6 sm:leading-7 flex flex-col gap-[28px]">
      <p>
        Creative studio based on Margarita Island, shaking up the established
        and designing with differentiation as our true north. We believe in
        challenging conventions and crafting bold identities that make brands
        impossible to ignore. With over 16 trusted brand partnerships under our
        belt, we&apos;ve proven that great design isn&apos;t just about looking
        good—it&apos;s about standing out in a crowded world. Available
        Worldwide.
      </p>
      <p>
        Our services: Naming, Web Development, Branding & Creative direction
      </p>
      <div class="flex flex-row-reverse justify-end gap-[0.4rem]">
        {/* El código HTML sigue siendo el mismo de arriba, pero visualmente se invierte */}
        <Link href="mailto:hello@neueidea.com" className="peer">
          Email.
        </Link>
        <span className="peer-hover:text-[#0008FF]">Let&apos;s talk. </span>
      </div>
    </main>
  );
}
