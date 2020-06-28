export default function open(loaderVar) {
  const openLoader = () => {
    loaderVar({
      open: true,
      _typename: "loader",
    });
  };
  return openLoader;
}
