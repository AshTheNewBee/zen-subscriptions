import styles from "./ZenColumn.module.scss";

interface Props {
  _id?: string;
  heading?: string;
  rows?: JSX.Element;
}

export const ZenColumn = ({ _id, heading, rows }: Props): JSX.Element => {
  return (
    <div className={styles.column} id={_id}>
      <h4>{heading}</h4>
      <>{rows}</>
    </div>
  );
};
