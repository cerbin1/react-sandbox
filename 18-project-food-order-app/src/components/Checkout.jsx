export default function Checkout({
  total,
  onFormSubmit,
  onModalClose,
  submitting,
  submitError,
}) {
  return (
    <>
      <h2>Checkout</h2>
      <p>Total Amount: ${total}</p>
      <form onSubmit={onFormSubmit}>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" id="name" required />
        </div>
        <div className="control">
          <label htmlFor="email">E-Mail Address</label>
          <input name="email" type="email" id="email" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input name="street" type="text" id="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input name="postal-code" type="text" id="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input name="city" type="text" id="city" required />
          </div>
        </div>
        <div className="modal-actions">
          <span className="text-button" onClick={onModalClose}>
            Close
          </span>
          <button disabled={submitting} className="button">
            {submitting ? "Submitting..." : "Submit Order"}
          </button>
        </div>
      </form>

      {submitError && <p>{submitError}</p>}
    </>
  );
}
