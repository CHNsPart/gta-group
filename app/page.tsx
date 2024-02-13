import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Header } from "@/components/hero-section"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 pb-8">
      <Header/>
    </section>
  )
}
