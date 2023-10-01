import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  label: string;
}

export default function LabeledIcon({ icon, label }: IconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <p className="text-black">{label}</p>
    </div>
  );
}
