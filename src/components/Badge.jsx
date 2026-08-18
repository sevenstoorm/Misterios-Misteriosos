function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
