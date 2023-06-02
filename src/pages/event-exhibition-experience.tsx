import { FunctionComponent, useState, useCallback } from "react";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import styles from "./event-exhibition-experience.module.css";
const EventExhibitionExperience: FunctionComponent = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onLinkHomeClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onIntroductionClick = useCallback(() => {
    navigate("/eventfestival");
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
      <div className={styles.eventExhibitionExperience}>
        <nav className={styles.naviDiv}>
          <header className={styles.headerNavigation}>
            <button className={styles.logo} onClick={onLogoClick}>
              <img
                className={styles.logoBackgroundIcon}
                alt=""
                src="/logobackground@2x.png"
              />
              <div className={styles.kCulturePass}>K-Culture Pass</div>
            </button>
            <div className={styles.navigationMenu}>
              <a className={styles.navigationLink}>
                <h2 className={styles.intro}>About</h2>
                <h2 className={styles.product} onClick={onProductClick}>
                  Event
                </h2>
                <h2 className={styles.mission}>미션</h2>
                <h2 className={styles.map}>지도</h2>
                <b className={styles.customerService}>고객센터</b>
              </a>
              <div className={styles.memberSection} onClick={openLoginPopup}>
                <button className={styles.button}>
                  <div className={styles.register}>Sign in</div>
                </button>
                <button className={styles.button1}>
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
        <div className={styles.headerTitle}>
          <div className={styles.div}>
            <div className={styles.title}>
              <div className={styles.kParent}>
                <div className={styles.k}>K-컬처 패스 소개</div>
                <div className={styles.aboutUs}>Event</div>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.linkHome} onClick={onLinkHomeClick}>
                콘서트
              </div>
              <div
                className={styles.introduction}
                onClick={onIntroductionClick}
              >
                페스티벌
              </div>
              <div className={styles.introduction1}>전시.체험</div>
            </div>
          </div>
        </div>
        <div className={styles.titleSectionParent}>
          <div className={styles.titleSection}>
            <b className={styles.seeAllProduct}>Popular</b>
            <div className={styles.productList}>
              <div className={styles.product1Wrapper}>
                <div className={styles.product1}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className={styles.ticketInfo}>
                    <div className={styles.placeDate}>Gyeongbokgung Palace</div>
                    <div className={styles.placeDate1}>experience ticket</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.titleSection}>
            <b className={styles.seeAllProduct}>Recommendation</b>
            <div className={styles.productList1}>
              <div className={styles.product1Wrapper}>
                <div className={styles.product1}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className={styles.ticketInfo}>
                    <div className={styles.placeDate}>Gyeongbokgung Palace</div>
                    <div className={styles.placeDate1}>experience ticket</div>
                  </div>
                </div>
              </div>
              <div className={styles.product1Wrapper}>
                <div className={styles.product1}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <div className={styles.ticketInfo2}>
                    <div className={styles.placeDate4}>
                      Gyeongbokgung Palace
                    </div>
                    <div className={styles.placeDate1}>Startlight Tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <footer className={styles.footer1}>
            <div className={styles.columns}>
              <div className={styles.columnParent}>
                <div className={styles.column}>
                  <div className={styles.logo1}>
                    <img
                      className={styles.logoBackgroundIcon}
                      alt=""
                      src="/logobackground@2x.png"
                    />
                    <div className={styles.kCulturePass1}>K-Culture Pass</div>
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
        >
          <LoginPopup onClose={closeLoginPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default EventExhibitionExperience;
