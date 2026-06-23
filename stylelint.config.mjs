/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard'],
  rules: {
    // BEM: block(-block)?(__element(-element)?)?(--modifier(-modifier)?)?
    // modifier는 대소문자·숫자·점·하이픈 허용 (HTML, Node.js, MongoDB-Atlas 등)
    'selector-class-pattern': [
      /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-zA-Z0-9][a-zA-Z0-9._-]*)?$/,
      { message: (name) => `BEM 명명 규칙을 따르지 않는 클래스명: "${name}"` },
    ],
  },
};
