'use client';

import { cn } from '@/lib/utils';
import { IOption } from '@/types/interfaces';

interface Props {
  spec: IOption;
  isSelected: boolean;
  isAnySelected: boolean;
  onClick: () => void;
  className?: string;
}

export const SpecializationPill = ({
  spec,
  isSelected,
  isAnySelected,
  onClick,
  className,
}: Props) => {
  const isDimmed = isAnySelected && !isSelected;

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-10 h-10 flex flex-col items-center justify-center text-white rounded-full relative cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'hover:scale-110',
        isSelected ? 'ring-2 ring-white' : '',
        isDimmed
          ? 'bg-gray-400 dark:bg-gray-500'
          : bgColors[spec.value] || 'bg-gray-500',
        className
      )}
      title={spec.label}
    >
      <div className='text-lg'>{spec.icon}</div>
      <span className='text-[12px] absolute -bottom-5 w-max text-center font-bolder text-accent-foreground whitespace-nowrap'>
        {spec.label}
      </span>
    </button>
  );
};

const bgColors: Record<string, string> = {
  frontend: 'bg-gradient-to-tr from-purple-500 to-purple-700',
  backend: 'bg-gradient-to-tr from-blue-500 to-blue-700',
  fullstack: 'bg-gradient-to-tr from-pink-500 to-pink-700',
  mobile: 'bg-gradient-to-tr from-rose-500 to-rose-700',
  devops: 'bg-gradient-to-tr from-indigo-500 to-indigo-700',
  qa: 'bg-gradient-to-tr from-orange-500 to-orange-700',
  'ui-ux-design': 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
  'data-science': 'bg-gradient-to-tr from-sky-500 to-sky-700',
  'data-engineering': 'bg-gradient-to-tr from-cyan-500 to-cyan-700',
  pm: 'bg-gradient-to-tr from-teal-500 to-teal-700',
  'ai-ml': 'bg-gradient-to-tr from-fuchsia-500 to-fuchsia-700',
  analytics: 'bg-gradient-to-tr from-sky-500 to-sky-700',
  'sap-erp': 'bg-gradient-to-tr from-zinc-500 to-zinc-700',
  'it-admin': 'bg-gradient-to-tr from-slate-500 to-slate-700',
  security: 'bg-gradient-to-tr from-red-600 to-red-800',
  helpdesk: 'bg-gradient-to-tr from-lime-500 to-lime-700',
  'content-management': 'bg-gradient-to-tr from-amber-500 to-amber-700',
  'big-data': 'bg-gradient-to-tr from-green-500 to-green-700',
  'game-dev': 'bg-gradient-to-tr from-rose-600 to-rose-800',
};
