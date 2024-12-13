import { GlareCard } from "../../ui/glare-card";
import foto from "/img/foto.png";

export function Picture() {
  return (
    <GlareCard className="flex items-center justify-center">
        <img src={foto} className="w-36 sm:w-auto h-40 sm:h-auto object-cover"/>
    </GlareCard>
  );
}
