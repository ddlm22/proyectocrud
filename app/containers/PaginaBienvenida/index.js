/*
 *
 * PaginaBienvenida
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  MainConteiner,
  WelcomeText,
} from './styledComponets'
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPaginaBienvenida from './selectors';
import messages from './messages';

export class PaginaBienvenida extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainConteiner>
        <Helmet
          title="Bienvenida"
          meta={[]}
        />
        <WelcomeText>Bienvenido</WelcomeText>
      </MainConteiner>
    );
  }
}

PaginaBienvenida.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PaginaBienvenida: makeSelectPaginaBienvenida(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginaBienvenida);
