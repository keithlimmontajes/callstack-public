/**
 * @readonly
 * declare all the parent component
 * or global component and listen here
 */
import React, { Fragment, useEffect } from 'react';
import MainNavigator from './MainNavigator';

import { useSelector } from 'react-redux';
import { makeSelectLoginModal } from '@redux/root/global-modals/selectors';

const RootNavigation = () => {
  const showLoginModal = useSelector(makeSelectLoginModal());

  // login modal
  useEffect(() => {
    console.log('######### showLoginModal', showLoginModal);
  }, [showLoginModal]);

  return (
    <Fragment>
      <MainNavigator />
    </Fragment>
  );
};

export default RootNavigation;
