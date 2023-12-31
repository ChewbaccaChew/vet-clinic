import ThemeSwitcher from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import styles from "./SignInPageLayout.module.scss";

interface SignInPageLayout {
  children: React.ReactElement;
}
const SignInPageLayout: React.FC<SignInPageLayout> = ({ children }) => {
  return (
    <>
      <div className={styles["container-margin"]}>
        <div className={styles["container-switcher"]}>
          <ThemeSwitcher />
        </div>
        {children}
      </div>
    </>
  );
};

export default SignInPageLayout;
