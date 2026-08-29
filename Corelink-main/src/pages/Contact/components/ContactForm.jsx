import React, { useState } from 'react';
import { apiUrl } from '../../../lib/apiBase';
import { ChevronDown } from 'lucide-react';

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  designation: '',
  product: '',
  message: '',
};

const productOptions = [
  'Bank Control Layer',
  'Ecosystem Operations Layer',
  'Credit & Intelligence Layer',
  'Member Experience Layer',
  'Rails & Disbursals Layer',
];

const ContactForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      const res = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Unable to send your message. Please try again.');
      }

      setFormData(emptyForm);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 shadow-inner outline-none backdrop-blur-md transition-all focus:border-white/40 focus:bg-white/[0.14] focus:ring-1 focus:ring-white/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Success Notification */}
      {submitted && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-sm text-emerald-300 backdrop-blur-sm">
          ✓ Thank you! Your request has been submitted. We'll get back to you soon.
        </div>
      )}

      {/* Error Notification */}
      {error && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 p-3.5 text-sm text-rose-300 backdrop-blur-sm">
          {error}
        </div>
      )}

      {/* Row 1: First Name & Last Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
      </div>

      {/* Row 2: Work Email */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-white/90">
          Work Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="jane@institution.com"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>

      {/* Row 3: Company & Phone Number */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Jane"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 xxxx xxxx x"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Row 4: Designation & Product Dropdown */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            placeholder="e.g. Chief Technology Officer"
            value={formData.designation}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-white/90">
            Product
          </label>
          <div className="relative">
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className={`${inputClasses} appearance-none pr-10 text-white [&>option]:bg-[#0c1f24] [&>option]:text-white`}
            >
              <option value="" disabled className="text-white/40">
                Choose Product
              </option>
              {productOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-white/90">
          How can we help?
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your core banking systems or migration goals..."
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-[#6366F1] via-[#5844D1] to-[#3B2874] py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-all duration-200 hover:opacity-95 hover:shadow-indigo-500/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;