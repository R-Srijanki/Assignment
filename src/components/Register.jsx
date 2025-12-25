import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
export default function Register() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agent, setAgent] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Enter full name";
    }

    if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Enter valid 10 digit number";
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!password || !passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & symbol";
    }

    if (!company.trim()) {
      newErrors.company = "Enter company name";
    }

    if (!agent) {
      newErrors.agent = "Please select an option";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    login({
      name: name,
      email: email,
    });
    navigate("/account");
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm pt-10 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your PopX account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <label htmlFor="name">Full Name &#42;</label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

          {/* Phone */}
          <label htmlFor="contact">Phone Number &#42;</label>
          <input
            id="contact" 
            type="tel"
            placeholder="Phone Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          {errors.contact && (
            <p className="text-red-500 text-xs">{errors.contact}</p>
          )}

          {/* Email */}
          <label htmlFor="email">Email &#42;</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          {/* Password */}
          <label htmlFor="password">Password &#42;</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}

          {/* Company */}
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          {errors.company && (
            <p className="text-red-500 text-xs">{errors.company}</p>
          )}

          {/* Agent */}
          <div>
            <p className="text-sm font-medium mb-2">Are you an Agent? &#42;</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agent"
                  value="yes"
                  onChange={(e) => setAgent(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agent"
                  value="no"
                  onChange={(e) => setAgent(e.target.value)}
                />
                No
              </label>
            </div>
            {errors.agent && (
              <p className="text-red-500 text-xs mt-1">{errors.agent}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
