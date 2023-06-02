import { FunctionComponent, useState, useCallback } from "react";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import PasswordErrorPopup from "../components/password-error-popup";
import { useNavigate } from "react-router-dom";
import styles from "./find-password.module.css";
const FindPassword: FunctionComponent = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoginPopup1Open, setLoginPopup1Open] = useState(false);
  const [isPasswordErrorPopupOpen, setPasswordErrorPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const openLoginPopup1 = useCallback(() => {
    setLoginPopup1Open(true);
  }, []);

  const closeLoginPopup1 = useCallback(() => {
    setLoginPopup1Open(false);
  }, []);

  const openPasswordErrorPopup = useCallback(() => {
    setPasswordErrorPopupOpen(true);
  }, []);

  const closePasswordErrorPopup = useCallback(() => {
    setPasswordErrorPopupOpen(false);
  }, []);

  const onIntroClick = useCallback(() => {
    navigate("/intro");
  }, [navigate]);

  const onProductClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onInstaClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onFaceBookClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onPinterClick = useCallback(() => {
    window.open("https://www.pinterest.co.kr/");
  }, []);

  return (
    <>
      <div className={styles.findPassword}>
        <nav className={styles.naviDiv}>
          <header className={styles.headerNavigation}>
            <div className={styles.logo}>
              <img
                className={styles.logoBackgroundIcon}
                alt=""
                src="/logobackground@2x.png"
              />
              <div className={styles.kCulturePass}>K-Culture Pass</div>
            </div>
            <div className={styles.navigationMenu}>
              <a className={styles.navigationLink}>
                <h2 className={styles.intro} onClick={onIntroClick}>
                  About
                </h2>
                <h2 className={styles.product} onClick={onProductClick}>
                  Event
                </h2>
                <h2 className={styles.mission}>미션</h2>
                <h2 className={styles.map}>지도</h2>
                <b className={styles.customerService}>고객센터</b>
              </a>
              <div className={styles.memberSection}>
                <button className={styles.button} onClick={openLoginPopup}>
                  <div className={styles.register}>Sign in</div>
                </button>
                <button className={styles.button1} onClick={openLoginPopup1}>
                  <div className={styles.logIn}>Log in</div>
                </button>
              </div>
            </div>
            <img
              className={styles.hambugerMenuIcon}
              alt=""
              src="/hambugermenu.svg"
            />
          </header>
        </nav>
        <div className={styles.findPasswordInner}>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <div className={styles.div}>
                <p className={styles.p}>이메일을 확인해주세요.</p>
                <p
                  className={styles.p1}
                >{`입력하신 이메일 주소로 임시 비밀번호를 발송해 `}</p>
                <p className={styles.p1}>드립니다.</p>
              </div>
              <div className={styles.group}>
                <div className={styles.div1}>이메일</div>
                <input
                  className={styles.placeholder}
                  type="email"
                  placeholder="이메일을 입력하세요."
                />
              </div>
            </div>
            <button
              className={styles.buttonLogin}
              onClick={openPasswordErrorPopup}
            >
              <div className={styles.login}>다음</div>
            </button>
          </div>
        </div>
        <footer className={styles.footer}>
          <footer className={styles.footer1}>
            <div className={styles.columns}>
              <div className={styles.columnParent}>
                <div className={styles.column}>
                  <div className={styles.logo}>
                    <img
                      className={styles.logoBackgroundIcon}
                      alt=""
                      src="/logobackground@2x.png"
                    />
                    <div className={styles.kCulturePass}>K-Culture Pass</div>
                  </div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.footerLinks}>
                    <b className={styles.link}>{`주식회사 케이컬처패스   `}</b>
                    <div className={styles.link1}>대표 홍길동</div>
                    <div className={styles.link1}>사업자번호 123-45-67890</div>
                    <div className={styles.link3}>전화번호 070-1234-5678</div>
                    <div className={styles.link4}>
                      이메일 info@kculturepass.co.kr
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.columnWrapper}>
                <div className={styles.column2}>
                  <div className={styles.footerLinks1}>
                    <div className={styles.link5}>서비스이용약관</div>
                    <div className={styles.link5}>개인정보취급방침</div>
                    <div className={styles.link5}>
                      통신판매업 신고번호 제2023-서울강동-1234호
                    </div>
                    <div className={styles.link5}>
                      주소 서울특별시 송파구 송파동 송파대로 123, 7층 701-가호
                      비지니스 센터 A실 (송파빌딩)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.copyright}>
              <div className={styles.snsParent}>
                <div className={styles.sns}>
                  <button className={styles.insta} onClick={onInstaClick} />
                  <button
                    className={styles.faceBook}
                    onClick={onFaceBookClick}
                  />
                  <button className={styles.pinter} onClick={onPinterClick} />
                </div>
                <div className={styles.licenseMark}>
                  <div className={styles.license}>
                    © 2023 by Powered and secured by Crazyupinc.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </footer>
      </div>
      {isLoginPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginPopup}
        >
          <LoginPopup onClose={closeLoginPopup} />
        </PortalPopup>
      )}
      {isLoginPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginPopup1}
        >
          <LoginPopup onClose={closeLoginPopup1} />
        </PortalPopup>
      )}
      {isPasswordErrorPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePasswordErrorPopup}
        >
          <PasswordErrorPopup onClose={closePasswordErrorPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FindPassword;
