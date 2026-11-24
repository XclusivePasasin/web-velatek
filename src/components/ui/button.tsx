import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
type Variant='default'|'secondary'|'outline'|'ghost'|'app';type Size='default'|'sm'|'icon';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:Variant;size?:Size}
export function Button({className,variant='default',size='default',type='button',...props}:Props){return <button className={cn('ui-button',`ui-button-${variant}`,`ui-button-size-${size}`,className)} type={type} {...props}/>;}
