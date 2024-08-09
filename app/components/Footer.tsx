import { Facebook, Instagram, Mail } from "lucide-react";

const now = new Date();
const year = now.getFullYear();

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-brand-black text-brand-white">
      <div className="mx-auto max-w-5xl px-4 flex gap-4 flex-col lg:flex-row justify-between items-center lg:items-baseline">
        <div>&#169; {year} Zamrood by PT Teknologi Pandu Wisata</div>
        <ul className="flex gap-6">
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Mail />
          </li>
        </ul>
      </div>
    </footer>
  );
}
