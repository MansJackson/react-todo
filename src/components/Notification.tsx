// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { NotificationProps, RootState } from '../types';

const Notification: React.FunctionComponent<NotificationProps> = (props): JSX.Element => {
  const { notification: { text, show } } = props;

  return (
    <div className={show ? 'notification show' : 'notification'}>
      <p className="notification_text">{text}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, {})(Notification);
