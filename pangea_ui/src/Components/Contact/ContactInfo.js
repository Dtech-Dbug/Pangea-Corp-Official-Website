import React from "react";

const ContactInfo = React.memo(
  ({ address, contact, email, data, city, country, offset }) => {
    return (
      <div className="contact" data-aos={data} data-aos-offset={offset}>
        <h3>
          {city} , <span>{country}</span>
        </h3>

        {contact.map((contact, index) => {
          return (
            <div className="mobile" key={index}>
              <p>Contact Line {index + 1} :</p>
              <p>
                {contact.ct} / {contact.mail}
              </p>
            </div>
          );
        })}

        <div className="mail">
          <p>Write to us :</p>
          <p>reach@xdit.in</p>
        </div>
      </div>
    );
  }
);

export default ContactInfo;
