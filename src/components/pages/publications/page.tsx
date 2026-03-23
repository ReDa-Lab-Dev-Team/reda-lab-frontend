import PublicationTitle from "./publication-title";
import PublicationList from "./publication-list";
import type { PublicationPaper } from "@/types/publication-paper";
import { PAPERS_DATA } from "@/data/static/publications";

export default function Publications() {
  const popularPapers: PublicationPaper[] = PAPERS_DATA.popular;
  const archivedPapersByYear: Record<number, PublicationPaper[]> =
    PAPERS_DATA.archive;

  return (
    <>
      <PublicationTitle />
      {/* --- Publication List --- */}
      <PublicationList
        popularPapers={popularPapers}
        archivedPapersByYear={archivedPapersByYear}
      />
    </>
  );
}
