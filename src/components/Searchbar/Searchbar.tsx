'use client'

import { FormEvent, useState } from "react";

export default function Searchbar() {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = () => {
        const isvalidAmazonUrl = (url: string) => {
            try {
                const parsedURL = new URL(url)
                const hostname = parsedURL.hostname

                if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
                    return true
                }
            } catch {
                return false
            }

            return false
        }

        const validLink = isvalidAmazonUrl(searchPrompt)

        if (!validLink) return alert('Please enter a valid Amazon product link.')

        try {
            setIsLoading(true)
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            className="flex flex-wrap gap-4 mt-12"
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input"
            />

            <button
                type="submit"
                className="searchbar-btn"
            >
                Search
            </button>
        </form>
    );
}