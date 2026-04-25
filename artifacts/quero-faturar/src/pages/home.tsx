import s1 from "@/assets/lp/01.jpg";
import s2 from "@/assets/lp/02.jpg";
import s3 from "@/assets/lp/03.jpg";
import s4 from "@/assets/lp/04.jpg";
import s5 from "@/assets/lp/05.jpg";
import s6 from "@/assets/lp/06.jpg";
import s7 from "@/assets/lp/07.jpg";
import s8 from "@/assets/lp/08.jpg";

const VIP_URL = "https://wa.me/556135670042";
const RECLAME_AQUI_URL = "https://www.reclameaqui.com.br/empresa/quero-faturar/";
const DIATECH_URL = "https://www.diatech.com.br/";
const PRIVACY_URL = "/politica-de-privacidade";
const EMAIL = "contato@querofaturar.com.br";
const PHONE_TEL = "+556135670042";
const PHONE_WHATSAPP = "https://wa.me/556135670042";

type Overlay = {
  top: number;
  left: number;
  width: number;
  height: number;
  href: string;
  external?: boolean;
  ariaLabel: string;
  newTab?: boolean;
};

type SectionDef = {
  id: string;
  src: string;
  alt: string;
  topColor: string;
  bottomColor: string;
  overlays: Overlay[];
  navLinks?: Array<{ targetId: string; left: number; width: number; ariaLabel: string }>;
  logoLink?: { left: number; width: number };
};

