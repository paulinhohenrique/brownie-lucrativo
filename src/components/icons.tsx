import type {SVGProps} from 'react';

export function BrownieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z" />
      <path d="M7 8V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
      <path d="m12 17-1-1-1 1" />
      <path d="m17 12-1-1-1 1" />
      <path d="m7 12-1-1-1 1" />
    </svg>
  );
}
