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
      background-color: blue;
      text-align: center;
      position: relative;
      border: none;
      background-color: #3369ff;
      outline:none;
      border: none;
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
      background-color: #3369ff;
    }

    .info {
      background-color: #FFFFFF;
    }

    .danger {
      background-color: red;
    }

    .success {
      background-color: green;
    }

    .disabled {
      background-color: #999999;
    }

    .fontColor {
      color: grey;
    }
  }
`
export default styles