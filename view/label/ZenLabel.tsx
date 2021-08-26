import styles from "./ZenLabel.module.scss";

interface Props {
  _id?: string;
  label?: string;
}

export const ZenLabel = ({ _id, label }: Props): JSX.Element => {
  return (
    <div className={styles.label} id={_id}>
      <label htmlFor={_id}>{label}</label>
    </div>
  );
};
