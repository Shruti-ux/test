import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <nav className={[styles.menuItemsParent, className].join(" ")}>
      <div className={styles.menuItems}>
        <div className={styles.frameParent}>
          <div className={styles.navListItemButtonSParent}>
            <img
              className={styles.navListItemButtonS}
              alt=""
              src="/nav--list--item--button--svg.svg"
            />
            <div className={styles.navListItemButtonCWrapper}>
              <b className={styles.navList}>Customers</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper}>
            <img
              className={styles.navListItemButtonS1}
              alt=""
              src="/nav--list--item--button--svg-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems1}>
        <div className={styles.frameGroup}>
          <div className={styles.navListItemButtonSGroup}>
            <img
              className={styles.navListItemButtonS2}
              alt=""
              src="/nav--list--item--button--svg-2.svg"
            />
            <div className={styles.navListItemButtonPWrapper}>
              <b className={styles.navList1}>Products</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSContainer}>
            <img
              className={styles.navListItemButtonS3}
              alt=""
              src="/nav--list--item--button--svg-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems2}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img
              className={styles.navListItemButtonS4}
              alt=""
              src="/nav--list--item--button--svg-4.svg"
            />
            <div className={styles.navListItemButtonOWrapper}>
              <b className={styles.navList2}>Orders</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSFrame}>
            <img
              className={styles.navListItemButtonS5}
              alt=""
              src="/nav--list--item--button--svg-5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems3}>
        <div className={styles.frameParent1}>
          <div className={styles.navListItemButtonSParent1}>
            <img
              className={styles.navListItemButtonS6}
              alt=""
              src="/nav--list--item--button--svg-6.svg"
            />
            <div className={styles.navListItemButtonIWrapper}>
              <b className={styles.navList3}>Invoices</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper1}>
            <img
              className={styles.navListItemButtonS7}
              alt=""
              src="/nav--list--item--button--svg-7.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems4}>
        <div className={styles.frameParent2}>
          <div className={styles.navListItemButtonSParent2}>
            <img
              className={styles.navListItemButtonS8}
              alt=""
              src="/nav--list--item--button--svg-8.svg"
            />
            <div className={styles.navListItemButtonLWrapper}>
              <b className={styles.navList4}>Logistics</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper2}>
            <img
              className={styles.navListItemButtonS9}
              alt=""
              src="/nav--list--item--button--svg-9.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems5}>
        <div className={styles.frameParent3}>
          <div className={styles.navListItemButtonSParent3}>
            <img
              className={styles.navListItemButtonS10}
              alt=""
              src="/nav--list--item--button--svg-10.svg"
            />
            <div className={styles.navListItemButtonAWrapper}>
              <b className={styles.navList5}>Academy</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper3}>
            <img
              className={styles.navListItemButtonS11}
              alt=""
              src="/nav--list--item--button--svg-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems6}>
        <div className={styles.frameParent4}>
          <div className={styles.navListItemButtonSParent4}>
            <img
              className={styles.navListItemButtonS12}
              alt=""
              src="/nav--list--item--button--svg-12.svg"
            />
            <div className={styles.navListItemButtonJWrapper}>
              <b className={styles.navList6}>Job Listings</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper4}>
            <img
              className={styles.navListItemButtonS13}
              alt=""
              src="/nav--list--item--button--svg-13.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.menuItems7}>
        <div className={styles.frameParent5}>
          <div className={styles.navListItemButtonSParent5}>
            <img
              className={styles.navListItemButtonS14}
              alt=""
              src="/nav--list--item--button--svg-14.svg"
            />
            <div className={styles.navListItemButtonSWrapper5}>
              <b className={styles.navList7}>Social Media</b>
            </div>
          </div>
          <div className={styles.navListItemButtonSWrapper6}>
            <img
              className={styles.navListItemButtonS15}
              alt=""
              src="/nav--list--item--button--svg-15.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.navListItemButtonWrapper}>
        <div className={styles.navListItemButton}>
          <div className={styles.blogButtonContent}>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.blogLabel}>
              <b className={styles.blog}>Blog</b>
            </div>
          </div>
          <div className={styles.svgWrapper}>
            <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.navListItemListIteWrapper}>
        <div className={styles.navList8}>Post List</div>
      </div>
      <div className={styles.postDetailContentWrapper}>
        <div className={styles.postDetailContent}>
          <div className={styles.navListItemListIteContainer}>
            <div className={styles.navListItemListIte} />
          </div>
          <div className={styles.navList9}>Post Details</div>
        </div>
      </div>
      <div className={styles.navListItemListIteFrame}>
        <div className={styles.navList10}>Post Create</div>
      </div>
      <div className={styles.menuItems8}>
        <div className={styles.navListItemLinkSvgParent}>
          <img
            className={styles.navListItemLinkSvg}
            alt=""
            src="/nav--list--item--link--svg-5.svg"
          />
          <div className={styles.navListItemLinkFilWrapper}>
            <b className={styles.navList11}>File Manager</b>
          </div>
        </div>
      </div>
      <div className={styles.menuItems9}>
        <div className={styles.navListItemLinkSvgGroup}>
          <img
            className={styles.navListItemLinkSvg1}
            alt=""
            src="/nav--list--item--link--svg-6.svg"
          />
          <div className={styles.navListItemLinkKanWrapper}>
            <b className={styles.navList12}>Kanban</b>
          </div>
        </div>
      </div>
      <div className={styles.mailContentWrapper}>
        <div className={styles.mailContent}>
          <img
            className={styles.navListItemLinkSvg2}
            alt=""
            src="/nav--list--item--link--svg-7.svg"
          />
          <div className={styles.mailLabel}>
            <b className={styles.navList13}>Mail</b>
          </div>
        </div>
      </div>
    </nav>
  );
};

// FrameComponent.propTypes = {
//   className: PropTypes.string,
// };

export default FrameComponent;
