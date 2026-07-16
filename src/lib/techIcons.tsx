import type { IconType } from "react-icons";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiWeb3Dotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface TechIconConfig {
  Icon: IconType;
  color: string;
}

const TECH_ICON_MAP: Record<string, TechIconConfig> = {
  React: { Icon: FaReact, color: "#61DAFB" },
  JavaScript: { Icon: FaJs, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  CSS3: { Icon: FaCss3Alt, color: "#1572B6" },
  HTML5: { Icon: FaHtml5, color: "#E34F26" },
  "Node.js": { Icon: FaNodeJs, color: "#339933" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Blockchain: { Icon: SiBlockchaindotcom, color: "#F7931A" },
  Web3: { Icon: SiWeb3Dotjs, color: "#F16822" },
  NFT: { Icon: SiBlockchaindotcom, color: "#F7931A" },
  API: { Icon: FaJs, color: "#F7DF1E" },
  "Local Storage": { Icon: FaJs, color: "#F7DF1E" },
  Finance: { Icon: FaJs, color: "#F7DF1E" },
  CRUD: { Icon: FaJs, color: "#F7DF1E" },
  WordPress: { Icon: FaHtml5, color: "#21759B" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  Astro: { Icon: FaJs, color: "#FF5D01" },
  WebSockets: { Icon: FaNodeJs, color: "#339933" },
};

const DEFAULT_TECH_ICON: TechIconConfig = { Icon: FaJs, color: "#F7DF1E" };

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

export const TechIcon = ({ tech, size = 14, className }: TechIconProps) => {
  const { Icon, color } = TECH_ICON_MAP[tech] ?? DEFAULT_TECH_ICON;
  return <Icon color={color} size={size} aria-hidden="true" className={className} />;
};