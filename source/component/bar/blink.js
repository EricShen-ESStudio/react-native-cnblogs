import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	ToastAndroid,
	TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getBloggerName } from '../../common';
import { postCategory, storageKey } from '../../config';
import { ComponentStyles, CommonStyles, StyleConfig } from '../../style';

class BlinkBar extends Component {

	constructor(props) {
	    super(props);
	    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	onCommentPress(){
		let { blink, router, category, id } = this.props;
		if (router && category && id) {
			router.toCommentAdd({
				title: blink.Title,
				category: category,
				id: id
			});
		}
	}

	renderReturnItem(){
		return (
			<TouchableOpacity 
				onPress={ ()=> this.props.router.pop() }
				style={ [ ComponentStyles.bar_item ] }>
    			<Icon 
					name='ios-arrow-round-back' 
					size = { StyleConfig.icon_size }/>
    		</TouchableOpacity>
		);
	}

	renderCommentItem(){
		return (
			<TouchableOpacity 
				onPress = {()=> this.onCommentPress() }
				style={ [ ComponentStyles.bar_item ] }>
    			<Icon 
					name='ios-chatbubbles-outline' 
					size = { StyleConfig.icon_size -4 }/>
    		</TouchableOpacity>
		);
	}

	render() {
	    return (
	    	<View style={ [ ComponentStyles.bar_container ] }>
	    		{ this.renderReturnItem() }
	    		{ this.renderCommentItem() }
	    	</View>
	    )
	}
}

export default BlinkBar;

