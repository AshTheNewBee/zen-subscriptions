import styles from "./ZenButton.module.scss";

interface Props {
  _id?: string;
  title?: string;
  action: Function; //() => void
  disabled?: boolean;
}

export const ZenButton = ({
  _id,
  title,
  action,
  disabled = false,
}: Props): JSX.Element => {
  return (
    <button
      id={_id}
      className={styles.button}
      onClick={() => action()}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
