import { loginHandler } from "next-password-protect";

export default loginHandler(process.env.PASSWORD_PROTECT || '', {
  // Options go here (optional)
  cookieName: "next-password-protect",
});