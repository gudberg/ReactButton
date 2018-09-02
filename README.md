# neat-react-button

neat-react-button is a button component that makes button creation a breeze

![Showtime logo](demo/neat-react-buttonDemo.gif)

## Installation
``yarn add neat-react-button``
or
``npm install neat-react-button``

## Usage

Import `neat-react-button` in your React component:

```javascript static
import Button from 'neat-react-button'
``` 

### Supported props
|Prop         |Type         |Defualt                   |Description                           |
|-------------|-------------|--------------------------|--------------------------------------|
|size         |string       |md                        |Button size                           |
|color        |string       |primary                   |colors described by keywords          |
|tag          |string       |button                    |Type of element                       |
|disabled     |bool         |false                     |to disable button                     | 
|onClick      |function     |()=>{}                    |fired after click                     |

You can find example of usage in the demo directory, which you can run in a local development server using npm start or yarn run start
