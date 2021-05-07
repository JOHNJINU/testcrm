import {Component} from 'react';
import axios from 'axios';
import '../css/Home.css';
import {
    Link
  } from 'react-router-dom';
import { Redirect} from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);

        this.state ={
            itemsArray:[],
            redirect:null
        };
    }

    componentDidMount(){
        this.getItemList();
    }

    getItemList(){
        axios.get("api/cubixitems")
        .then(response => {
            console.log(response);
            this.setState( {itemsArray: response.data})
        })
        .catch( e =>{
            console.log("error " + e)
        })
    }

    logOut(){
        localStorage.setItem("cubixLoginStatus", "no");
        this.setState({ redirect: "/" });
      }
    
    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div >
                <h3 className="titleHome">Product List</h3>
                <button onClick={() =>this.logOut()} className="btn btn-primary logoutButton">Logout</button>
                <ul className="itemContainer">
                    
                    {this.state.itemsArray.map(item =>(

                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.code}</h5>

                            <hr className="underlineTitle" />

                            <div className="itemValuesContainer">
                            <span className="itemValues"> <div>Qty</div><div>{ item.qty} </div></span>
                            <span className="itemValues"> <div>Cost</div><div>{ item.cost} </div></span>
                            <span className="itemValues"> <div>Time</div><div>{ item.edate} </div></span>
                            </div>
                             
                             <Link to={'/item?id=' + item.code} className="buttonMore btn btn-primary" > More </Link> 
                            
                        </div>
                        </div> 

                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default Home;