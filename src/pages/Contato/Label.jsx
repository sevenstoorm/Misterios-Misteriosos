function Label({ htmlFor, children }) {
  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-emerald-900">
        {children}
      </label>
    </div>
  );
}

export default Label;