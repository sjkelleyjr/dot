import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchScores } from './actions';
import _  from 'lodash';
import Score from './Score';

class HighScores extends React.Component{
	//when the component mounts, get the list of employees
	//and create the list view for it.
	componentWillMount(){
		this.props.fetchScores();
		this.createDataSource(this.props);
	}

	//anytime the props change this runs with new props
	//before the component re-renders
	componentWillReceiveProps(nextProps){
		//any time the props change, update the list with this data.
		this.createDataSource(nextProps);
	}

	createDataSource({ scores }){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r2 !== r1
		});
		this.dataSource = ds.cloneWithRows(scores);
	}
	renderRow(scoreObj){
		return <Score scoreObj={scoreObj} />;
	}
	render(){
		return (
			<ListView
				enableEmptySections
				dataSource = {this.dataSource}
				renderRow={this.renderRow}
				style={{paddingTop:65}}
			/>
		);
	}
}


const mapStateToProps =  state => {
	const scores = _.map(state.scores, (val, uid) => {
		return { ...val, uid };
	});
	scores.sort((a,b)=>{return b.score - a.score;});
	return {scores};
};


export default connect(mapStateToProps, {fetchScores})(HighScores);
