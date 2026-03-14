/* eslint-disable @next/next/no-img-element */
export default function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <img
      src="/whatsapp.svg"
      alt="WhatsApp"
      width={size}
      height={size}
      style={{ verticalAlign: 'middle', display: 'inline-block', flexShrink: 0, borderRadius: 4 }}
    />
  );
}
