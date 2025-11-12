"use client";

import { useState, FormEvent } from "react";
import { Input, Button, Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Logo } from "./logo";

function validateEmail(v: string) {
  return /[^@\s]+@[^@\s]+\.[^@\s]+/.test(v);
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 900));
      setSuccess("Thanks for subscribing! Check your inbox to confirm.");
      setEmail("");
    } catch (_) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-content1 text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-foreground-500 text-sm leading-relaxed">
              Shorten, brand, and track your links with ease.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-foreground-500 hover:text-foreground"
              >
                <Icon icon="mdi:twitter" height={22} />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="text-foreground-500 hover:text-foreground"
              >
                <Icon icon="mdi:github" height={22} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-foreground-500 hover:text-foreground"
              >
                <Icon icon="mdi:linkedin" height={22} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3 text-foreground">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" color="foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3 text-foreground">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" color="foreground">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3 text-foreground">
              Newsletter
            </h4>
            <p className="text-foreground-500 text-sm mb-4">
              Get product updates and tips. No spam.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
              noValidate
            >
              <Input
                type="email"
                label="Email address"
                labelPlacement="outside"
                placeholder="you@example.com"
                value={email}
                onValueChange={setEmail}
                isInvalid={!!error}
                errorMessage={error || undefined}
                radius="sm"
              />
              <Button
                type="submit"
                color="primary"
                radius="sm"
                isLoading={loading}
                endContent={<Icon icon="tabler:send" height={18} />}
              >
                Subscribe
              </Button>
              {success && (
                <p
                  className="text-success text-sm"
                  role="status"
                  aria-live="polite"
                >
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-500">
          <p>© {new Date().getFullYear()} ShrinkLink. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" color="foreground">
              Terms
            </Link>
            <Link href="#" color="foreground">
              Privacy
            </Link>
            <Link href="#" color="foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
