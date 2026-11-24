'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/config/site';

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return <header className="site-header">
    <div className="container flex h-[76px] items-center justify-between">
      <Link aria-label="VELATEK, inicio" href="/" onClick={() => setOpen(false)} className="logo-frame"><Image src="/images/velatek-logo.png" alt="VELATEK" width={174} height={66} priority className="logo-image"/></Link>
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">{site.navigation.map(item => <Link className="nav-link" href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      <Link className="button-primary hidden min-h-[42px] md:inline-flex" href="/contacto">Hablar de Odoo <ArrowUpRight size={16}/></Link>
      <button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(value => !value)} className="grid min-h-11 min-w-11 place-items-center rounded-md border border-[#d7dfd5] text-[#182019] md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    {open && <nav id="mobile-nav" aria-label="Navegación móvil" className="mobile-menu container flex flex-col gap-1 py-3 md:hidden">{site.navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-[#29322a] hover:bg-[#eff5ec]">{item.label}</Link>)}</nav>}
  </header>;
}
