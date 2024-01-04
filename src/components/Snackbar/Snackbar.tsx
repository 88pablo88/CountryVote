import styles from './Styles.module.scss';
interface Props {
  onClose: () => void;
  message: string;
}

export const Snackbar = ({ message, onClose }: Props) => {
  return (
    <div className={styles.snackbar}>
      <div className={styles.messageContainer}>
        <p>{message}</p>
        <p onClick={onClose} style={{ fontSize: '35px', cursor: "pointer" }}>
          &times;
        </p>
      </div>
    </div>
  );
};
