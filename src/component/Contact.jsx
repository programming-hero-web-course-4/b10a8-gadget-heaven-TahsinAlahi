import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedIn.png";
import discord from "../assets/discord.png";

const contacts = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    image: facebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    image: instagram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/",
    image: linkedIn,
  },
  {
    name: "Discord",
    link: "https://discord.com/",
    image: discord,
  },
];

function Contact() {
  return (
    <main className="lg:max-w-screen-lg lg:mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">Contact us</h1>
      <div className="w-full flex items-center justify-around gap-3">
        {contacts.map((contact) => (
          <ContactItem key={contact.name} contact={contact} />
        ))}
      </div>
    </main>
  );
}

function ContactItem({ contact }) {
  return (
    <a
      href={contact.link}
      className="flex items-center gap-2 border border-gray-600 hover:bg-gray-200 px-4 py-2 rounded-full duration-100"
      target="_blank"
    >
      <h2 className="text-xl font-semibold">{contact.name}</h2>
      <div className="">
        <img
          src={contact.image}
          alt={contact.name}
          className="w-7 aspect-square"
        />
      </div>
    </a>
  );
}

export default Contact;
