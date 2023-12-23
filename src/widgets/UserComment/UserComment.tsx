import { FC } from "react";
import { useForm } from "react-hook-form";

import Button from "../../shared/ui/Button/Button";
import { imgError } from "../../utils/utils";
import { submitButtonStyle, submitButtonText, inputPlaceholder } from "./info";

import avatarDefault from "../../assets/icons/avatr-default.svg";

import styles from "./UserComment.module.scss";

interface UserCommentInput {
  comment: string;
}

type UserCommentProps = {
  onCommentSubmit: (data: UserCommentInput) => void;
};

const UserComment: FC<UserCommentProps> = ({ onCommentSubmit }) => {
  const { register, handleSubmit } = useForm<UserCommentInput>();

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onCommentSubmit)}>
      <div className={styles["comment"]}>
        <img
          className={styles["comment__image"]}
          src={avatarDefault}
          onError={(e) => imgError(e, avatarDefault)}
          width={100}
          height={60}
        />
        <textarea
          className={styles["comment__field"]}
          placeholder={inputPlaceholder}
          {...register("comment", { required: true })}
        ></textarea>
      </div>
      <div className={styles.submit}>
        <Button
          styleBtn={submitButtonStyle}
          text={submitButtonText}
          onSubmit={handleSubmit(onCommentSubmit)}
        ></Button>
      </div>
    </form>
  );
};

export default UserComment;
