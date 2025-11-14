"use client";

import { useState } from "react";
import { Form, Input, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export function URLShortForm() {
  const [error, setErrors] = useState<Record<string, string>>({});
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputKey, setInputKey] = useState(0);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url) {
      setErrors({ url: "URL is required" });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orginalUrl: url }),
      });

      if (!res.ok) {
        setLoading(false);
        setErrors({ url: "URL is required" });
        return;
      }

      const data = await res.json();
      setLoading(false);

      setShortId(data.shortId);
    } catch (error) {
      setLoading(false);
      setErrors({ url: (error as Error).message });
    }
  };

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();
    if (!text) {
      setErrors({ url: "URL is required" });
      return;
    }
    setUrl(text);
    setErrors({});

    setInputKey((k) => k + 1);
  };

  return (
    <div className="w-full">
      <Form
        className="w-full flex"
        onSubmit={onSubmit}
        validationErrors={error}
      >
        <Input
          key={inputKey}
          label="Paste the URL to be shortened"
          labelPlacement="outside"
          type="url"
          name="url"
          value={url}
          onValueChange={setUrl}
          placeholder="Enter the URL here"
          validate={(v) => (v ? true : "URL is required")}
          endContent={
            <button type="button" onClick={pasteFromClipboard}>
              <Icon icon="mdi:content-paste" />
            </button>
          }
        />
        <Button type="submit" isLoading={loading}>
          Submit
        </Button>
      </Form>

      {shortId && (
        <div className="mt-4">
          <Link
            href={`${
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/"
                : "https://gopuadks-shrinkllink.netlify.app/"
            }${shortId}`}
            className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]"
          >
            {process.env.NODE_ENV === "development"
              ? "http://localhost:3000/"
              : "https://gopuadks-shrinkllink.netlify.app/"}
            {shortId}
          </Link>
        </div>
      )}
    </div>
  );
}
