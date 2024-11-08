//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import styles from './Card.module.css';

const Card = ({ nombre, comidaFavorita }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.titleCard}>¡¡Cómo te va {nombre} !!</h2>
      <p>Mucho gusto de conocerte y saber que tu comida favorita es {comidaFavorita}</p>
    </div>
  );
};

export default Card;