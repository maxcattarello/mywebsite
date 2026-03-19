'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_THIS', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setState('success');
        setValues({ name: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  const isFloating = (field: string) =>
    focusedField === field || values[field as keyof typeof values].length > 0;

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {/* Name */}
      <div className="form-field">
        <label
          htmlFor="name"
          className={`form-label${isFloating('name') ? ' form-label--floating' : ''}`}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          required
          autoComplete="name"
          value={values.name}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-required="true"
        />
      </div>

      {/* Email */}
      <div className="form-field">
        <label
          htmlFor="email"
          className={`form-label${isFloating('email') ? ' form-label--floating' : ''}`}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          required
          autoComplete="email"
          value={values.email}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-required="true"
        />
      </div>

      {/* Message */}
      <div className="form-field">
        <label
          htmlFor="message"
          className={`form-label${isFloating('message') ? ' form-label--floating' : ''}`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-input form-textarea"
          required
          rows={5}
          value={values.message}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="btn-submit"
        disabled={state === 'submitting'}
        aria-disabled={state === 'submitting'}
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {state === 'success' && (
        <p className="form-feedback form-feedback--success" role="status">
          Thanks — I&apos;ll be in touch soon.
        </p>
      )}
      {state === 'error' && (
        <p className="form-feedback form-feedback--error" role="alert">
          Something went wrong. Try emailing me directly.
        </p>
      )}
    </form>
  );
}
