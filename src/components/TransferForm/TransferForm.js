import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/Field';

const numbersOnly = (value, previousValue) => (
  /^\d*\.?\d*?$/.test(value) ? value : previousValue
);

const Label = () => (
  <p>
    Amount
    <span className="help">
      <a>Use Full Balance</a>
    </span>
  </p>
);

const TransferForm = ({
  callAPI,
  handleSubmit,
  reset,
  submitting,
  updateAmount }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="to"
      className="input"
      id="to"
      label="To"
      name="to"
      required
      prefixed
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="amount"
      className="input"
      id="amount"
      label={<Label />}
      name="amount"
      normalize={numbersOnly}
      pattern="^[0-9.]*$"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="memo"
      className="input"
      id="memo"
      label="Memo"
      name="memo"
      component={renderField}
      type="text"
    />

    <div className="field is-grouped u-mt4">
      <div className="control">
        <button
          disabled={submitting}
          className="button is-large is-primary"
          type="submit"
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      <div className="control">
        <button
          disabled={submitting}
          className="button is-large is-secondary"
          type="submit"
        >
          {submitting ? 'Clearing...' : 'Clear'}
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'transfer',
})(TransferForm);