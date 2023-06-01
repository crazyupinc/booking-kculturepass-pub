import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
const Main: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProductClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onLabelContainerClick = useCallback(() => {
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
    <div className={styles.main}>
      <img className={styles.imgIcon} alt="" src="/img@2x.png" />
      <div className={styles.greyFilter} />
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
              <h2 className={styles.intro}>About</h2>
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
      <div className={styles.hero}>
        <div className={styles.title}>
          <b className={styles.text}>한 눈에 보는 KPOP Festival</b>
          <b className={styles.text1}>
            <span>K-Culture</span>
            <span className={styles.span}> </span>
            <span className={styles.pass}>Pass</span>
          </b>
          <b
            className={styles.text2}
          >{`K-컬처 패스를 통해 일상의 회복을 즐기세요. `}</b>
        </div>
        <div className={styles.button2}>
          <div className={styles.product1}>상품보기</div>
        </div>
      </div>
      <div className={styles.contentProducts}>
        <div className={styles.products}>
          <div className={styles.productCategory}>
            <div className={styles.div}>
              <div className={styles.title1}>
                <div className={styles.waterbomb2023}>
                  K-Culture Pass Concerts
                </div>
                <div className={styles.label} onClick={onLabelContainerClick}>
                  <div className={styles.festival}>콘서트 전체보기</div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
              <div className={styles.subject}>
                <div className={styles.oneAndOnly}>
                  Now available on K-Culture Pass !
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productList}>
            <div className={styles.frameParent}>
              <div className={styles.product1Wrapper}>
                <div className={styles.product11}>
                  <img
                    className={styles.image6Icon}
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <div className={styles.ticketInfo}>
                    <div className={styles.placeDate}>SUGA | Agust D</div>
                    <div
                      className={styles.placeDate1}
                    >{`SUGA | Agust D TOUR ‘D-DAY’ `}</div>
                    <div className={styles.placeDate1}>in JAPAN</div>
                  </div>
                </div>
              </div>
              <div className={styles.product1Wrapper}>
                <div className={styles.product11}>
                  <img
                    className={styles.image7Icon}
                    alt=""
                    src="/image-71@2x.png"
                  />
                  <div className={styles.ticketInfo}>
                    <div className={styles.placeDate}>
                      Forrestella | The Light
                    </div>
                    <div className={styles.placeDate1}>
                      Forrestella Tour Concert
                    </div>
                    <div className={styles.placeDate1}>in Seoul</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.product11}>
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-91@2x.png"
                />
                <div className={styles.ticketInfo2}>
                  <div className={styles.placeDate6}>SEVENTEEN</div>
                  <div className={styles.placeDate1}>FANMEETING'LOVE'</div>
                  <div className={styles.placeDate1}>in JAPAN</div>
                </div>
              </div>
              <div className={styles.product1Frame}>
                <div className={styles.product11}>
                  <img
                    className={styles.image7Icon}
                    alt=""
                    src="/image-72@2x.png"
                  />
                  <div className={styles.ticketInfo}>
                    <div className={styles.placeDate}>
                      Forrestella | The Light
                    </div>
                    <div className={styles.placeDate1}>
                      Forrestella Tour Concert
                    </div>
                    <div className={styles.placeDate1}>in Seoul</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentProducts1}>
        <div className={styles.titleSection}>
          <img className={styles.leftIcon} alt="" src="/lefticon.svg" />
          <div className={styles.title2}>
            <b className={styles.seeAllProduct}>
              새로운 아티스트를 만나보세요 !
            </b>
            <div className={styles.button3}>
              <div className={styles.landingProductPage}>
                <div className={styles.allProduct}>{`전시.체험 전체보기 `}</div>
                <img
                  className={styles.arrowRightIcon1}
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
          </div>
          <img className={styles.leftIcon} alt="" src="/righticon.svg" />
        </div>
        <div className={styles.products1}>
          <div className={styles.productCategory1}>
            <div className={styles.div}>
              <div className={styles.title1}>
                <div className={styles.waterbomb2023}>
                  2023 포레스텔라 전국투어 콘서트
                </div>
                <div className={styles.label1}>
                  <div className={styles.festival1}>콘서트</div>
                </div>
              </div>
              <div className={styles.subject}>
                <div className={styles.oneAndOnly}>The Light in Seoul</div>
              </div>
              <div className={styles.period}>
                기간 | 2023.06.17 - 2023.06.18
              </div>
            </div>
          </div>
          <div className={styles.productList1}>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img className={styles.icon} alt="" src="/-1@2x.png" />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>BLACKPINK</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--110@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>HENRY</div>
                </div>
              </div>
            </div>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--111@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>ONEUS</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--109@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>KINGDOM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productList1}>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--113@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>E’LAST</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1101@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>STAYC</div>
                </div>
              </div>
            </div>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1102@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>KIM SEJEONG</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1091@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>Dreamcatcher</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productList1}>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img className={styles.icon} alt="" src="/-1@2x.png" />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>MIRAE</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1103@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>KIMJUNSU</div>
                </div>
              </div>
            </div>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img className={styles.icon} alt="" src="/-11@2x.png" />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>THE BOYZ</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1104@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>B.I.G</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productList1}>
            <div className={styles.product1Group}>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--112@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>BLACKPINK</div>
                </div>
              </div>
              <div className={styles.product15}>
                <img
                  className={styles.icon1}
                  alt=""
                  src="/-20230601--1103@2x.png"
                />
                <div className={styles.ticketInfo4}>
                  <div className={styles.placeDate12}>KIMJUNSU</div>
                </div>
              </div>
            </div>
            <div className={styles.productListChild} />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
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
    </div>
  );
};

export default Main;
