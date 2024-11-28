import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Mail className="text-indigo-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="kyawtun023212@gmail.com" className="text-gray-900 hover:text-indigo-600">
                      kyawtun023212@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-900">Bangkok ,Thailand</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="text-indigo-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+959791087123" className="text-gray-900 hover:text-indigo-600 block mb-2">
                      (959)791087123
                    </a>
                    <a href="tel:+66967748771" className="text-gray-900 hover:text-indigo-600">
                      (66)967748771
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
}
