import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo=() => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Contact Information</h2>
      <div className="flex gap-3">
        <MapPin />
        <div>
          <p>Company Address</p>
          <p className="text-gray-500">Street, City, Country</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Phone />
        <div>
          <p>Phone</p>
          <p className="text-gray-500">+855 xx xxx xxx</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Mail />
        <div>
          <p>Email</p>
          <p className="text-gray-500">contact@example.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;