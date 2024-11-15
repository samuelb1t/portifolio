import { GlareCard } from "../../ui/glare-card";
import foto from "/img/foto.png";

export function Picture() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
        <img src={foto}/>
    </GlareCard>
  );
}
