import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login-popup.module.css";

type LoginPopupType = {
  onClose?: () => void;
};

const LoginPopup: FunctionComponent<LoginPopupType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/findpassword");
  }, [navigate]);

  const onButtonFacebookClick = useCallback(() => {
    window.open("https://www.facebook.com/login/?locale=ko_KR");
  }, []);

  const onButtonKakaoClick = useCallback(() => {
    window.open(
      "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fservice%3D8%26locale%3Dko%26category%3D25#login"
    );
  }, []);

  const onButtonNaverClick = useCallback(() => {
    window.open(
      "https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D0%26ie%3Dutf8%26query%3D%25EB%2584%25A4%25EC%259D%25B4%25EB%25B2%2584%2B%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8"
    );
  }, []);

  return (
    <div className={styles.loginPopup}>
      <div className={styles.kCulturePassParent}>
        <div className={styles.kCulturePassContainer}>
          <p className={styles.kCulturePass}>K-Culture Pass계정으로</p>
          <p className={styles.kCulturePass}>로그인이나 회원가입을 해주세요.</p>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>이메일</div>
          <input
            className={styles.placeholder}
            type="email"
            placeholder="이메일을 입력하세요."
          />
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>비밀번호</div>
          <input
            className={styles.placeholder}
            type="password"
            placeholder="비밀번호를 입력하세요"
            maxLength={12}
          />
        </div>
        <button className={styles.buttonLogin} onClick={onButtonLoginClick}>
          <div className={styles.login}>로그인</div>
        </button>
        <div className={styles.wrapper}>
          <div className={styles.div2} onClick={onText2Click}>
            비밀번호 재설정
          </div>
        </div>
      </div>
      <div className={styles.snsLogin}>
        <div className={styles.container}>
          <div className={styles.div3}>회원가입</div>
        </div>
        <button
          className={styles.buttonFacebook}
          onClick={onButtonFacebookClick}
        >
          <div className={styles.login}>Facebook으로 시작</div>
        </button>
        <button className={styles.buttonKakao} onClick={onButtonKakaoClick}>
          <div className={styles.login2}>카카오톡으로 시작</div>
        </button>
        <button className={styles.buttonNaver} onClick={onButtonNaverClick}>
          <div className={styles.login2}>네이버로 시작</div>
        </button>
      </div>
      <button className={styles.x} onClick={onClose}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </button>
    </div>
  );
};

export default LoginPopup;
