import { useMemo } from "react";
import styles from "./ReplyInputContainer.module.css";

const ReplyInputContainer = ({
  className = "",
  divMuiAvatarRoot,
  propFlexWrap,
  propPadding,
}) => {
  const replyInputContentStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const replyPlaceholderContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.replyInputContainer, className].join(" ")}>
      <div className={styles.separator} />
      <div className={styles.replyInputContent} style={replyInputContentStyle}>
        <div className={styles.replyUserAvatarContainer}>
          <img
            className={styles.divmuiavatarRootIcon}
            loading="lazy"
            alt=""
            src={divMuiAvatarRoot}
          />
        </div>
        <div className={styles.fieldset}>
          <div
            className={styles.replyPlaceholderContainer}
            style={replyPlaceholderContainerStyle}
          >
            <div className={styles.typeYourReply}>Type your reply</div>
            <div className={styles.fieldsetstyles} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ReplyInputContainer.propTypes = {
//   className: PropTypes.string,
//   divMuiAvatarRoot: PropTypes.string,

//   /** Style props */
//   propFlexWrap: PropTypes.any,
//   propPadding: PropTypes.any,
// };

export default ReplyInputContainer;
