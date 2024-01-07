import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import styles from "./styles.module.css"
import userSlice from "../../store/user"
import {
  isEmptyName,
  isNotValidEmail,
  isNotValidPassword,
  isNotValidPhoneNumber,
} from "../../helpers"

// Component
function AuthForm({ isRegister }) {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const phoneInputRef = useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function loginHandler(e) {
    e.preventDefault()
    let currentUser
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    if (isNotValidEmail(email)) {
      alert("Invalid email address")
      return
    }
    if (isNotValidPassword(password)) {
      alert("Invalid password")
    }
    const users = JSON.parse(window.localStorage.getItem("users")) || []
    for (let user of users) {
      if (user.email === email && user.password === password) {
        currentUser = user
        break
      }
    }
    if (!currentUser || currentUser.password !== password) {
      alert("Invalid user credential")
      passwordInputRef.current.value = ""
      return
    }

    emailInputRef.current.value = ""
    passwordInputRef.current.value = ""
    dispatch(userSlice.actions.login(currentUser))
    navigate("/")
    window.scrollTo(0, 0)
  }

  function registerHandler(e) {
    e.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const name = nameInputRef.current.value
    const phone = phoneInputRef.current.value
    const users = JSON.parse(window.localStorage.getItem("users")) || []

    try {
      if (isEmptyName(name)) throw new Error("Name must not be empty")
      if (isNotValidEmail(email)) throw new Error("Invalid email address")
      if (isNotValidPassword(password)) throw new Error("Password is too short")
      if (isNotValidPhoneNumber(phone)) throw new Error("Invalid phone number")
      for (let user of users) {
        if (user.email === email) throw new Error("Email already exists")
      }
    } catch (error) {
      alert(error.message)
      return
    }

    users.push({ name, email, password, phone })
    window.localStorage.setItem("users", JSON.stringify(users))

    // clear input fields
    emailInputRef.current.value = ""
    passwordInputRef.current.value = ""
    nameInputRef.current.value = ""
    phoneInputRef.current.value = ""

    navigate("/login")
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.auth}>
      <form onSubmit={isRegister ? registerHandler : loginHandler}>
        <h2>{isRegister ? "Sign Up" : "Sign In"}</h2>
        {isRegister && (
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            ref={nameInputRef}
          />
        )}
        <input
          type="email"
          id="email"
          placeholder="Email"
          ref={emailInputRef}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
        {isRegister && (
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            ref={phoneInputRef}
          />
        )}
        <button type="submit">{isRegister ? "SIGN UP" : "SIGN IN"}</button>
        <p>
          {isRegister ? "Login? " : "Create an account? "}
          <Link to={isRegister ? "/login" : "/register"}>
            {isRegister ? "Login" : "Sign up"}
          </Link>
        </p>
      </form>
    </div>
  )
}

export default AuthForm
