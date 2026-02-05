"use client";

import { useQuery } from "@apollo/client/react";
import { GET_LEAD } from "@/lib/graphql/operations";
import { GetLeadResponse } from "@/lib/types";
import Link from "next/link";

interface LeadDetailProps {
  leadId: string;
}

export default function LeadDetail({ leadId }: LeadDetailProps) {
  const { loading, error, data } = useQuery<GetLeadResponse>(GET_LEAD, {
    variables: { id: leadId },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading lead details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          Error loading lead: {error.message}
        </div>
        <Link
          href="/dashboard"
          className="inline-block mt-4 text-blue-600 hover:text-blue-900"
        >
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!data?.lead) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
          Lead not found
        </div>
        <Link
          href="/dashboard"
          className="inline-block mt-4 text-blue-600 hover:text-blue-900"
        >
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const lead = data.lead;
  const createdDate = new Date(lead.createdAt).toLocaleString();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        href="/dashboard"
        className="inline-block mb-6 text-blue-600 hover:text-blue-900"
      >
        ← Back to Dashboard
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-600">Lead Details</h1>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              ID
            </label>
            <p className="text-gray-900 font-mono text-sm">{lead.id}</p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Name
            </label>
            <p className="text-gray-900 text-lg font-semibold">{lead.name}</p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email
            </label>
            <p className="text-gray-900">
              <a
                href={`mailto:${lead.email}`}
                className="text-blue-600 hover:underline"
              >
                {lead.email}
              </a>
            </p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Mobile
            </label>
            <p className="text-gray-900">
              <a
                href={`tel:${lead.mobile}`}
                className="text-blue-600 hover:underline"
              >
                {lead.mobile}
              </a>
            </p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Postcode
            </label>
            <p className="text-gray-900">{lead.postcode}</p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Services Interested In
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {lead.services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Registered At
            </label>
            <p className="text-gray-900">{createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
