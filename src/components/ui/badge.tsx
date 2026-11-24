import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
type Variant='default'|'secondary'|'outline';interface Props extends HTMLAttributes<HTMLSpanElement>{variant?:Variant}
export function Badge({className,variant='default',...props}:Props){return <span className={cn('ui-badge',`ui-badge-${variant}`,className)} {...props}/>;}
