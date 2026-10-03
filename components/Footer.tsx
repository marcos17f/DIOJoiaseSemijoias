import { WHATSAPP_LINK } from "@/lib/format";
import { Brand } from "./Brand";
import { InstagramIcon, MailIcon } from "./icons";

const columns = [
  {
    title: "Categorias",
    links: ["Anéis", "Brincos", "Chokers", "Colares", "Pulseiras", "Moissanite", "Conjuntos", "Outlet"],
  },
  {
    title: "Institucional",
    links: [
      "Nosso blog",
      "Semijoias sem níquel",
      "Política de garantia",
      "Trocas e devoluções",
      "Formas de pagamento",
      "Como saber o aro do anel",
      "Sobre nós",
    ],
  },
];

const support = ["Fale conosco", "Política de privacidade", "Dúvidas frequentes", "Meus pedidos"];
const payments = ["PIX", "VISA", "MASTER", "ELO", "HIPER"];

const heading = "mb-4 text-xs font-bold uppercase tracking-widest text-gold";
const link = "text-sm text-muted transition-colors hover:text-cream";
const iconBtn =
  "inline-flex size-[30px] items-center justify-center rounded-full border border-gold/20 text-gold transition-colors hover:border-gold";

export function Footer() {
  return (
    <footer className="pt-16">
      <div className="wrap">
        <div className="grid gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-muted">
              Semijoias em prata 925 com moissanite, com contraste registrado — naturalmente marcante, de
              Bom Jesus (PI) para todo o Brasil.
            </p>
            <div className="mt-4 flex gap-2.5">
              <a className={iconBtn} href="#" aria-label="Instagram">
                <InstagramIcon width={15} height={15} />
              </a>
              <a className={iconBtn} href="#" aria-label="Fale conosco">
                <MailIcon width={15} height={15} />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className={heading}>{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((label) => (
                  <li key={label}>
                    <a href="#" className={link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className={heading}>Ajuda e suporte</h3>
            <ul className="flex flex-col gap-2.5">
              {support.map((label) => (
                <li key={label}>
                  <a href="#" className={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className={`${heading} mt-6`}>Atendimento</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>(89) 8132-8198</li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className={link}>
                  WhatsApp
                </a>
              </li>
              <li className="text-[13px] text-muted">Seg. à sex. 9h–18h · sáb. 9h–13h</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gold/20 py-5">
          <div className="flex gap-2">
            {payments.map((payment) => (
              <span
                key={payment}
                className="rounded border border-gold/20 px-2 py-1 text-[11px] tracking-wide text-muted"
              >
                {payment}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 text-[13px] text-muted">
            <span className="flex size-7 items-center justify-center rounded-full border border-gold font-display text-[9px] font-bold text-gold">
              925
            </span>
            4.9 · 148 avaliações verificadas
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pb-24 pt-4 text-xs text-muted sm:pb-7">
          <span>DIO Joias &amp; Semijoias</span>
          <span>· Bom Jesus, Piauí · Enviamos para todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
