'use client';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { site } from '@/config/site';
export function Header() {
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b09]/90 backdrop-blur-xl"><div className="container flex h-[76px] items-center justify-between"><Link aria-label="VELATEK, ir al inicio" href="/" onClick={()=>setOpen(false)} className="flex items-center gap-3 font-black tracking-[.14em] text-xl"><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#72C261]/50 bg-[#72C261]/10 text-[#72C261]">V</span>VELATEK</Link><nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">{site.navigation.map(item=><Link className="text-sm text-[#bdc8bd] transition hover:text-white" href={item.href} key={item.href}>{item.label}</Link>)}</nav><Link className="button-primary hidden md:inline-flex" href="/contacto">Hablemos <ArrowUpRight size={17}/></Link><button type="button" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)} className="rounded-lg border border-white/15 p-2 md:hidden">{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-nav" aria-label="Navegación móvil" className="container flex flex-col gap-1 border-t border-white/10 py-4 md:hidden">{site.navigation.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 text-sm hover:bg-white/10">{item.label}</Link>)}</nav>}</header>;
}
