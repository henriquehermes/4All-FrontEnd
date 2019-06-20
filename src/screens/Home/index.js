import { connect } from 'react-redux';
import Dashboard from './Content';
import { bindActionCreators } from 'redux';

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
