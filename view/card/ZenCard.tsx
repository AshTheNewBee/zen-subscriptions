import styles from "./ZenCard.module.scss";

interface Props {
  _id?: string;
  content?: any;
}

export const ZenCard = ({ _id, content }: Props): JSX.Element => {
  return (
    <div className={styles.card} id={_id}>
      {content}
    </div>
  );
};
