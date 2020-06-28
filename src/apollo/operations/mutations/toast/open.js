export default function open(toastVar) {
  return (message, severity) => {
    toastVar({ message, severity, open: true });
  };
}
