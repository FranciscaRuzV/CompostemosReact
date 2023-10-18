export default function userIcon({ nombre }) {
  const randomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  const styles = {
    borderRadius: "50%",
    backgroundColor: randomColor(),
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    margin: "0 20px",
  };
  const h6 = {
    lineHeight: "30px",
    color: "white",
    fontSize: "13px",
  };
  return (
    <div style={styles}>
      <h6 style={h6}>{nombre.charAt(0).toUpperCase()}</h6>
    </div>
  );
}
