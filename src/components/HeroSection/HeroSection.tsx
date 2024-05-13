import CountUpNumber from "@/components/CountUpNumber/CountUpNumber";
import Image from "next/image";
import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

export default function HeroSection() {
  return <ClientComponent heading1={heading1} section2={section2} />;
}
