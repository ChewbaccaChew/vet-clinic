import { useState } from "react";
import Tooltip from "../../shared/ui/Tooltip/Tooltip";
import { infoTooltip } from "./info";
import bell from "../../assets/icons/Bell.svg";
import whiteBell from "../../assets/icons/Bell-white.svg"
import avatarDefault from "../../assets/icons/avatr-default.svg";
import { IUserResponce } from "../../types/auth/authenticationDTO";
import { prepareText } from "../../utils/utils";
import { useSelector } from "react-redux";
import { imgError } from "../../utils/utils";
import { useGetAllUserNotificationsQuery } from "../../services/user/userNotificationController.api";
import styles from "./Role.module.scss";
import useWindowDimensions from "../../hooks/hooks";

const Role = () => {
  const {width} = useWindowDimensions()
  const isMobile = width < 481

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const { role } = useSelector((state: { auth: IUserResponce }) => state.auth);
  const { data = [] } = useGetAllUserNotificationsQuery({}, {});

  const tooltip = isOpen ? (
    <div
      className={styles["tooltip-container"]}
      onMouseLeave={() => handleOpen()}
    >
      <Tooltip>
        {infoTooltip.map((item) => {
          return (
            <div className={styles["info-container"]} key={item.id}>
              <img className={styles.icon} src={item.pathToIcon} />
              <div className={styles.text}>{item.label}</div>
            </div>
          );
        })}
      </Tooltip>
    </div>
  ) : null;
  return (
    <div className={styles.container} data-testid={"role"}>
      <div
        className={
          data.length
            ? `${styles.notification} ${styles["have-notifications"]}`
            : styles.notification
        }
      >
        <img className={styles["notification__image"]} src={isMobile?whiteBell:bell} />
      </div>
      <div className={styles.separator}></div>
      <button
        type={"button"}
        data-testid={"button"}
        className={isOpen ? `${styles.role} ${styles.clicked}` : styles.role}
        onClick={() => handleOpen()}
        onKeyDown={handleKeyDown}
      >
        <div>Role</div>
        <div className={styles["role-text"]}>{role ? prepareText(role): 'unknown' }</div>
      </button>

      <img
        className={styles.avatar}
        src={avatarDefault}
        onError={(e) => imgError(e, avatarDefault)}
      />
      {tooltip}
    </div>
  );
};

export default Role;
