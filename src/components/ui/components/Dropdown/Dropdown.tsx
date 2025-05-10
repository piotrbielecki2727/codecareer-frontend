"use client";

import * as React from "react";
import { Button } from "../Button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./base";

export interface DropdownOption<T> {
  label: string;
  value: T;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface DropdownProps<T> {
  options: DropdownOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  disabled?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

export const Dropdown = <T extends string | number>({
  options,
  value,
  onChange,
  placeholder = "Select…",
  disabled = false,
  triggerClassName,
  contentClassName,
}: DropdownProps<T>): React.ReactElement => {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          className={cn("justify-between w-full", triggerClassName)}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={4}
        className={cn("w-full min-w-[8rem] p-1", contentClassName)}
      >
        {options.map((opt) => (
          <DropdownMenuItem
            key={String(opt.value)}
            onSelect={() => onChange?.(opt.value)}
            disabled={opt.disabled}
          >
            {opt.icon}
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
