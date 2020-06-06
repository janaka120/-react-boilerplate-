import React, {useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(saveUserDetailsRequest({fullName: 'Janaka'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app-container">
            <div className='main-title'>
              {t('HOME_TITLE')}
            </div>
          <div className="user-details">
                {fullName}
          </div>
        </div>
    );
}

export default HomeContainer;