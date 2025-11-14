"use client";

import { useState, FormEvent } from "react";
import { Input, Button, Link, Divider, Form } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Logo } from "./logo";

export function Footer() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email } = Object.fromEntries(new FormData(e.currentTarget));

    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 900));
      setSuccess("Thanks for subscribing! Check your inbox to confirm.");
    } catch (error) {
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
                href="https://x.com/gopuadks"
                aria-label="Twitter"
                target="_blank"
                className="text-foreground-500 hover:text-foreground"
              >
                <Icon icon="mdi:twitter" height={22} />
              </Link>
              <Link
                href="https://github.com/gopaladhikari"
                aria-label="GitHub"
                target="_blank"
                className="text-foreground-500 hover:text-foreground"
              >
                <Icon icon="mdi:github" height={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gopuadks/"
                aria-label="LinkedIn"
                target="_blank"
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
            <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
              <Input
                isRequired
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
              <Button
                type="submit"
                color="primary"
                isLoading={loading}
                isDisabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </Form>
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
