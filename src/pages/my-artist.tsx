import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./my-artist.module.css";
const MyArtist: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/myartist");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/registerprofile");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/cartempty");
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
    <div className={styles.myArtist}>
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
              <h2 className={styles.product}>Event</h2>
              <h2 className={styles.mission}>미션</h2>
              <h2 className={styles.map}>지도</h2>
              <b className={styles.customerService}>고객센터</b>
            </a>
            <div className={styles.memberSectionLogin}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.customerService1}>crazyupinc</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
              <div className={styles.memberSectionSubmenu}>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
                <div className={styles.menuList}>
                  <button className={styles.button} onClick={onButtonClick}>
                    나의 아티스트
                  </button>
                  <button className={styles.button} onClick={onButton1Click}>
                    나의 프로필
                  </button>
                  <button className={styles.button} onClick={onButton2Click}>
                    장바구니
                  </button>
                  <button className={styles.button}>주문내역</button>
                  <div className={styles.div}>로그아웃</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.hambugerMenuIcon}
            alt=""
            src="/hambugermenu.svg"
          />
        </header>
      </nav>
      <div className={styles.titleSectionParent}>
        <div className={styles.titleSection}>
          <b className={styles.seeAllProduct}>나의 아티스트</b>
        </div>
        <div className={styles.productList}>
          <div className={styles.product1Parent}>
            <div className={styles.product1}>
              <img className={styles.icon1} alt="" src="/-1@2x.png" />
              <div className={styles.ticketInfo}>
                <div className={styles.placeDate}>BLACKPINK</div>
              </div>
            </div>
            <div className={styles.product1}>
              <img
                className={styles.icon2}
                alt=""
                src="/-20230601--110@2x.png"
              />
              <div className={styles.ticketInfo}>
                <div className={styles.placeDate}>HENRY</div>
              </div>
            </div>
          </div>
          <div className={styles.product1Parent}>
            <div className={styles.product1}>
              <img
                className={styles.icon2}
                alt=""
                src="/-20230601--111@2x.png"
              />
              <div className={styles.ticketInfo}>
                <div className={styles.placeDate}>ONEUS</div>
              </div>
            </div>
            <div className={styles.product1}>
              <img
                className={styles.icon2}
                alt=""
                src="/-20230601--109@2x.png"
              />
              <div className={styles.ticketInfo}>
                <div className={styles.placeDate}>KINGDOM</div>
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
                <button className={styles.faceBook} onClick={onFaceBookClick} />
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
  );
};

export default MyArtist;
