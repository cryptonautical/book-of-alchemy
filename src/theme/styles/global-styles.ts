import '@fontsource/bubblegum-sans/400.css';

import 'focus-visible';

import { css } from '@emotion/react';
import customTheme from '../../theme';

export const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
  body {
    background: ${"#f8ffef"};
  }
  .responsiveTable td .tdBefore {
    display: none;
  }

  @media screen and (max-width: ${customTheme.breakpoints.md}) {
    /*
      Force table elements to not behave like tables anymore
      Hide table headers (but not display: none; for accessibility)
    */

    .responsiveTable table,
    .responsiveTable thead,
    .responsiveTable tbody,
    .responsiveTable th,
    .responsiveTable td,
    .responsiveTable tr {
      display: block;
    }

    .responsiveTable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    // .responsiveTable tbody tr {
    //   padding: 0.25em;
    // }

    .responsiveTable td.pivoted {
      /* Behave like a "row" */

      border: none !important;
      position: relative;
      padding-left: calc(50% + 10px) !important;
      text-align: left !important;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      border-bottom: 1px solid #2b3350 !important;
    }

    .responsiveTable td .tdBefore {
      /* Now like a table header */
      position: absolute;
      display: block;

      /* Top/left values mimic padding */
      left: 1rem;
      width: calc(50% - 20px);
      white-space: pre-wrap;
      overflow-wrap: break-word;
      text-align: left !important;
      font-weight: 600;
    }
  }

  /* nuka-carousel styles */
  .slider-control-bottomcenter {
    position: absolute !important;
    bottom: -34px !important;
  }

  .slider > div[aria-live='polite'] {
    display: none;
  }

  .paging-item {
    margin-left: 2px;
    margin-right: 2px;
  }

  .paging-dot {
    fill: ${customTheme.colors.orange[300]};
  }
`;
