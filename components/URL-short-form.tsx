"use client";

import { useState } from "react";
import { Form, Button, Link, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import QRCode from "react-qr-code";
import { MESSAGES } from "@/constants";

export function URLShortForm() {
  const [url, setUrl] = useState("");

  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      const code = data.code;

      const currentUrl = location.href;

      setShortUrl(`${currentUrl}url/${code}`);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();
    if (!text) {
      setError(MESSAGES.ERROR.URL_REQUIRED);
      return;
    }
    setUrl(text);
    setError("");
  };

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);

      addToast({
        title: MESSAGES.SUCCESS.URL_COPIED,
        color: "success",
      });
    } catch (error) {
      addToast({
        title: MESSAGES.ERROR.FAILED_TO_COPY,
        color: "danger",
        description: (error as Error).message,
      });
    }
  };

  return (
    <div className="w-full space-y-4">
      <Form className="w-full flex" onSubmit={onSubmit}>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-foreground"
        >
          Paste the URL to be shortened
        </label>

        <div className="flex w-full bg-white/60 p-2 rounded-2xl">
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the URL here"
            className="w-full focus-within:outline-none px-2"
          />
          <button
            type="button"
            onClick={pasteFromClipboard}
            className="cursor-pointer"
          >
            <Icon icon="mdi:content-paste" />
          </button>
        </div>
        <Button type="submit" isLoading={loading}>
          Submit
        </Button>
      </Form>

      {shortUrl && (
        <div className="flex items-center gap-4">
          Short Url:{" "}
          <Link href={shortUrl} target="_blank">
            {shortUrl}
          </Link>
          <Button
            type="button"
            variant="faded"
            size="sm"
            title="copy to clipboard"
            onPress={copyToClipBoard}
          >
            <Icon icon="mdi:content-copy" />
          </Button>
        </div>
      )}

      {shortUrl && (
        <div className="mt-4">
          <QRCode size={250} value={shortUrl} />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
