import styles from "./ZenRow.module.scss";

interface Props {
  _id?: string;
  label?: string;
  value?: string;
}

export const ZenRow = ({ _id, label, value }: Props): JSX.Element => {
  return (
    <div className={_id}>
      <div className={styles.row} id="row">
        <span className={styles.label} id="label">
          {label}
        </span>
        <span className={styles.value} id="value">
          {value}
        </span>
      </div>
    </div>
  );
};
