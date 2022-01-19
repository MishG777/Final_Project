import { useState } from "react";
import "../contacts/contacts.css";

export default function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="contacts/shake.jpg" alt="hand shaking" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send to me</button>
          {message && <span>Thanks, Have a Nice Day</span>}
        </form>

        <div className="my-contacts">
          <h5>
            <span>
              <img src="contacts/mailbox.png" alt="mailbox" />
            </span>
            mikheil.ghibradze.1@btu.edu.ge
          </h5>
          <h5>
            <span>
              <img src="contacts/instagram.png" alt="mailbox" />
            </span>
            m_ghibradze19
          </h5>
          <h5>
            <span>
              <img src="contacts/facebook.png" alt="mailbox" />
            </span>
            Misho Ghibradze
          </h5>
          <h5>
            <span>
              <img src="contacts/twitter.png" alt="mailbox" />
            </span>
            @Misho48792882
          </h5>
          <h5>
            <span>
              <img src="contacts/discord.png" alt="mailbox" />
            </span>
            misho_77
          </h5>
          <h5>
            <span>
              <img src="contacts/phone.png" alt="mailbox" />
            </span>
            +995571076655
          </h5>
        </div>
      </div>
    </div>
  );
}
