import React, {useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from 'react-redux';

import "./app.css";
import {saveUserDetailsRequest} from '../actions/AppAction';

const HomeContainer = (props) => {
    const {fullName} = useSelector(
		state => ({
			fullName: state.appReducer.fullName,
		}),
		shallowEqual,
    );
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(saveUserDetailsRequest({fullName: 'Janaka'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app-container">
            <div className='main-title'>
                Home Page
            </div>
          <div className="user-details">
                {fullName}
          </div>
        </div>
      );
}

export default HomeContainer;