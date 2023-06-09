import React from 'react';
import PropTypes from 'prop-types';
import { HeaderTitle } from './Header.styled';

export const Header = ({ title }) => {
	return <HeaderTitle>{title}</HeaderTitle>;
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};