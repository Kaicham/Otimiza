import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Views/Login/Login'
import Introducao from './Views/Introducao/Introducao'
import IntroducaoSecundaria from './Views/Introducao/IntroducaoSecundaria'


const App = () => {

    return(
        <Router>
            <Route path="/" exact component={Login}/>
            <Route path="/intro" component={Introducao}/>
            <Route path="/intro2" component={IntroducaoSecundaria}/>
        </Router>
    )
}

export default App;