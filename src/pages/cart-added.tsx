import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cart-added.module.css";
const CartAdded: FunctionComponent = () => {
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
    <div className={styles.cartAdded}>
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
      <div className={styles.titleSectionParent}>
        <div className={styles.titleSection}>
          <div className={styles.menu1}>
            <div className={styles.menu2}>
              <div className={styles.autoAddedFrame}>
                <input className={styles.square} type="checkbox" />
              </div>
              <div className={styles.latest}>전체선택</div>
              <button className={styles.buttonLogin}>
                <div className={styles.login}>선택 삭제</div>
              </button>
            </div>
          </div>
          <div className={styles.squareParent}>
            <input className={styles.square} type="checkbox" />
            <div className={styles.parent}>
              <img
                className={styles.icon3}
                alt=""
                src="/-20230601--1126-1@2x.png"
              />
              <div className={styles.titleParent}>
                <div className={styles.title1}>
                  <div className={styles.name}>
                    딜레이 스트리밍 (5/18 오사카 공연)
                  </div>
                  <div className={styles.category}>
                    6월 3일 (토) 오전 10:00 KST
                  </div>
                </div>
                <div className={styles.quantityWrapper}>
                  <input
                    className={styles.quantity}
                    type="number"
                    placeholder="1"
                    min={1}
                    max={4}
                  />
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div2}>7,5000원</div>
                </div>
              </div>
            </div>
            <button className={styles.autoAddedFrame1}>
              <img className={styles.xSquareIcon} alt="" src="/xsquare.svg" />
            </button>
          </div>
        </div>
        <div className={styles.menu3}>
          <div className={styles.menu4}>
            <div className={styles.latest1}>결제 방법 선택</div>
            <div className={styles.lineWrapper}>
              <div className={styles.line} />
            </div>
            <div className={styles.autoAddedFrameParent}>
              <div className={styles.autoAddedFrame2}>
                <img className={styles.xSquareIcon} alt="" src="/disc.svg" />
              </div>
              <div className={styles.latest2}>카드결제</div>
            </div>
          </div>
        </div>
        <div className={styles.orderListEmptyParent}>
          <div className={styles.orderListEmpty}>
            <div className={styles.title2}>구매자 정보</div>
            <div className={styles.category1}>
              한국 발행 카드만 사용 가능합니다. / Korea issued credit or debit
              cards only
            </div>
            <div className={styles.category1}>
              <span>{`구매자명 `}</span>
              <span className={styles.cardHoldersName}>Card holder’s name</span>
            </div>
            <input
              className={styles.placeholder}
              type="text"
              placeholder="HONG GIL DONG"
            />
            <div className={styles.categoryParent}>
              <div className={styles.category1}>생년월일 또는 사업자번호</div>
              <div className={styles.category4}>
                Birth date or Business number
              </div>
            </div>
            <input
              className={styles.placeholder1}
              type="text"
              placeholder="900101"
            />
          </div>
          <div className={styles.orderListEmpty1}>
            <div className={styles.title3}>카드 정보</div>
            <div className={styles.category5}>
              <span>카드번호</span>
              <span className={styles.cardHoldersName}> Card number</span>
            </div>
            <input
              className={styles.placeholder}
              type="text"
              placeholder="- 제외한 숫자만 입력"
            />
          </div>
        </div>
        <div className={styles.orderListEmpty2}>
          <div className={styles.title4}>포인트</div>
          <div className={styles.frameParent}>
            <div className={styles.categoryGroup}>
              <div className={styles.category1}>
                <p className={styles.p}>보유 포인트</p>
                <p className={styles.yourPoint}>Your Point</p>
              </div>
              <input
                className={styles.placeholder1}
                type="text"
                placeholder="0"
              />
            </div>
            <div className={styles.categoryGroup}>
              <div className={styles.category1}>
                <p className={styles.p}>사용 포인트</p>
                <p className={styles.yourPoint}>Use Point</p>
              </div>
              <input
                className={styles.placeholder1}
                type="text"
                placeholder="0"
              />
              <div className={styles.category4}>
                포인트 사용을 위해 100원 이상 결제가 필요합니다.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.group}>
                <b className={styles.b}>합계</b>
                <b className={styles.b1}>75,000원</b>
              </div>
              <div className={styles.totalPrice1}>VAT 포함 금액입니다.</div>
            </div>
            <button className={styles.buttonAddCart}>
              <div className={styles.addCart}>결제하기</div>
            </button>
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

export default CartAdded;
