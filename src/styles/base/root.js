import { css } from "styled-components";
import { fluidScale } from "../mixins";

export default css`
  :root {
    --white: #ffffff;
    --black: #222222;
    --dark-gray: #2e2e2e;

    --blue: #7ad3ff;
    --green: #83ebc3;
    --orange: #fab048;
    --salmon: #ff8a9e;
    --purple: #ce9af5;
    --teal: #38d6c9;
    --yellow: #f5f56c;

    --blue50: #61caff;
    --green50: #52e3ac;
    --orange50: var(--orange);
    --salmon50: #ff8ab1;
    --purple50: #f58cee;
    --teal50: var(--teal);
    --yellow50: #f5e425;

    --light-blue: #d4edfa;
    --light-green: #c8f7e5;
    --light-orange: #ffebce;
    --light-salmon: #ffd1d1;
    --light-purple: #f7dcf6;
    --light-teal: #c0faf5;
    --light-yellow: #fff799;

    --neutral05: #f7f7f7;
    --neutral10: #ececec;
    --neutral30: #d6d6d6;
    --neutral40: #c3c3c3;
    --neutral45: #b3b3b3;
    --neutral50: #9a9a9a;
    --neutral75: #696969;
    --neutral80: #828282;
    --neutral90: #363636;
    --neutral96: #222222;

    /* typography */
    --text-dark: #555555;
    --text-light: var(--neutral50);
    --header-dark: var(--neutral90);
    --header-light: var(--white);

    --font-size-xl: ${fluidScale("22px", "20px")};
    --font-size-sm: 17px;
    --font-size-xs: 16px;
    --font-size-xxs: 15px;
    --font-size-uppercase: 14px;
    --font-size-base: ${fluidScale("18px", "16px")};
    --font-size-h1: ${fluidScale("54px", "44px")};
    --font-size-h2: ${fluidScale("40px", "32px")};
    --font-size-h3: ${fluidScale("33px", "32px")};
    --font-size-h4: ${fluidScale("30px", "26px")};
    --font-size-h5: ${fluidScale("28px", "20px")};
    --font-size-h6: ${fluidScale("24px", "18px")};

    --line-height-uppercase: 1.714;

    --letter-spacing-uppercase: 1.75px;
    --letter-spacing-uppercase-narrow: 1.5px;

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;

    /* z-stack */
    --z-index-lock: 10;
    --z-index-header: 20;
    --z-index-overlay: 30;

    /* borders */
    --border-radius: 12px;
    --border-radius-sm: 8px;

    /* common responsive widths */
    --base-column-gap: ${fluidScale("70px", "40px")};

    /* common fluid padding */
    --padding-sm: ${fluidScale("30px", "20px")};

    /* layout */
    --l-container-full: 100vw;
    --l-container-max: 1200px;
    --l-container-wide: 1020px;
    --l-container-sm: 620px;
    --l-container-padding: ${fluidScale("40px", "33px")};
    --l-container-padding-lg: ${fluidScale("80px", "33px")};
    --l-container-padding-xlg: ${fluidScale("120px", "33px")};

    --l-container-row-padding: ${fluidScale("70px", "50px")};
    --l-container-row-padding-lg: ${fluidScale("90px", "80px")};
    --l-container-row-padding-xlg: ${fluidScale("120px", "80px")};

    --main-nav-padding-x: ${fluidScale("28px", "18px")};
    --main-nav-padding-y: 28px;

    --blog-item-margin: ${fluidScale("80px", "60px")};
  }
`;
