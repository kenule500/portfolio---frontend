// AppState

export enum Theme {
  darkMode = "bgDark",
  lightMode = "bgRed",
  green = "bgBlue",
}
export enum PrimaryColor {
  primaryColor1 = "primary1",
  primaryColor2 = "primary2",
  primaryColor3 = "primary3",
  primaryColor4 = "primary4",
  primaryColor5 = "primary5",
  primaryColor6 = "primary6",
  primaryColor7 = "primary7",
}

export interface AppState {
  theme: Theme;
  primaryColor: PrimaryColor;
  modal: boolean;
  settings: boolean;
  slideMenu: boolean;
  projectPopup: boolean;
  messageSuccess: boolean;
  messageFailure: boolean;
}

export interface Modal {
  modal: boolean;
  settings: boolean;
  slideMenu: boolean;
}

// ProfileState

export interface ProfileState {
  educationAndExprience: EducationAndExperience[];
  services: Service[];
  skills: Skill[];
  projects: Project[];
  project: Project | undefined;
}
export interface EducationAndExperience {
  id: number;
  title: string;
  stack?: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  imgURL: string;
}

export interface Project {
  id: number;
  name: string;
  tools: string[];
  img: string;
  link: string;
  description: string;
  outcome: string;
}

export interface ContactForm {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  budget: string;
  message: string;
  files: File | null;
}
