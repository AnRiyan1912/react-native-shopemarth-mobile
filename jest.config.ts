import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    bail: 1,
    verbose: true,
    // ... konfigurasi lainnya ...
    // Pastikan konfigurasi di sini disesuaikan dengan proyek Anda.
    // Contoh:
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    preset: "ts-jest",
    testEnvironment: "node",
  };
};
