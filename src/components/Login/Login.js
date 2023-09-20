import React, {
  useRef,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import AuthContext from "../../store/auth-context";

import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const someTimer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // This is a clean up function
    return () => {
      clearTimeout(someTimer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
      props.onClose();
    }
  };

  const cancelHandler = (event) => {
    props.onClose();
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = (event) => {
    console.log("In validate email handler");
  };

  const validatePasswordHandler = (event) => {
    console.log("In validate password handler");
  };

  return (
    <Modal onClose={props.onClose}>
      {/* <Panel className={classes.login}> */}
      <div className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            id="email"
            label="E-Mail"
            type="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
            ref={passwordInputRef}
            id="passowrd"
            label="Password"
            type="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <div className={classes.action}>
            <Button
              type="submit"
              className={classes.button}
              disabled={!formIsValid}
            >
              Login
            </Button>
            <Button
              type="button"
              className={classes.button}
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </div>
        </form>
        {/* </Panel> */}
      </div>
    </Modal>
  );
};

export default Login;
