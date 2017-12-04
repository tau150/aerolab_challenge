import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';
import {  toggleAlert } from '../actions/notifications';
import styled from 'styled-components';
import logo from '../assets/images/aerolab-logo.svg';
import coin from '../assets/images/icons/coin.svg';



const UserHeader = styled.div`
	display: flex;
  justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	height: 15vh;
	background: #fff;
  align-content:center;
	z-index: 300;
	box-shadow: 0px 10px 24px -9px rgba(0,0,0,0.75);
`;

const Logo = styled.img`
	padding: 1rem;

	@media(min-width: 992px){
			margin-left: 5%;
	}
`;

const UserInfo = styled.div`
	padding: 1rem;
  width: 60%;
  display: flex;
  justify-content: center;
 	align-items: center;


	div{
		background: #eaeaea;
		display: flex;
		justify-content: center;
		height: 20px;
		margin-left: 10px;
		padding: 5px 10px;
		border-radius:15px;
		align-items:center;

	}
	img{
		width: 20px;
		margin-left: 5px;
		border-radius: 0 12px 12px 0;

	}

	p{
		padding-left: 5%;
		cursor:pointer;
		text-align:center;
		margin-right: 1%;
		font-size: 1.2rem;
				
		span{
			font-weigth:bold;
			color: #2DDBFC;
		}
		
	}
	.points{
		flex-direction: row;
		align-items: center;
		justify-content:center;

		}
	}


`;


class LoggedUser extends Component{

  componentDidMount(){
    this.props.fetchUser()
	}
	
	handleAlert(){
		this.props.toggleAlert(this.props.showing)
	}


  render(){

    if( !this.props.loggedUser) return null;

    return(
      <UserHeader>
        <Logo src={ logo } alta='aerolab-logo' />
        <UserInfo>
          <p>{this.props.loggedUser.name} </p>
					<div>
						<p className='points'> {this.props.points}</p>
						<img src={coin } alt='coin'/>
					</div>
						<p onClick={ this.handleAlert.bind(this)}> <span>+</span> Coins</p>
        </UserInfo>
      </UserHeader>
    )
  }
}

const mapStateToProps= (state)=>{
	
  return   {
		loggedUser: state.user.LoggedUser,
		points: state.user.points,
		message: state.user.redeemConfirmation,
		showing: state.notifications.showing
	}

}

export default connect(mapStateToProps, { fetchUser, toggleAlert } )(LoggedUser);
