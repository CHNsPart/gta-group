import { Header } from "@/components/hero-section"
import TeamStats from "@/components/team-stats"
import CompanyInfo from "@/components/company-info"
import SaleBanner from "@/components/sale-banner"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 pb-8">
      <Header/>
      <TeamStats/>
      <CompanyInfo/>
      <SaleBanner/>
    </section>
  )
}
