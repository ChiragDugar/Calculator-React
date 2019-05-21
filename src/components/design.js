import React, { Component } from 'react'
import '../style.css'

var res = 0

class Design extends Component{
        
    state = ({
        val: '',
        arr: [],
        operator: [],
        print: ''
    })



    handleClick = (e) => {
        let val = this.state.val
        val = val + e.target.innerHTML;
        this.setState({  
            val: val 
        });
        
        this.state.print = this.state.print + e.target.innerHTML
        this.setState({
            print: this.state.print
        })
        console.log(this.state.print)

    }


    handle = (e) =>{

            this.state.print = this.state.print + e.target.innerHTML
            this.setState({
                print: this.state.print
            })        
        console.log(this.state.print)


            var x = this.state.val
            let arr = this.state.arr
            arr.push(x)
            this.setState({
                arr: arr,
                val: ""
            }) 
            let operator = this.state.operator
            operator.push(e.target.innerHTML)
            this.setState({
                operator: operator
            })
    }


    reset = () =>{
        this.setState({
            arr: [],
            operator: []
        })
    }


    handlesubmit = (e) =>{
        var x = this.state.val
        let arr = this.state.arr
        arr.push(x)
        this.setState({
            arr: arr,
            val: ""
        }) 
        var a = this.state.arr.map(el =>{
            return parseInt(el)
        })  

        //Logic for calculations
        let op = this.state.operator
        if(op[0] === "+")
            res = a[0] + a[1]
        else if(op[0] === "-")
            res = a[0]-a[1]
        else if(op[0] === "*")
            res = a[0]*a[1]
        else if(op[0] === "/")
            res = a[0]/a[1]
        for(var i=0;i<a.length;i++)
        {
            if(op[i+1] === "+")
                res = res + a[i+2]
            else if(op[i+1] === "-")
                res = res-a[i+2]
            else if(op[i+1] === "*")
               res = res*a[i+2]    
            else if(op[i+1] === "/")
               res = res/a[i+2]
        }
        console.log("Result 1",res)
       // this.reset()
        // console.log(this.state.arr)
        let array = []
        var t = res.toString()
        array.push(t)
        this.setState({
            arr: [],
            operator: [],
            val: t,
            print: res
        }); 
        // console.log("New Arr",this.state.arr)       
    }


    clear = () =>{
        this.setState({
            print: ""
        })
    }

    render(){
        console.log(this.state)
            return(
                <div className="main card-panel hoverable">
                    <h1>The Calculator</h1>
                    {/* <label>Field</label> */}
                    <input type="text" id="text" value={ this.state.print } />
                    <table className="center-align">
                        <tbody>
                            <tr>
                                <td className="box" onClick={ this.handleClick }>1</td>
                                <td className="box" onClick={ this.handleClick }>2</td>
                                <td className="box" onClick={ this.handleClick }>3</td>
                                <td className="box more" onClick={ this.handle }>/</td>
                            </tr>
                            <tr>
                                <td className="box" onClick={ this.handleClick }>4</td>
                                <td className="box" onClick={ this.handleClick }>5</td>
                                <td className="box" onClick={ this.handleClick }>6</td>
                                <td className="box more" onClick={ this.handle }>*</td>
                            </tr>
                            <tr>
                                <td className="box" onClick={ this.handleClick }>7</td>
                                <td className="box" onClick={ this.handleClick }>8</td>
                                <td className="box" onClick={ this.handleClick }>9</td>
                                <td className="box more" onClick={ this.handle }>-</td>
                            </tr>
                            <tr >
                                <td className="box" onClick={ this.clear } >C</td>
                                <td className="box" onClick={ this.handleClick }>0</td>
                                <td className="box" onClick={ this.handlesubmit }>=</td>    
                                <td className="box more" onClick={ this.handle }>+</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            )
        }
    }

export default Design