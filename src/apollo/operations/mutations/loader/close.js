export default function close(loaderVar) {
  const closeLoader = () => {
    loaderVar({
      open: false,
    });
  };
  return closeLoader;
}
