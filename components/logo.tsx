import { Icon } from "@iconify/react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-xl font-semibold">
      <Icon icon="solar:link-bold" className="text-primary" height={24} />
      <span>ShrinkLink</span>
    </div>
  );
}
