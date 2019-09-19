import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../files/loading.json'

/*

['Sending meteorite to Earth', 
  'Creating life on Mars',
  'Lighting the stars',
  'Hiding invading spaceships']

  */

export default class Loading extends Component {      
  state = {
    messages:['Sending meteorite to Earth', 
    'Creating life on Mars',
    'Lighting the stars',
    "Hiding invaders' spaceships"],
    //currentMessage:'',
    //count: 0,
  }
 /* 
  handleMessages = (count) =>{
    const {messages} = this.state;
    const newCurrentMessage = messages[count];
    this.setState({currentMessage:newCurrentMessage});
  }
  
  componentDidMount(){
    const {messages, count} = this.state;
    setInterval(this.handleMessages(count),3000)
    if(count === messages.length){
      const newCount=0;
      this.setState({count:newCount});
    }else{
      const newCount = count + 1
      this.setState({count:newCount});
    }
  }  
*/

  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const {messages} = this.state
    return(
      <div className="loading fade-in">
        <Lottie options={defaultOptions}
          height={150}
          width={150}
        />
        <p className="loading-message fade-in">{messages[Math.round(Math.random()*messages.length-1)]}</p>
      </div>
    )
  }
}