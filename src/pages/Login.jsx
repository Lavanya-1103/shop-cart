import React from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('user data:', data)
    alert('Registration Successful...')
  }

  return (
    <main className="login-page">
      <aside className="login-story" aria-label="Shop Cart welcome panel">
        <div className="story-topline">
          <span className="story-mark">SC</span>
          <span>Shop Cart</span>
        </div>

        <div className="story-copy">
          <p className="story-kicker">A little room for good things</p>
          <p className="story-title">
            Find something
            <br />
            <em>worth keeping.</em>
          </p>
          <p className="story-note">
            Your considered collection of everyday favourites, all in one place.
          </p>
        </div>

        <div className="story-object" aria-hidden="true">
          <span className="object-shadow" />
          <span className="object-handle" />
          <span className="object-bag" />
          <span className="object-sticker">SC</span>
        </div>

        <p className="story-footer">
          EST. 2024 <span>•</span> GOODS WITH CHARACTER
        </p>
      </aside>

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-heading">
          <p className="login-eyebrow">Welcome back</p>
          <h1 id="login-title">Sign in to your account</h1>
          <p className="login-subtitle">Enter your details to continue shopping.</p>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn">Google</button>
          <button type="button" className="social-btn">Apple</button>
        </div>

        <div className="divider">
          <span>or continue with email</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              {...register('name', { required: 'Name is required' })}
            />
            <p className="error" role="alert">{errors.name?.message}</p>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
            />
            <p className="error" role="alert">{errors.email?.message}</p>
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
            />
            <p className="error" role="alert">{errors.password?.message}</p>
          </div>

          <div className="form-row">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button className="login-btn" type="submit">Sign in</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Create one</a>
        </p>
      </section>
    </main>
  )
}

export default Login
