import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.buttonSearchWrapper}>
        <img
          className={styles.buttonSearch}
          loading="lazy"
          alt=""
          src="/button--search.svg"
        />
      </div>
      <div className={styles.userActions}>
        <img
          className={styles.buttonLanguage}
          loading="lazy"
          alt=""
          src="/button--language@2x.png"
        />
        <div className={styles.buttonNotificationsWrapper}>
          <div className={styles.buttonNotifications}>
            <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
            <div className={styles.spanmuibadgeBadge}>
              <a className={styles.badgeCount}>2</a>
            </div>
          </div>
        </div>
        <div className={styles.contactButtons}>
          <img
            className={styles.buttonContacts}
            loading="lazy"
            alt=""
            src="/button--contacts.svg"
          />
        </div>
        <div className={styles.contactButtons1}>
          <div className={styles.button}>
            <img
              className={styles.divmuiavatarRootIcon}
              loading="lazy"
              alt=""
              src="/divmuiavatarroot@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Header.propTypes = {
//   className: PropTypes.string,
// };

export default Header;
