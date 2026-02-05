"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { REGISTER_LEAD, GET_LEADS } from "@/lib/graphql/operations";
import {
  ServiceType,
  RegisterLeadInput,
  RegisterLeadResponse,
} from "@/lib/types";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegisterLeadInput>({
    name: "",
    email: "",
    mobile: "",
    postcode: "",
    services: [],
  });

  const [registerLead, { loading, error, data }] =
    useMutation<RegisterLeadResponse>(REGISTER_LEAD, {
      refetchQueries: [{ query: GET_LEADS }],
    });

  const handleServiceToggle = (service: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert("Please select at least one service");
      return;
    }

    try {
      await registerLead({
        variables: {
          input: formData,
        },
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        mobile: "",
        postcode: "",
        services: [],
      });
    } catch (err) {
      console.error("Error registering lead:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">
        Register Your Interest
      </h1>
      <p className="mb-6 text-gray-600">
        Join Brighte Eats and let us know which services you're interested in!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Mobile *
          </label>
          <input
            type="tel"
            id="mobile"
            required
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            placeholder="0400000000"
          />
        </div>

        <div>
          <label
            htmlFor="postcode"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Postcode *
          </label>
          <input
            type="text"
            id="postcode"
            required
            value={formData.postcode}
            onChange={(e) =>
              setFormData({ ...formData, postcode: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            placeholder="2000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Services Interested In *
          </label>
          <div className="space-y-2">
            {Object.values(ServiceType).map((service) => (
              <label
                key={service}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="capitalize text-gray-700">
                  {service.toLowerCase()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            Error: {error.message}
          </div>
        )}

        {data && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            Successfully registered! Thank you, {data.register.name}!
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Submitting..." : "Register Interest"}
        </button>
      </form>
    </div>
  );
}
