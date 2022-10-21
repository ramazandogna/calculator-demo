export default function OperationButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOO, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
