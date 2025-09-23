import Image from "next/image";

export default function Home() {
  return (

    <main className="p-10 space-y-6">

      <h1 className="text-preset1 text-blue-700 radius-12 p-200 bg-neutreal-200">
        Caja con preset tipográfico + spacing + radius
      </h1>
      {/* Preset 1 - DM Sans grande e itálica */}
      <h1 className="text-preset1">
        Texto con Preset 1 (DM Sans, 96px, italic, 500)
      </h1>

      {/* Preset 2 - Bricolage Grotesque */}
      <h2 className="text-preset2">
        Texto con Preset 2 (Bricolage Grotesque, 52px, bold)
      </h2>

      {/* Preset 3 - DM Sans mediano light */}
      <p className="text-preset3">
        Texto con Preset 3 (DM Sans, 32px, light)
      </p>

      {/* Preset 4 - DM Sans mediano bold */}
      <p className="text-preset4">
        Texto con Preset 4 (DM Sans, 28px, bold)
      </p>

      {/* Preset 5 - DM Sans medium */}
      <p className="text-preset5">
        Texto con Preset 5 (DM Sans, 20px, 500)
      </p>

      {/* Preset 5 Medium */}
      <p className="text-preset5-medium">
        Texto con Preset 5-Medium (DM Sans, 20px, medium)
      </p>

      {/* Preset 6 */}
      <p className="text-preset6">
        Texto con Preset 6 (DM Sans, 18px, medium)
      </p>

      {/* Preset 7 */}
      <p className="text-preset7">
        Texto con Preset 7 (DM Sans, 16px, medium)
      </p>

      {/* Preset 8 */}
      <p className="text-preset8">
        Texto con Preset 8 (DM Sans, 14px, medium)
      </p>
    </main>

  );
}
