import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Publications } from "@/components/Publications";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrainingTimeline } from "@/components/TrainingTimeline";
import { VolunteerWork } from "@/components/VolunteerWork";
import { profile } from "@/lib/content";

const description = `${profile.name}, ${profile.credentials} — ${profile.role.toLowerCase()}. Education and training, selected research publications, and the community work she does outside the clinic.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name}, ${profile.credentials} — Orthodontist` },
      { name: "description", content: description },
      { property: "og:title", content: `${profile.name}, ${profile.credentials}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${profile.name}, ${profile.credentials}` },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <TrainingTimeline />
        <Publications />
        <VolunteerWork />
      </main>
      <SiteFooter />
    </div>
  );
}
