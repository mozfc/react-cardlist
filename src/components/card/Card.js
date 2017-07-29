import React, {Component} from 'react'
import PropTypes from 'prop-types'
import $ from 'jQuery'

let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    desc: PropTypes.string,
    joined: PropTypes.number,
    likeNum: PropTypes.number
}

let contextTypes = {
    et: PropTypes.string,
    ett: PropTypes.string
}


export default class Card extends Component{

    constructor(props){
        super(props)
        this.state = {
            isHeartON: false,
            year: props.joined,
            isRedColor : true,
            likeNum : props.likeNum
        }

        this.heartClick = this.heartClick.bind(this)
        this.yearAdd = this.yearAdd.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    componentWillMount(){
        // console.log(this.state)
        // this.setState({
        //     year: 20
        // })
    }

    componentDidMount(){
        console.log('card渲染完成')
    }

    yearAdd(e){

        // console.log(e.type)
        // console.log(e.nativeEvent)
        // console.log(e.currentTarget)

        let {year} = this.state

        this.setState({
            year: year + 10
        })
    }

    heartClick(event){
        let {isHeartON, likeNum} = this.state

        isHeartON = !isHeartON

        if(isHeartON){
            likeNum++
        }else{
            likeNum--
        }

        // console.log($(event.target))
        if ($(event.target).hasClass('empty')) {
            $(event.target).css({
                color: 'red'
            })
        }else{
            $(event.target).css({
                color: ''
            })    
        }

        this.setState({
            isHeartON,
            likeNum
        })
    }

    changeColor(){
        let {isRedColor} = this.state

        isRedColor = !isRedColor

        this.setState({
            isRedColor
        })
    }

    render(){
        let {imgSrc, name, meat, desc, joined   } = this.props

        let {et} = this.context

        // console.log(this.context)

        let {isHeartON, year, isRedColor, likeNum} = this.state

        let heartClass = isHeartON ? '' : 'empty'

        let RedColor = isRedColor ? '' : 'red_name'

        return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className = { `header ${RedColor}` } onClick={this.changeColor}>{name}</div>
                    <div className="meta">
                        <a href="">{meat}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span
                        className="right floated"
                        onClick = { this.yearAdd}
                    > {`${et} in ${year}`} </span>
                    <span className="left floated">
                        <i
                            className={`${heartClass} heart icon`}
                            onClick = { this.heartClick }
                        ></i> {`${likeNum} Like`}
                    </span>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
   joined : 2018 
}

Card.propTypes = propTypes
Card.contextTypes = contextTypes
