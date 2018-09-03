const styles = `
    .button {
      color: white;
      padding: 1.2em 2.9em;
      width: 180px;
      font-size: 14px;
      margin: 0 0.5em 1.3em;
      border-radius: 0.4em;
      box-sizing: border-box;
      text-decoration: none;
      font-family: Roboto sans-serif;
      font-weight: 400px;
      color: #FFFFFF;
      background: linear-gradient(to right, #3ea3f3 0%,#4389f7 100%);
      text-align: center;
      position: relative;
      border: none;
      outline: none;
    }

    .button:hover {
      curor: pointer;
    }

    .button:active {
      transform: translateY(4px);
    }

    .sm {
      width: 120px;
    }

    .md {
      width: 180px;
    }

    .lg {
      width: 220px;
    }

    .primary {
      background: linear-gradient(to right, #3ea3f3 0%,#4389f7 100%);
    }

    .info {
      background: none;
      background-color: #FFFFFF;
    }

    .danger {
      background: none;
      background-color: red;
    }

    .success {
      background: none;
      background-color: #00cc00
    }

    .disabled {
      background:#cccccc;
      color:#ffffff;
      cursor: auto;
    }

    .fontColor {
      color: grey;
    }
  }
`
export default styles