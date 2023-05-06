import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler(process.env.PASSWORD_PROTECT || '', {
  // Options go here (optional)
  cookieName: "next-password-protect",
});