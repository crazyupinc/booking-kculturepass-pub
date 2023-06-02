import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
const Register: FunctionComponent = () => {
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

  const onButton4Click = useCallback(() => {
    navigate("/registerprofile");
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
    <div className={styles.register}>
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
          <div className={styles.seeAllProduct}>
            <p className={styles.p}>
              <b>{`회원가입이 완료되었습니다! `}</b>
            </p>
            <p className={styles.p1}>
              <span>
                <span className={styles.span}>프로필</span>
                <span>을 공유해주세요</span>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.content}>
            <div className={styles.description}>내가 좋아하는 음악은</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>Pop</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>Hip-hop</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>Rock</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>{`R&B`}</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>Jazz</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>Classical</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description1}>EDM</div>
            </div>
          </div>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.content}>
            <div className={styles.description}>나의 취향은</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description9}>Movies</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description10}>Reading</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description11}>Travel</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description12}>Cooking</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description13}>Sports</div>
            </div>
            <div className={styles.discParent}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description14}>Art</div>
            </div>
          </div>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.content}>
            <div className={styles.description}>나의 라이프 스타일은</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>Health and Fitness</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>Fashion and Beauty</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>
                  Technology and Gadgets
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>Travel and Adventure</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>Travel and Adventure</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description16}>Food and Cuisine</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.content}>
            <div className={styles.description}>관심 있는 IT 분야</div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.discParent16}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description23}>App</div>
            </div>
            <div className={styles.discParent16}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description24}>Web</div>
            </div>
            <div className={styles.discParent16}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description25}>Data Analysis</div>
            </div>
            <div className={styles.discParent16}>
              <input className={styles.disc} type="radio" />
              <div className={styles.description26}>
                Artificial Intelligence
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.discParent20}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description27}>Cybersecurity</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.content}>
            <div className={styles.description}>
              좋아하는 KPOP 아티스트 (다중선택 가능)
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent1}>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description29}>BTS</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description30}>BLACKPINK</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description23}>EXO</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description32}>TWICE</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description33}>NCT</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description34}>Red Velvet</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description35}>GOT7</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description36}>Seventeen</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description37}>IU</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description38}>TXT</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description39}>Stray Kids</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description40}>Mamamoo</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description41}>MONSTA X</div>
              </div>
              <div className={styles.discParent25}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description10}>(G)I-DLE</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description43}>ITZY</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description37}>IU</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description38}>TXT</div>
              </div>
              <div className={styles.discParent}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description39}>Stray Kids</div>
              </div>
              <div className={styles.discParent39}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description40}>Mamamoo</div>
              </div>
              <div className={styles.discParent39}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description41}>MONSTA X</div>
              </div>
              <div className={styles.discParent39}>
                <input className={styles.disc} type="radio" />
                <div className={styles.description10}>(G)I-DLE</div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button4} onClick={onButton4Click}>
          <div className={styles.product1}>다음</div>
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

export default Register;
