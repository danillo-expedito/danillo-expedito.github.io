import { useState } from 'react';
import Header from '../components/Header';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import hello from '../assets/hello.png';

function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the backend for email sending
    try {
        emailjs.sendForm('service_wwoo887', 'template_9876ayi', form.current, 'DwF5oOVGgKkwo-6J3')
        .then(() => {
            let timerInterval
            Swal.fire({
                title: 'Email Sent Successfully!',
                html: 'Redirecting in <b></b> milliseconds.',
                timer: 3000,
                timerProgressBar: true,
                icon: 'success',
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
            /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                    window.location.href = '/';
                }
            })
        }, (error) => {
            console.log(error.text);
        });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="w-screen h-auto overflow-hidden">
        <Header />
        <div
            className="bg-primary-100 w-screen h-screen flex flex-col items-start"
        >
            <h1 className="text-2xl uppercase ml-36 mt-24 mb-4 text-secondary-400 font-bold">Get In Touch</h1>
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="ml-36 bg-primary-300 w-2/6 h-96 border border-primary-500 
                rounded-md flex flex-col items-center justify-center gap-4 p-4 shadow-md shadow-primary-500"
            >
                <div>
                    <label className="mr-4 text-md font-bold">Name:</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-80 h-8 rounded-md text-justify px-2 text-zinc-900 bg-secondary-500
                        border border-zinc-600 font-sans text-sm"
                    />
                </div>
                <div>
                    <label className="mr-4 text-md font-bold">Email:</label>
                    <input
                        type="email"
                        name="userEmail"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-80 h-8 rounded-md text-justify px-2 text-zinc-900 bg-secondary-500
                        border border-zinc-600 font-sans text-sm"
                    />
                </div>
                <hr className="w-96 border border-secondary-500 shadow-lg shadow-black" />
                <div className="flex flex-col w-96">
                    <label className="mr-4 text-md font-bold">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-96 h-40 rounded-md text-justify px-2 text-zinc-900 bg-secondary-500
                        border border-zinc-600 font-sans text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-28 bg-highlight-300 text-secondary-400 text-md font-bold rounded-md
                    shadow-md shadow-primary-500 hover:bg-highlight-100 hover:text-white
                    active:shadow-none disabled:bg-primary-300 disabled:cursor-not-allowed"
                    disabled={!formData.userName || !formData.userEmail || !formData.message}
                >
                    Submit
                </button>
            </form>
        </div>
        <img src={ hello } alt="" className="absolute bottom-8 right-20 w-100" />
    </div>
  );
}

export default Contact;
