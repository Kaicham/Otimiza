import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Views/Login/Login'
import Introducao from './Views/Introducao/Introducao'
import IntroducaoSecundaria from './Views/Introducao/IntroducaoSecundaria'
import MainApp from './Views/MainApp/MainApp'


const App = () => {

    return(
        <Router>
            <Route path="/" exact component={Login}/>
            <Route path="/intro" component={Introducao}/>
            <Route path="/intro2" component={IntroducaoSecundaria}/>
            <Route path="/main" component={MainApp}/>
        </Router>
    )
}

export default App;