import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profile.module.css";
const Profile: FunctionComponent = () => {
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

  const onButton5Click = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onButton6Click = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onButton7Click = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onButton8Click = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onLabelClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onButton9Click = useCallback(() => {
    navigate("/");
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
    <div className={styles.profile}>
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
          <b className={styles.seeAllProduct}>나의 프로필 설정</b>
        </div>
        <div className={styles.cardSection3}>
          <div className={styles.contentParent}>
            <div className={styles.content}>
              <div className={styles.description}>프로필 이미지 변경</div>
            </div>
            <img className={styles.icon1} alt="" src="/icon1@2x.png" />
            <input className={styles.button4} type="file" />
          </div>
        </div>
        <div className={styles.cardSection31}>
          <div className={styles.contentGroup}>
            <div className={styles.content1}>
              <div className={styles.description}>이메일</div>
            </div>
            <div className={styles.content2}>
              <div className={styles.description2}>
                crazyupinc@crazyupinc.com
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              <div className={styles.description}>닉네임</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <div className={styles.description2}>crazyupinc</div>
              </div>
              <button className={styles.button5} onClick={onButton5Click}>
                <div className={styles.product1}>변경</div>
              </button>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              <div className={styles.description}>이름</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <div className={styles.description2}>crazyupinc</div>
              </div>
              <button className={styles.button5} onClick={onButton6Click}>
                <div className={styles.product1}>변경</div>
              </button>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              <div className={styles.description}>비밀번호</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <div className={styles.description2}>비밀번호 재설정</div>
              </div>
              <button className={styles.button5} onClick={onButton7Click}>
                <div className={styles.product1}>재설정</div>
              </button>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              <div className={styles.description}>비밀번호</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <div className={styles.description2}>비밀번호 재설정</div>
              </div>
              <button className={styles.button5} onClick={onButton8Click}>
                <div className={styles.product1}>재설정</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardSection32}>
          <button className={styles.label} onClick={onLabelClick}>
            <div className={styles.festival}>변경하기</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright2.svg"
            />
          </button>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description2}>
              <span>내가 좋아하는 음악은</span>
              <span className={styles.hipHop}>
                <span className={styles.span}>{` `}</span>
                <span>Hip-hop</span>
              </span>
            </div>
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description2}>
              <span>나의 취향은</span>
              <span className={styles.hipHop}>
                <span className={styles.span}>{` `}</span>
                <span>Movies</span>
              </span>
            </div>
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description2}>나의 라이프 스타일은</div>
            <div className={styles.description14}>Fashion and Beauty</div>
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description2}>관심 있는 IT 분야</div>
            <div className={styles.description14}>Artificial Intelligence</div>
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description2}>
              <span>좋아하는 KPOP 아티스트는</span>
              <span className={styles.span2}>{` `}</span>
            </div>
            <div className={styles.description18}>
              <span className={styles.span3}>{` `}</span>
              <span className={styles.blackpinkTwice}>
                <span>BLACKPINK , TWICE</span>
                <span className={styles.span}>{` `}</span>
              </span>
            </div>
          </div>
        </div>
        <button className={styles.button9} onClick={onButton9Click}>
          <div className={styles.product5}>수정완료</div>
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

export default Profile;
