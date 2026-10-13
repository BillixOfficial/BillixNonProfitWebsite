import { AliceFace } from '@/components/brand/alice'
import { SearchBox } from '@/components/content/search-box'
import { ButtonLink } from '@/components/ui/primitives'

export default function NotFound() {
  return (
    <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_auto]">
      <div className="max-w-xl">
        <p className="eyebrow text-teal-ink">Page not found</p>
        <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-tight text-teal-deep">This page isn&rsquo;t on the bill.</h1>
        <p className="mt-4 text-lg text-muted">The link may be old or mistyped. Try a search, or start from the homepage.</p>
        <SearchBox className="mt-8" size="md" />
        <ButtonLink href="/" variant="ghost" className="mt-6">Go home</ButtonLink>
      </div>
      <AliceFace mood="confused" size={300} className="mx-auto" />
    </div>
  )
}
