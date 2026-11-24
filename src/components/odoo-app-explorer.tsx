'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const applications=[
{id:'crm',name:'CRM',category:'Comercial',icon:'/images/odoo/apps/crm.png',description:'Organiza oportunidades, actividades y seguimiento comercial.'},
{id:'sale',name:'Ventas',category:'Comercial',icon:'/images/odoo/apps/sale.png',description:'Conecta cotizaciones y pedidos con inventario y facturación.'},
{id:'stock',name:'Inventario',category:'Operación',icon:'/images/odoo/apps/stock.png',description:'Gestiona existencias, movimientos y abastecimiento desde el ERP.'},
{id:'purchase',name:'Compras',category:'Operación',icon:'/images/odoo/apps/purchase.png',description:'Relaciona órdenes de compra, recepción y control de proveedores.'},
{id:'account',name:'Contabilidad',category:'Finanzas',icon:'/images/odoo/apps/account.png',description:'Centraliza facturas y registros contables. La emisión de DTE se integra según el alcance del proyecto.'},
] as const;
const categories=['Todas','Comercial','Operación','Finanzas'] as const;
type Category=(typeof categories)[number];
export function OdooAppExplorer(){
 const[category,setCategory]=useState<Category>('Todas');const[activeId,setActiveId]=useState('crm');
 return <Card className="odoo-explorer"><CardHeader className="odoo-explorer-header"><div><CardTitle>Aplicaciones Odoo</CardTitle><CardDescription>Selecciona un área para explorar sus módulos.</CardDescription></div><Badge variant="outline">Interactivo</Badge></CardHeader>
 <CardContent className="odoo-explorer-content"><Tabs value={category} onValueChange={v=>setCategory(v as Category)}>
 <TabsList aria-label="Filtrar aplicaciones Odoo" className="odoo-tabs-list">{categories.map(c=><TabsTrigger key={c} value={c}>{c}</TabsTrigger>)}</TabsList>
 {categories.map(c=>{const items=c==='Todas'?applications:applications.filter(a=>a.category===c);const selected=items.find(a=>a.id===activeId)??items[0];
 return <TabsContent key={c} value={c} className="odoo-tabs-panel"><div className="odoo-app-picker">
 <div className="odoo-app-grid" aria-label="Aplicaciones disponibles">{items.map(app=><Button key={app.id} variant="app" aria-pressed={selected.id===app.id} className="odoo-app-option" onClick={()=>setActiveId(app.id)}><Image src={app.icon} alt="" width={48} height={48} className="odoo-app-icon"/><span>{app.name}</span></Button>)}</div>
 <Card className="odoo-app-detail" aria-live="polite"><CardContent className="odoo-app-detail-content"><Image src={selected.icon} alt="" width={58} height={58} className="odoo-app-detail-icon"/><Badge variant="secondary" className="odoo-standard-badge">Aplicación estándar</Badge><CardTitle>{selected.name}</CardTitle><CardDescription>{selected.description}</CardDescription><span className="odoo-category">{selected.category} · Odoo</span></CardContent></Card>
 </div></TabsContent>})}</Tabs></CardContent></Card>;
}
