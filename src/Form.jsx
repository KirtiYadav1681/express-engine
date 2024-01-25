import React from "react";

const Form = ({
  ruleType,
  setRuleType,
  operator,
  setOperator,
  value,
  setValue,
  score,
  setScore,
  index,
  deleteExpressionHandler,
}) => {

  return (
    <form>
      <label htmlFor="rule-type">
        Rule Type:
        <select
          id="rule-type"
          value={ruleType}
          onChange={(e) => setRuleType(e.target.value)}
        >
          <option value="age">Age</option>
          <option value="account-balance">Account Balance</option>
          <option value="credit-score">Credit Score</option>
        </select>
      </label>

      <label htmlFor="operator">
        Operator:
        <select
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value=">">{`>`}</option>
          <option value="<">{`<`}</option>
          <option value=">=">{`>=`}</option>
          <option value="<=">{`<=`}</option>
          <option value="=">{`=`}</option>
        </select>
      </label>

      <label htmlFor="value">
        Value:
        <input
          type="number"
          name="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      <label htmlFor="score">
        Score:
        <input
          type="number"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </label>
      <button onClick={(e) => deleteExpressionHandler(e,index)}>Delete</button>
    </form>
  );
};

export default Form;
