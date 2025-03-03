export function SmallSpinner() {
  return (
    <div
      className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent"
      aria-label="Loading spinner"
    />
  );
}

export function Spinner() {
  return (
    <div
      className="h-16 w-16 animate-spin rounded-full border-2 border-black border-t-transparent"
      aria-label="Loading spinner"
    />
  );
}
