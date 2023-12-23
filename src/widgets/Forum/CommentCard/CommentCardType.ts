export interface CommentCardType {
  id: number;
  content: string;
  dateTime: Date;
  likes: number;
  dislikes: number;
  userInfoDto: {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
  };
}
