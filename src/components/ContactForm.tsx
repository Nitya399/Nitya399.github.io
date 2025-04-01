import { useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  const form = useRef<HTMLFormElement>(null); 

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   

    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string | undefined;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string | undefined;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY as string | undefined;

    console.log("Service ID:", process.env.REACT_APP_EMAIL_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAIL_TEMPLATE_ID);
    console.log("Public Key:", process.env.REACT_APP_PUBLIC_KEY);

    console.log("Form Data:", form.current);

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Missing email service configuration', {
          position: 'bottom-center',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
      });
      return; // Prevent form submission if environment variables are missing
  }


    emailjs.sendForm(
        serviceId,
        templateId,
        form.current!,
        publicKey
    ) .then(
        () => {
            toast.success('Message successfully sent!', {
                position: 'bottom-center',
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            const timeout = setTimeout(() => {
                window.location.reload()
            }, 3900)

            return () => clearTimeout(timeout)
        },
        () => {
              toast.error('Failed to send the message, please try again', {
               position: 'bottom-center',
               autoClose: 3500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: 'dark',                
        })
    
        }
    )
    // console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
          placeholder="Name"
            type="text"
            name="from_name"
            // id="name"
            // value={form.name}
            // onChange={(e) => setFormData({ ...form, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            name="from_email"
            // type="email"
            // id="email"
            // value={form.email}
            // onChange={(e) => setFormData({ ...form, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            placeholder="Message" 
            name="message"
            // id="message"
            // value={form.message}
            // onChange={(e) => setFormData({ ...form, message: e.target.value })}
            // rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </button>
      </form>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Mail className="w-5 h-5 mr-2" />
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Phone className="w-5 h-5 mr-2" />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
      </div>
    </div>
  );
}