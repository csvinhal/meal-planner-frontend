export default function close(toastVar) {
  return () => {
    toastVar({ message: "", severity: "success", open: false });
  };
}
