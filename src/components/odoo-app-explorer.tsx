'use client';

import Image from 'next/image';
import { useState } from 'react';

const apps = [
  { id: 'crm', name: 'CRM', category: 'Comercial', icon: '/images/odoo/apps/crm.png', description: 'Organiza oportunidades, actividades y seguimiento comercial en un flujo compartido.' },
  { id: 'sale', name: 'Ventas', category: 'Comercial', icon: '/images/odoo/apps/sale.png', description: 'Conecta cotizaciones y pedidos con inventario, facturación y operación.' },
  { id: 'stock', name: 'Inventario', category: 'Operación', icon: '/images/odoo/apps/stock.png', description: 'Gestiona existencias, movimientos y abastecimiento dentro del ERP.' },
  { id: 'purchase', name: 'Compras', category: 'Operación', icon: '/images/odoo/apps/purchase.png', description: 'Relaciona solicitudes, órdenes de compra y recepción de productos.' },
  { id: 'account', name: 'Contabilidad', category: 'Finanzas', icon: '/images/odoo/apps/account.png', description: 'Centraliza facturas y registros contables; la emisión de DTE se integra según el alcance del proyecto.' },
] as const;

const filters = ['Todas', 'Comercial', 'Operación', 'Finanzas'] as const;

export function OdooAppExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todas');
  const [activeId, setActiveId] = useState<string>('crm');
  const visibleApps = filter === 'Todas' ? apps : apps.filter(app => app.category === filter);
  const activeApp = visibleApps.find(app => app.id === activeId) ?? visibleApps[0];

  return <section className="odoo-explorer" aria-label="Explora aplicaciones de Odoo">
    <div className="odoo-explorer-heading"><span className="odoo-explorer-title">Aplicaciones empresariales</span><span className="odoo-explorer-note">Vista interactiva</span></div>
    <div className="odoo-explorer-filters" aria-label="Filtrar aplicaciones">
      {filters.map(item => <button key={item} type="button" className="odoo-filter" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
    </div>
    <div className="odoo-explorer-body">
      <div className="odoo-app-grid" aria-label="Aplicaciones disponibles">
        {visibleApps.map(app => <button key={app.id} type="button" className="odoo-app-option" aria-pressed={activeApp.id === app.id} onClick={() => setActiveId(app.id)}>
          <Image src={app.icon} alt="" width={52} height={52} className="odoo-app-icon"/>
          <span className="odoo-app-name">{app.name}</span>
        </button>)}
      </div>
      <article className="odoo-app-detail" aria-live="polite">
        <Image src={activeApp.icon} alt="" width={52} height={52}/>
        <h3>{activeApp.name}</h3>
        <p>{activeApp.description}</p>
        <small>{activeApp.category} · Aplicación de Odoo</small>
      </article>
    </div>
  </section>;
}