const sections: SectionDef[] = [
  {
    id: "topo",
    src: s1,
    alt: "Você pode emitir notas fiscais apenas enviando um áudio no WhatsApp. A Lívia entende e gera no mesmo instante.",
    topColor: "rgb(196,219,209)",
    bottomColor: "rgb(243,244,243)",
    logoLink: { left: 1.43, width: 20 },
    navLinks: [
      { targetId: "como-funciona", left: 22.86, width: 16.43, ariaLabel: "Como Funciona" },
      { targetId: "a-livia", left: 41.43, width: 10, ariaLabel: "A Lívia" },
      { targetId: "para-quem-e", left: 53.57, width: 14.29, ariaLabel: "Para quem é" },
      { targetId: "demonstracao", left: 69.29, width: 15, ariaLabel: "Demonstração" },
      { targetId: "pre-lancamento", left: 85.71, width: 12.86, ariaLabel: "Pré Lançamento" },
    ],
    overlays: [
      { top: 84.76, left: 20, width: 24.3, height: 9.52, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "como-funciona",
    src: s2,
    alt: "Para você, emitir nota fiscal ainda leva tempo demais? Abrir sistema, preencher dados, gerar nota, enviar para o cliente.",
    topColor: "rgb(233,233,232)",
    bottomColor: "rgb(234,233,234)",
    overlays: [
      { top: 23.33, left: 2.14, width: 37.86, height: 16.67, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "a-livia",
    src: s3,
    alt: "Agora imagine fazer tudo isso no WhatsApp.",
    topColor: "rgb(232,232,233)",
    bottomColor: "rgb(206,204,206)",
    overlays: [
      { top: 60.66, left: 65.71, width: 31.43, height: 16.39, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "para-quem-e",
    src: s4,
    alt: "Tudo o que você precisa para emitir notas pelo WhatsApp. A Lívia conecta sua operação ao sistema da Quero Faturar.",
    topColor: "rgb(202,200,201)",
    bottomColor: "rgb(206,209,185)",
    overlays: [],
  },
  {
    id: "tecnologia",
    src: s5,
    alt: "A tecnologia da Quero Faturar já ajuda milhares de empresas. Mais de 12 milhões de notas, 55 mil empresas, R$75 bilhões emitidos.",
    topColor: "rgb(187,196,165)",
    bottomColor: "rgb(240,242,242)",
    overlays: [
      { top: 4.84, left: 62.86, width: 34.29, height: 16.13, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "demonstracao",
    src: s6,
    alt: "A Lívia será lançada em breve. Estamos liberando conteúdos exclusivos até o dia do lançamento.",
    topColor: "rgb(240,242,242)",
    bottomColor: "rgb(209,231,222)",
    overlays: [
      { top: 63.38, left: 2.14, width: 37.86, height: 14.08, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "pre-lancamento",
    src: s7,
    alt: "Entre no grupo VIP. Veja a Lívia funcionando antes de todo mundo.",
    topColor: "rgb(187,211,204)",
    bottomColor: "rgb(210,227,214)",
    overlays: [
      { top: 64.86, left: 27.86, width: 42.14, height: 13.51, href: VIP_URL, newTab: true, ariaLabel: "Entrar no grupo VIP" },
    ],
  },
  {
    id: "rodape",
    src: s8,
    alt: "Quero Faturar - Excelente, 1.934 avaliações, verificada por Reclame Aqui. Contato: contato@querofaturar.com.br, (61) 3567-0042.",
    topColor: "rgb(210,228,215)",
    bottomColor: "rgb(255,255,255)",
    overlays: [
      { top: 7.04, left: 27.14, width: 27.14, height: 32.86, href: RECLAME_AQUI_URL, newTab: true, ariaLabel: "Verificada por Reclame Aqui" },
      { top: 21.13, left: 61.43, width: 35.71, height: 11.74, href: `mailto:${EMAIL}`, ariaLabel: `Enviar e-mail para ${EMAIL}` },
      { top: 37.56, left: 65.71, width: 23.57, height: 11.74, href: `tel:${PHONE_TEL}`, ariaLabel: "Telefone (61) 3567-0042" },
      { top: 56.34, left: 65.71, width: 23.57, height: 11.74, href: PHONE_WHATSAPP, newTab: true, ariaLabel: "WhatsApp (61) 3567-0042" },
      { top: 75.12, left: 45, width: 17.86, height: 9.39, href: PRIVACY_URL, ariaLabel: "Política de Privacidade" },
      { top: 72.77, left: 84.29, width: 12.86, height: 14.08, href: DIATECH_URL, newTab: true, ariaLabel: "Site da Diatech Sistemas" },
    ],
  },
];

function Overlay({ overlay }: { overlay: Overlay }) {
  return (
    <a
      href={overlay.href}
      target={overlay.newTab ? "_blank" : undefined}
      rel={overlay.newTab ? "noopener noreferrer" : undefined}
      aria-label={overlay.ariaLabel}
      className="absolute hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
      style={{
        top: `${overlay.top}%`,
        left: `${overlay.left}%`,
        width: `${overlay.width}%`,
        height: `${overlay.height}%`,
      }}
    />
  );
}

export default function Home() {
  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      {sections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          className="relative w-full flex items-start justify-center"
          style={{
            backgroundColor: sec.bottomColor,
          }}
        >
          <div className="relative w-full">
            <img
              src={sec.src}
              alt={sec.alt}
              className="block w-full h-auto select-none"
              draggable={false}
              style={{ pointerEvents: "none" }}
              loading={sec.id === "topo" ? "eager" : "lazy"}
            />

            {sec.logoLink && (
              <a
                href="#topo"
                aria-label="Quero Faturar - Início"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="absolute hover:opacity-70 transition-opacity"
                style={{
                  top: "1.9%",
                  left: `${sec.logoLink.left}%`,
                  width: `${sec.logoLink.width}%`,
                  height: "6.67%",
                }}
              />
            )}

            {sec.navLinks?.map((nl) => (
              <a
                key={nl.targetId}
                href={`#${nl.targetId}`}
                onClick={handleNav(nl.targetId)}
                aria-label={nl.ariaLabel}
                className="absolute hover:opacity-70 transition-opacity"
                style={{
                  top: "2.86%",
                  left: `${nl.left}%`,
                  width: `${nl.width}%`,
                  height: "5.71%",
                }}
              />
            ))}

            {sec.overlays.map((overlay, i) => (
              <Overlay key={i} overlay={overlay} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
