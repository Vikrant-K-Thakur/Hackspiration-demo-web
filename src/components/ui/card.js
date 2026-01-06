export function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-white font-bold ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`text-white/70 ${className}`} {...props}>
      {children}
    </div>
  )
}