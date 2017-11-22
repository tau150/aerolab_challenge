import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, getCoins } from '../actions/user';
import styled from 'styled-components';
import logo from '../assets/images/aerolab-logo.svg';
import coin from '../assets/images/icons/coin.svg';
import arrow from '../assets/images/icons/arrow-right.svg';


const UserHeader = styled.div`
	display: flex;
  justify-content: space-between;
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
  width: 40%;
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

	handleGetCoins=()=>{
		this.props.getCoins()
	}


  render(){
		console.log(this.props)
    if( !this.props.loggedUser) return null;

    return(
      <UserHeader>
        <Logo src={ logo } alta='aerolab-logo' />
        <UserInfo>

          <p>{this.props.loggedUser.name} </p>
					<div>
					<p className='points'> {this.props.points}</p>
					<img src={coin } alt='coin'/>
					<img onClick={ this.handleGetCoins }src={arrow} alt=""/>
					</div>
        </UserInfo>
      </UserHeader>
    )
  }
}

const mapStateToProps= (state)=>{

  return   {
		loggedUser: state.user.LoggedUser,
		points: state.user.points,
		message: state.user.redeemConfirmation
	}

}

export default connect(mapStateToProps, { fetchUser, getCoins } )(LoggedUser);
