export interface Experience {
startYear: string;
endYear: string;
position: string;
company: string;
description: string;
stack: string[];
links?: ExperienceLink[];
};

export interface ExperienceLink {
  url: string;
  name: string;
}
