import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './ntBar.scss'

export default class NtBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
     
    }
    
  }


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  touchMove (e) {

    console.log(e, 'touchMove');
    
  }

  touchStart (e) {
    console.log(e, 'touchStart');
    
  }

  touchEnd(e) {
    console.log(e, 'touchEnd');
    
  }
  render () {
    const { 
      customStyle,
      className
    } = this.props;
    const rootCls = 'nt-pane_content'

    // const {
    //   customStyle,
      
    // } = this.props;



    return (
      <View 
        className={className}
        style={customStyle}
        >
        {this.props.children}
      </View>
    )
  }
}
