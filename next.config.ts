import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The vellum.ai teardown at /demo was replaced by the Slotwise worked example.
  async redirects() {
    return [{ source: "/demo", destination: "/work/slotwise", permanent: true }];
  },
};

export default nextConfig;
