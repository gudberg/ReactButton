const styles = `
    .button {
      color: white;
      padding: 1.0em 2.1em;
      font-size: 14px;
      margin: 0 0.5em 1.3em;
      border-radius: 0.2em;
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

    .sm {
      padding: 1.0em 0.6em;
    }

    .lg {
      padding: 1.2em 3.2em;
    }

    .primary {
      background: linear-gradient(to right, #3ea3f3 0%,#4389f7 100%);
    }

    .primary:hover {
      background: #0d7dd7;
    }

    .primary:active {
      background: #0c77cb;
    }

    .info {
      background: none;
      background-color: #FFFFFF;
    }

    .info:hover {
      background: #bebebe;
    }

    .info:active {
      background: #b5b5b5;
    }

    .danger {
      background: none;
      background-color: #ff2a2a;
    }

    .danger:hover {
      background: #de0000;
    }

    .danger:active {
      background: #d20000;
    }
    
    .success {
      background: none;
      background-color: #57E500
    }

    .success:hover {
      background: #41ab00;
    }

    .success:active {
      background: #3da200;
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