import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
