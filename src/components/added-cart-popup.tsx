import { FunctionComponent, useCallback } from "react";
import styles from "./added-cart-popup.module.css";

type AddedCartPopupType = {
  onClose?: () => void;
};

const AddedCartPopup: FunctionComponent<AddedCartPopupType> = ({ onClose }) => {
  const onText1Click = useCallback(() => {
    // Please sync "cart-added" to the project
  }, []);

  return (
    <div className={styles.addedCartPopup}>
      <div className={styles.parent}>
        <div className={styles.div}>{`상품을 카트에 추가했습니다 `}</div>
        <b className={styles.b} onClick={onText1Click}>{`보러가기 >`}</b>
      </div>
    </div>
  );
};

export default AddedCartPopup;
