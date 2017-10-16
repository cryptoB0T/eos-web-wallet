import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import renderField from 'components/Field';

const LoginForm = ({
  callAPI,
  handleSubmit,
  handleClose,
  modal,
  submitting,
  accountName, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    
    <Field
      aria-describedby="account_name"
      className="input"
      component={renderField}
      id="account_name"
      label="Account Name"
      name="account_name"
      required
      prefixed
      type="text"
      value={accountName}
    />

    <Field
      aria-describedby="owner_key"
      className="input"
      component={renderField}
      id="owner_key"
      label="Owner Key"
      name="owner_key"
      required
      type="password"
    />

    <div className="field">
      <div className="control">
        <label className="label"><input type="checkbox" /> Keep me logged in</label>
      </div>
    </div>

    <div className="field is-grouped u-mt4">
      <div className="control">
        <button
          disabled={submitting}
          className="button is-large is-primary"
          type="submit"
        >
          {submitting ? 'Submitting...' : 'Login'}
        </button>
      </div>
      <div className="control">
        <button
          disabled={submitting}
          className="button is-large is-secondary"
          type="submit"
        >
          {submitting ? 'Clearing...' : 'Cancel'}
        </button>
      </div>
    </div>

    <div className={`col-12 ${modal ? 'text-left' : 'text-center'}`}>
      <Link to="/create-account" className="text-link">Don&#39;t have an account?</Link>
    </div>
  </form>
);

export default reduxForm({
  form: 'login',
})(LoginForm);