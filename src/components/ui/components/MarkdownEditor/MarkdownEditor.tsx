'use client';

import { Label, Popover } from '@/components/ui';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { cn } from '@/lib/utils';
import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import { Eye, Edit, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type MarkdownEditorProps<T extends FieldValues> = {
  label: string;
  placeholder?: string;
  rows?: number;
} & UseControllerProps<T, FieldPath<T>>;

const md = new MarkdownIt({
  html: false,
  xhtmlOut: false,
  breaks: true,
  linkify: true,
  typographer: true,
});

export const MarkdownEditor = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  rows = 8,
}: MarkdownEditorProps<T>) => {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const { t } = useTranslation();

  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control, rules });

  const htmlContent = value ? md.render(value) : '';

  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='text-sm font-medium'>
        {label}
      </Label>

      <div className='border rounded-md overflow-hidden'>
        <div className='flex items-center justify-between border-b bg-muted/30 '>
          <div className='flex'>
            <button
              type='button'
              className={cn(
                'flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors',
                activeTab === 'edit'
                  ? 'bg-background border-b-2 border-primary text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setActiveTab('edit')}
            >
              <Edit size={14} />
              {t('postJob.edit')}
            </button>
            <button
              type='button'
              className={cn(
                'flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors',
                activeTab === 'preview'
                  ? 'bg-background border-b-2 border-primary text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
                !value && 'opacity-50  hover:text-muted-foreground'
              )}
              onClick={() => setActiveTab('preview')}
              disabled={!value}
            >
              <Eye size={14} />
              {t('postJob.preview')}
            </button>
          </div>
          <Popover
            trigger={
              <button
                type='button'
                className='p-2 text-muted-foreground hover:text-foreground'
              >
                <Info size={16} />
              </button>
            }
            title={t('postJob.formatting')}
            icon={<Info size={14} className='text-muted-foreground' />}
          >
            <div className='grid grid-cols-2 gap-2 text-xs text-muted-foreground'>
              <div>
                <code className='bg-background px-1 rounded'>
                  **{t('postJob.bold')}**
                </code>
              </div>
              <div>
                <code className='bg-background px-1 rounded'>
                  *{t('postJob.italic')}*
                </code>
              </div>
              <div>
                <code className='bg-background px-1 rounded'>
                  # {t('postJob.heading')}
                </code>
              </div>
              <div>
                <code className='bg-background px-1 rounded'>
                  ## {t('postJob.subheading')}
                </code>
              </div>
              <div>
                <code className='bg-background px-1 rounded'>
                  - {t('postJob.list')}
                </code>
              </div>
              <div>
                <code className='bg-background px-1 rounded'>
                  1. {t('postJob.orderedList')}
                </code>
              </div>
            </div>
          </Popover>
        </div>

        <div className='bg-neutral-100 dark:bg-neutral-900'>
          {activeTab === 'edit' ? (
            <textarea
              id={name}
              value={value ?? ''}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              rows={rows}
              className={cn(
                'w-full p-3 border-0 resize-none',
                'focus:outline-none focus:ring-0',
                'font-mono text-sm ',
                error && 'border-red-500'
              )}
            />
          ) : (
            <div className='p-3'>
              {value ? (
                <div
                  className={cn(
                    'text-sm leading-relaxed',
                    '[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-2 [&_h1]:mt-0',
                    '[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-2',
                    '[&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:mt-2',
                    '[&_p]:mb-2 [&_p]:mt-0',
                    '[&_strong]:font-semibold',
                    '[&_em]:italic',
                    '[&_ul]:list-disc [&_ul]:ml-4 [&_ul]:mb-2 [&_ul]:pl-4',
                    '[&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:mb-2 [&_ol]:pl-5',
                    '[&_li]:mb-1 [&_li]:list-item',
                    '[&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono',
                    '[&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:overflow-x-auto [&_pre]:my-4',
                    '[&_pre_code]:bg-transparent [&_pre_code]:p-0',
                    '[&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:my-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground'
                  )}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              ) : (
                <p className='text-muted-foreground text-sm'>
                  {t('postJob.noContentPreview', 'Brak treści do wyświetlenia')}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};
