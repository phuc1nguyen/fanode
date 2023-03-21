export function resFromData(data) {
  return { error: '', data };
}

export function resFromError(err) {
  return { error: err && err.message ? err.message : String(err), data: {} };
}
