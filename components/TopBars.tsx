import { WHATSAPP_LINK } from "@/lib/format";
import { InstagramIcon, MailIcon } from "./icons";

const messages = [
  "Semijoias hipoalergênicas — livres de níquel",
  "Até 6x sem juros no cartão",
  "Frete para todo o Brasil",
  "5% OFF pagando com PIX",
  "Contraste registrado em cada peça",
];

export function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-gold/20 bg-ink">
      {/* A lista é duplicada pra o loop de -50% emendar sem salto. */}
      <div className="inline-flex animate-ticker">
        {[...messages, ...messages].map((message, i) => (
          <span
            key={i}
            aria-hidden={i >= messages.length}
            className="border-r border-gold/20 px-8 py-2 text-xs tracking-wider text-muted"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}

const iconBtn =
  "inline-flex size-[30px] items-center justify-center rounded-full border border-gold/20 text-gold transition-colors hover:border-gold";

export function InfoBar() {
  return (
    <div className="border-b border-gold/20 text-[11px] text-muted sm:text-[13px]">
      <div className="wrap flex items-center justify-between gap-4 py-2">
        <div className="flex flex-wrap gap-5">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="hover:text-cream">
            Atendimento via WhatsApp
          </a>
          <span className="hidden md:inline">Bom Jesus · PI — enviamos para todo o Brasil</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span>Frete grátis acima de R$199</span>
          <a className={iconBtn} href="#" aria-label="Instagram">
            <InstagramIcon width={15} height={15} />
          </a>
          <a className={iconBtn} href="#" aria-label="Fale conosco">
            <MailIcon width={15} height={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
