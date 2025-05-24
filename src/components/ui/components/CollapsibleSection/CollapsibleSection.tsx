'use client';

import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent as ShadcnCollapsibleContent,
  CollapsibleTrigger as ShadcnCollapsibleTrigger,
} from '@/components/ui/shadcnComponents/collapsible';
import { ChevronDown } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  label: string;
  content: ReactNode;
  defaultOpen?: boolean;
};

export const CollapsibleSection = ({
  label,
  content,
  defaultOpen = false,
}: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <ShadcnCollapsible open={open} onOpenChange={setOpen}>
      <ShadcnCollapsibleTrigger
        className={cn(
          'flex items-center justify-between w-full px-4 py-2 text-sm font-medium bg-muted rounded-md transition-colors hover:bg-muted/70',
          'data-[state=open]:rounded-b-none'
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </ShadcnCollapsibleTrigger>
      <ShadcnCollapsibleContent className='rounded-b-md border border-t-0 border-muted bg-muted/50 px-4 py-3 text-sm text-muted-foreground'>
        {content}
      </ShadcnCollapsibleContent>
    </ShadcnCollapsible>
  );
};
