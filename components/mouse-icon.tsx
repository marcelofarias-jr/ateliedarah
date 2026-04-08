export function MouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 60 28" 
      fill="currentColor" 
      className={className}
    >
      {/* Mouse body - side view facing right */}
      <ellipse cx="16" cy="16" rx="12" ry="9" />
      {/* Ear */}
      <ellipse cx="9" cy="9" rx="5" ry="4" />
      {/* Inner ear */}
      <ellipse cx="9" cy="9" rx="3" ry="2.5" fill="currentColor" opacity="0.3" />
      {/* Eye - hollow */}
      <circle cx="8" cy="15" r="2" fill="black" />
      <circle cx="7.5" cy="14.5" r="0.7" fill="white" />
      {/* Nose */}
      <ellipse cx="4" cy="17" rx="2" ry="1.5" />
      {/* Whiskers */}
      <line x1="5" y1="16" x2="1" y2="14" stroke="currentColor" strokeWidth="0.5" />
      <line x1="5" y1="17" x2="1" y2="17" stroke="currentColor" strokeWidth="0.5" />
      <line x1="5" y1="18" x2="1" y2="20" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Tail forming R - single clean path */}
      <path 
        d="M28 16 
           Q 34 16, 38 10
           Q 42 4, 38 2
           Q 34 0, 32 4
           Q 30 8, 36 8
           Q 40 8, 42 12
           L 48 24"
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
