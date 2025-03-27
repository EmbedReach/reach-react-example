"use client";

import { ReachProvider, SegmentBuilder } from "@embedreach/components";
import "@embedreach/components/styles.css";

const getAuthToken = async () => {
  /**
   * In a real application, you would fetch the auth token from your backend
   * or use a secure storage solution like Next.js's `cookies` API.
   */
  return "eyJh....";
};

const config = {
  /**
   * Optionally customize the theme
   */
  theme: {
    styles: {
      // Base colors
      background: "210 40% 98%", // Light blue-gray background
      foreground: "222 47% 11%", // Deep blue-gray text

      // Card elements
      card: "0 0% 100%", // Pure white card backgrounds
      "card-foreground": "222 47% 11%", // Same as main foreground for consistency

      // Popover elements
      popover: "0 0% 100%", // Pure white popover backgrounds
      "popover-foreground": "222 47% 11%", // Same as main foreground

      // Primary brand colors
      primary: "222 89% 55%", // Rich royal blue for main actions
      "primary-foreground": "210 40% 98%", // Light text on primary

      // Secondary elements
      secondary: "214 32% 91%", // Light blue-gray
      "secondary-foreground": "222 47% 11%", // Dark text on secondary

      // Muted elements
      muted: "214 32% 91%", // Light blue-gray for muted areas
      "muted-foreground": "215 16% 47%", // Subdued text that's still readable

      // Accent elements
      accent: "222 47% 90%", // Lighter primary for accents
      "accent-foreground": "222 47% 11%", // Dark text on accent

      // Destructive elements
      destructive: "0 84% 60%", // Vivid red for warnings/errors
      "destructive-foreground": "210 40% 98%", // Light text on destructive

      // Borders and inputs
      border: "214 32% 91%", // Light blue-gray borders
      input: "214 32% 91%", // Matching input borders
      ring: "222 89% 55%", // Focus rings match primary

      // Chart colors - harmonious palette
      "chart-1": "222 89% 55%", // Primary blue
      "chart-2": "262 83% 58%", // Purple
      "chart-3": "326 100% 74%", // Pink
      "chart-4": "25 95% 53%", // Orange
      "chart-5": "130 43% 57%", // Green

      // Border radius
      radius: "0.5rem", // Modern, slightly rounded corners

      // Fonts
      "font-body":
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      "font-heading":
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },

  /**
   * Define a function to get the auth token
   */
  authToken: await getAuthToken(),

  /**
   * Define the tenant external id
   */
  tenantExternalId: "oren123",

  /**
   * Define callbacks to handle reauth requests
   */
  callbacks: {
    onReauthRequested: async () => {
      const token = await getAuthToken();
      return token;
    },
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">
            This is an example of how to use Reach components in a Next.js app.
          </h1>
          <button
            onClick={() => {
              window.open(
                "https://docs.embedreach.com/embeddable-ui/react/introduction",
                "_blank"
              );
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Click to learn more about how to integrate Reach in your app
          </button>
        </div>
        <div className="w-full justify-center items-center">
          <ReachProvider {...config}>
            <div className="pb-5 border-2 border-gray-200 p-2 rounded-md">
              <SegmentBuilder
                onClose={(data) => {
                  if (data === false) {
                    console.log("SegmentBuilder closed");
                  } else {
                    console.log(
                      `SegmentBuilder created a new segment with id: ${data}`
                    );
                  }
                }}
              />
            </div>
          </ReachProvider>
        </div>
      </main>
    </div>
  );
}
