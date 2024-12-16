import { GlareCard } from "../../ui/glare-card";
import foto from "/img/foto.png";

export function Picture() {
  return (
    <GlareCard className="flex items-center justify-center">
        <img src={foto} className="w-36 md:w-48 lg:w-auto h-40 md:h-56 lg:h-auto object-cover"/>
    </GlareCard>
  );
}
