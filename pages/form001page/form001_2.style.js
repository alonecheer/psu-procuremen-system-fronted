import styled from "styled-components";

const Form001_2StyleWrapper = styled.div`
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout-background {
    background: #fff;
  }
  /* 
Generic Styling, for Desktops/Laptops 
*/
  table {
    width: 100%;
    border-collapse: collapse;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: bold;
  }
  td,
  th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: center;
  }
  input {
    outline: none;
    margin: 0;
    width: 80%;
    border: 1px solid #ddd;
    background: white;
    padding: 7px;
  }
  /* Button */
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    width: 25%;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  @media screen and (max-width: 600px) {
    input[type="submit"] {
      float: none;
      width: 100%;
      margin-top: 0;
    }
  }
  /* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Input Submit */
    input[type="submit"] {
      float: none;
      width: 100%;
      margin-top: 0;
    }
    /* Table */
    td {
      text-align: center;
    }
    td:before {
      text-align: left;
    }

    input {
      margin: 0;
      width: 80%;
      text-align: center;
    }
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: "ลำดับ";
    }
    td:nth-of-type(2):before {
      content: "รายการ";
    }
    td:nth-of-type(3):before {
      content: "จำนวน";
    }
    td:nth-of-type(4):before {
      content: "	หน่วย";
    }
    td:nth-of-type(5):before {
      content: "ราคา/หน่วย";
    }
  }
`;
export default Form001_2StyleWrapper;
