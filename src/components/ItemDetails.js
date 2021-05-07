import {Component} from 'react';
import '../css/ItemDetails.css';
import axios from 'axios';

class ItemDetails extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemDetailsObj:[],
        }
    }

    componentDidMount(){
        const authResult = new URLSearchParams(window.location.search); 
        const code = authResult.get('id');
        console.log("code is " + code);
        this.getCompleteDetailOfItem(code)
    }

    getCompleteDetailOfItem(code){
        axios.get("api/cubixitems/" + code)
        .then(res =>{
            console.log( " fftt " + res.data[0].cost)
            this.setState( {itemDetailsObj: res.data})
            
        })
        .catch(e => {
            console.log("error on item detail " + e);
        })
    }

    render(){

        return(
            <div>
                <h3 className="titleHome">Details</h3>
                
                {/* <h4>{  if(this.state.itemDetailsObj)}</h4>    */}

                {this.state.itemDetailsObj.map( item => (
                    <div className="itemDetailContainer container">
                    <h3> hello {item.code}</h3>
                    <span> Quantity {item.qty}</span>
                    <span> Price {item.price}</span>
                    <span> Cost {item.cost}</span>
                    <span> Brand {item.brand}</span>
                    <span> Category {item.category}</span>
                    <span> Edate {item.edate}</span>
                    
                    </div>
                ))}  
            </div>
        )
    }
}

export default ItemDetails;
