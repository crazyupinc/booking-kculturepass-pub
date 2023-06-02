import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./intro.module.css";
const Intro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
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
    <div className={styles.intro}>
      <nav className={styles.naviDiv}>
        <header className={styles.headerNavigation}>
          <div className={styles.logo} onClick={onLogoClick}>
            <img
              className={styles.logoBackgroundIcon}
              alt=""
              src="/logobackground@2x.png"
            />
            <div className={styles.kCulturePass}>K-Culture Pass</div>
          </div>
          <div className={styles.navigationMenu}>
            <a className={styles.navigationLink}>
              <h2 className={styles.intro1}>About</h2>
              <h2 className={styles.product} onClick={onProductClick}>
                Event
              </h2>
              <h2 className={styles.mission}>미션</h2>
              <h2 className={styles.map}>지도</h2>
              <b className={styles.customerService}>고객센터</b>
            </a>
            <div className={styles.memberSection}>
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
              <div className={styles.aboutUs}>About us</div>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.linkHome}>Home</div>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.introduction}>소개</div>
          </div>
        </div>
      </div>
      <div className={styles.cardSection1Parent}>
        <div className={styles.cardSection1}>
          <div className={styles.titleSection}>
            <div className={styles.kpopFestival}>
              해외 KPOP Festival 등 다양한 K Event를 한눈에!
            </div>
            <div className={styles.k1}>
              K-컬처 패스는 최고의 상품을 준비하겠습니다.
            </div>
          </div>
          <div className={styles.steps}>
            <div className={styles.item1Parent}>
              <div className={styles.item1}>
                <img className={styles.icon1} alt="" src="/icon3@2x.png" />
                <div className={styles.stepDescription}>
                  <div className={styles.div1}>콘서트</div>
                  <div className={styles.div2}>
                    라이브 음악과 열정 넘치는 공연
                  </div>
                </div>
              </div>
              <div className={styles.item1}>
                <img className={styles.icon1} alt="" src="/icon4@2x.png" />
                <div className={styles.stepDescription}>
                  <div className={styles.div1}>전시</div>
                  <div className={styles.div2}>아름다운 예술 작품의 세계</div>
                </div>
              </div>
            </div>
            <div className={styles.item1Parent}>
              <div className={styles.item1}>
                <img className={styles.icon1} alt="" src="/icon5@2x.png" />
                <div className={styles.stepDescription2}>
                  <div className={styles.div1}>체험</div>
                  <div className={styles.div2}>새로운 경험과 재미</div>
                </div>
              </div>
              <div className={styles.item1}>
                <img className={styles.icon1} alt="" src="/icon6@2x.png" />
                <div className={styles.stepDescription}>
                  <div className={styles.div1}>굿즈</div>
                  <div className={styles.div8}>
                    즐거운 추억을 남길 수 있는 멋진 굿즈
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button2} onClick={onButton2Click}>
            <div className={styles.product1}>상품보기</div>
          </button>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.title1}>
            <div className={styles.title2}>
              가성비와 가심비 넘치는 큐레이션 커머스 운영
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <span className={styles.descriptionTxt}>
                <p
                  className={styles.p}
                >{`더 다양한 장소에서 고객분들을 만나기 위해 `}</p>
                <p
                  className={styles.p}
                >{`K-컬처 패스는 점차 확대 될 예정입니다. `}</p>
                <p className={styles.p}>
                  점차 성장해나가는 K-컬처 패스를 기대해주세요.
                </p>
              </span>
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

export default Intro;
