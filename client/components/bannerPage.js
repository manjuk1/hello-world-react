import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as catActions from '../actions/catActions';
import BannerList from './bannerList';

class BannerPage extends React.Component {  
  render() {
    return (
      <div className="col-md-12">
        <h1>Banners</h1>
        <div className="col-md-4">
          <BannerList cats={this.props.banners} />
        </div>
      </div>
    );
  }
}


BannerPage.propTypes = {
	banners: PropTypes.array.isRequired

};

function mapStateToProps(state, ownProps) {
	// state = {cats: [{id:1, name: "Maru"}, etc.]}
	console.log(state)
  return {
  	//banners: {cats: [{id:1, name: "Maru"}]}
    banners: state
  };
} 

export default connect(mapStateToProps)(BannerPage);  