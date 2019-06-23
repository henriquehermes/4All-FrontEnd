/* eslint-disable object-shorthand */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './Content';

import * as Widgets from '../../store/ducks/widgets';
import * as PageViews from '../../store/ducks/pageViews';
import * as Messages from '../../store/ducks/messages';

const mapStateToProps = ({ widgets, pageViews, messages }) => ({
  widgets: widgets,
  pageViews: pageViews,
  messages: messages
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(Widgets, dispatch),
    ...bindActionCreators(PageViews, dispatch),
    ...bindActionCreators(Messages, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

/**
 * Um padrão adotado por mim na estruturação de pastas, separando connect do Redux com o Corpo do codigo,
 * reduzindo o numero de linhas de um arquivo.
 *
 * index.js => Connect, mapStateToProps e mapDispatchToProps.
 * Content.js => Codigo fonte recebendo o que o Redux provê.
 * styles.js => Componentes estilizados via Styled Components.
 */

/**
 * bindActionCreators importa todas as Actions dos respectivos arquivos e disponibiliza no Props.
 */
