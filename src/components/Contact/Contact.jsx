import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cf00e74-1f31-4268-a190-10c80ab2b8f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success sending");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur soluta eum eaque quas ratione consequatur nam dicta quod eveniet optio at, quis, cumque error et quisquam reprehenderit, omnis eos.</p>
        <ul>
            <li><img src={mail_icon} alt="" />react-contact@lrnz.dev</li>
            <li><img src={phone_icon} alt="" />+2004 584 256 451</li>
            <li><img src={location_icon} alt="" />Hokinawa, Jpn</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone number</label>
            <input type="text" name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea type="text" name='message' rows="6" placeholder='Enter your message here' required></textarea> 
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
         <span>{result}</span> 
      </div>
    </div>
  )
}

export default Contact
