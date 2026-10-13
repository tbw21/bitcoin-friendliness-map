import type { BitcoinScore } from "./countriesCsv";

export interface LegendEntry {
  score: BitcoinScore;
  label: string;
  description: string;
}

export const legendEntries: LegendEntry[] = [
  {
    score: 1,
    label: "Hostile",
    description: "Bans or severe restrictions on Bitcoin usage or businesses.",
  },
  {
    score: 2,
    label: "Unfriendly",
    description: "Legally allowed but with unclear rules or strong discouragement.",
  },
  {
    score: 3,
    label: "Neutral",
    description: "Permitted with basic rules; limited dedicated policy focus.",
  },
  {
    score: 4,
    label: "Friendly",
    description: "Clear rules and an overall supportive stance toward Bitcoin.",
  },
  {
    score: 5,
    label: "Very Friendly",
    description: "Highly supportive environment with strong industry presence.",
  },
];

