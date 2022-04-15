import styles from "./CharPrev.module.scss";

const CharPrev = (props) => {
  const data = props.data || {
    name: "Character",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  return (
    <div className={styles.char}>
      <img src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </div>
  );
};

export { CharPrev };