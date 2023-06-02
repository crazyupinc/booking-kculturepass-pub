import { FunctionComponent, useState, useCallback } from "react";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import AddedCartPopup from "../components/added-cart-popup";
import { useNavigate } from "react-router-dom";
import styles from "./event-detail.module.css";
const EventDetail: FunctionComponent = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isAddedCartPopupOpen, setAddedCartPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const openAddedCartPopup = useCallback(() => {
    setAddedCartPopupOpen(true);
  }, []);

  const closeAddedCartPopup = useCallback(() => {
    setAddedCartPopupOpen(false);
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
      <div className={styles.eventDetail}>
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
              <button
                className={styles.linkHome}
                onClick={onLinkHomeClick}
              >{`<  콘서트`}</button>
            </div>
          </div>
        </div>
        <div className={styles.titleSectionParent}>
          <div className={styles.titleSection}>
            <div className={styles.seeAllProduct}>SEVENTEEN</div>
            <div className={styles.divContentTop}>
              <img
                className={styles.icon}
                alt=""
                src="/-20230601--1126-11@2x.png"
              />
              <div className={styles.colRight}>
                <div className={styles.title1}>
                  <div className={styles.name}>SEVENTEEN</div>
                  <div className={styles.name1}>FANMEETING'LOVE' in JAPAN</div>
                </div>
                <div className={styles.subText}>
                  <div className={styles.textRow1}>
                    온라인 라이브 스트리밍은 생중계 이벤트이므로, 당일 현장 및
                    통신 상황에 따라 시작 시간 및 내용이 변경될 수 있습니다.
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.colRightInner}>
                  <div className={styles.divrowParent}>
                    <div className={styles.divrow}>
                      <div className={styles.ticketName}>
                        딜레이 스트리밍 (5/18 오사카 공연)
                      </div>
                    </div>
                    <div className={styles.divrow}>
                      <div className={styles.ticketName}>
                        6월 3일 (토) 오전 10:00 KST
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.quantityParent}>
                  <input
                    className={styles.quantity}
                    type="number"
                    placeholder="1"
                    min={1}
                    max={4}
                  />
                  <div className={styles.divrow2}>
                    <div className={styles.ticketName2}>7,5000 원</div>
                  </div>
                </div>
                <div className={styles.line} />
                <div className={styles.priceParent}>
                  <div className={styles.price}>총 금액</div>
                  <div className={styles.divrow3}>
                    <b className={styles.ticketName2}>7,5000 원</b>
                  </div>
                </div>
                <div className={styles.guide}>(1인당 최대 4개 구매 가능)</div>
                <button
                  className={styles.buttonAddCartDisable}
                  onClick={openAddedCartPopup}
                >
                  <div className={styles.addCart}>장바구니에 담기</div>
                </button>
              </div>
            </div>
          </div>
          <iframe
            className={styles.image14}
            src="https://www.youtube.com/embed/p1dBjovM5bU?rel=0"
            frameBorder="0"
            allowFullScreen
          />
          <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
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
                      src="/logobackground1@2x.png"
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
      {isAddedCartPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.7)"
          placement="Centered"
          onOutsideClick={closeAddedCartPopup}
        >
          <AddedCartPopup onClose={closeAddedCartPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default EventDetail;
