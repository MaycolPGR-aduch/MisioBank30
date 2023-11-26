import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Datos from '../datos/datos';
import Transaction from '../transactions/transactions'
import '../Dashboard/Dashboard.css';


const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {
 
    return (
      <div>
        <div><Header /></div>
        <div className='cuerpo'><Datos />
          <Transaction /></div>
        
        
      </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});
  
export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);