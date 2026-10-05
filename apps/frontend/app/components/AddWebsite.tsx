'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';

interface AddWebsiteProps {
  open: boolean;
  onClose: () => void;
  onAdded: () => void;
}

export default function AddWebsite({
  open,
  onClose,
  onAdded,
}: AddWebsiteProps) {
  const { getToken } = useAuth();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  async function handleAddWebsite() {
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const token = await getToken();

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/websites`,
        {
          url: url.trim(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setUrl('');

      onAdded();
      onClose();
    } catch (error) {
      console.error('Failed to add website:', error);
      setError('Failed to add website');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-ink-700/60 bg-ink-900 p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink-100">
            Add Website
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-400 transition hover:bg-ink-800 hover:text-ink-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* URL input */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-ink-300">
            Website URL
          </label>

          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddWebsite();
              }
            }}
            className="w-full rounded-lg border border-ink-700 bg-ink-950 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-500 focus:border-accent-500"
            autoFocus
          />

          {error && (
            <p className="mt-2 text-xs text-err-400">
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleAddWebsite}
            disabled={loading}
            className="rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Adding...' : 'Add Website'}
          </button>
        </div>
      </div>
    </div>
  );
}