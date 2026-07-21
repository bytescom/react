const ChildA = ({ count }) => {
  return (
    <>
      <h1>Child A Component {count}</h1>
    </>
  );
};

export default ChildA;


/**
 * @ques why we using the {} in count when we receives as prop.
 * Just JavaScript object destructuring syntax.
 */

/**
 * @ques Why curly, not square brackets or nothing?
 * Curly braces {} → for objects (destructuring by key name
 * Square brackets [] → for arrays (destructuring by position) — like const [a, b] = useState(0)
 * No brackets → just a plain variable, not destructured at all (you'd get the whole object, e.g. props)
 */