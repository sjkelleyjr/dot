import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Dot from './Dot';
import {connect} from 'react-redux';
import Dimensions  from 'Dimensions';
import {Confirm} from './common';
import UserInputModal from './UserInputModal';
import now from 'performance-now';
import firebase from 'firebase';
import {initGame} from './actions';
import _ from 'lodash';
const {width, height} = Dimensions.get('window');


class Background extends React.Component{
	state = {
    showUsernameModal: false,
    showInitModal:false,
    beginTime:null,
    finalScore:0
	}
  generateRand(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateRandom(val){
    return Math.floor(Math.random() * (val + 1));
  }
  cycleAnimation(){
    Animated.sequence([
      Animated.timing(this.position, {
        toValue: {x:this.generateRand(-width,width),y:this.generateRand(-height,height)},
        duration: this.generateRand(0,750), //set to 1000
        // delay: 1000
      }),
      Animated.timing(this.position, {
        toValue: {x:this.generateRand(-width,width),y:this.generateRand(-height,height)},
        duration: this.generateRand(0,750)
      })
    ]).start(() => {
      this.cycleAnimation();
    });
  }

  componentWillMount(){
    this.setState({
      showInitModal:true,
      beginTime:null
    });
    this.position = new Animated.ValueXY(0,0);
    this.cycleAnimation();
  }

  backgroundPress(){
    const timeDiff = now() - this.state.beginTime; //get the difference between the start and losing the game
    let roundScore = Math.round(this.props.currentScore  + this.props.currentScore - timeDiff * 0.01);
    roundScore = roundScore < 0 ? 0 : roundScore;
    firebase.database().ref('scores').orderByChild('score').limitToLast(10).on('value',function(snapshot){
       let snapshotToArray = _.map(snapshot.val(), (val,key) =>{
         return {...val,key};
       });
       let min = Number.POSITIVE_INFINITY;
       snapshotToArray.forEach((scoreObj) => {
          if(scoreObj.score < min){
            min = scoreObj.score;
          }
       });
       if(snapshotToArray.length < 10 || min < roundScore){
          this.setState({
            showUsernameModal:true,
            beginTime:null,
            finalScore:roundScore
          });
       }else if(this.state.beginTime !== null){
          this.setState({
            showInitModal:true,
            beginTime:null,
            finalScore:roundScore
          });
          this.props.initGame();
       }
    }.bind(this));
  }
  onAccept(){
    this.setState({
      beginTime:now(),
      showInitModal:false
    });
  }
  onDecline(){
    this.setState({
      beginTime:null,
      showInitModal:false
    });
    Actions.highscores();
  }
  render(){
    return(
      <TouchableOpacity style={styles.view}
        onPress={this.backgroundPress.bind(this)}>
				<Confirm
					visible = {this.state.showInitModal}
					leftButtonText='Play'
					rightButtonText='High Scores'
					onAccept = {this.onAccept.bind(this)}
					onDecline = {this.onDecline.bind(this)}
				>
					Your score is {this.state.finalScore}
				</Confirm>
        <UserInputModal finalScore = {this.state.finalScore}
                        visible={this.state.showUsernameModal}
        />
        <Animated.View style={this.position.getLayout()}>
          <Dot/>
        </Animated.View>
      </TouchableOpacity>
		);
  }
}

const styles = {
  view: {
    backgroundColor:'teal',
    flex:1,
  }
};

const mapStateToProps = (state) => {
	const {currentScore} = state.gameState;
  const {username} = state.menuState;
	return {currentScore, username};
};

export default connect(mapStateToProps, {initGame})(Background);
