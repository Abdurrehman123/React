import React,{Component} from 'react'
import ReactDOM from 'react-dom'

const Fcom = (props)=>{
        return(
            <div>
                <h1>Todo List</h1>
                <h2>* Get out of bed, Wed Sep 13 2017</h2>
                <h3>* Brush teeth, Thu Sep 14 2017</h3>
                <h3>* Eat breakfast, Fri Sep 15 2017</h3>
            </div>
        )
    
    }
    
    class App extends Component{
        render (){
            return(
                <div>
                    <Fcom/>
                </div>
            )
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )