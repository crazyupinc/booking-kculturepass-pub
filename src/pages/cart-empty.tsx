import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cart-empty.module.css";
const CartEmpty: FunctionComponent = () => {
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

  const onButtonAddCartClick = useCallback(() => {
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
    <div className={styles.cartEmpty}>
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
      <div className={styles.headerTitle}>
        <div className={styles.div1}>
          <div className={styles.title}>
            <div className={styles.kParent}>
              <div className={styles.k}>K-컬처 패스 소개</div>
              <div className={styles.aboutUs}>Cart</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.linkHome}>{`<  콘서트`}</div>
            <img className={styles.icon1} alt="" />
            <img className={styles.icon1} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.titleParent}>
        <div className={styles.title1}>
          <div className={styles.div2}>장바구니가 비었습니다</div>
        </div>
        <button className={styles.buttonAddCart} onClick={onButtonAddCartClick}>
          <div className={styles.addCart}>Event 화면으로 이동</div>
        </button>
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

export default CartEmpty;
