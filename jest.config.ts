import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    modulePaths: ["node_modules", "<rootDir>", "<rootDir>/src"],
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx|js|jsx)'],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    moduleNameMapper: {
        "parse5/lib/parser/index.js":
          "<rootDir>/node_modules/hast-util-raw/node_modules/parse5/lib/parser/index.js",
        "^@testing-library/(.*)$": "<rootDir>/node_modules/@testing-library/$1",
        "^@types/jest/(.*)$": "<rootDir>/node_modules/@types/jest/$1",
        "^@types/lodash/(.*)$": "<rootDir>/node_modules/@types/lodash/$1",
        "^@types/mapbox-gl/(.*)$": "<rootDir>/node_modules/@types/mapbox-gl/$1",
        "^@types/node/(.*)$": "<rootDir>/node_modules/@types/node/$1",
        "^@types/react/(.*)$": "<rootDir>/node_modules/@types/react/$1",
        "^@types/react-dom/(.*)$": "<rootDir>/node_modules/@types/react-dom/$1",
        "^@/(.*)$": "<rootDir>/$1",
        "^@pages/(.*)$": "<rootDir>/src/pages/$1",
        "^@styles/(.*)$": "<rootDir>/src/styles/$1",
        "^@components/(.*)$": "<rootDir>/src/common/components/$1",
        "^@types/(.*)$": "<rootDir>/src/common/types/$1",
        "^@utils/(.*)$": "<rootDir>/src/common/utils/$1",
        "^@(.*)/views$": "<rootDir>/src/modules/$1/models/views",
        "^@(.*)/transformers$": "<rootDir>/src/modules/$1/models/transformers",
      },
    
    transform: {
        "^.+\\.(ts|tsx)$": [
          "ts-jest",
          { babel: true, tsconfig: "tsconfig.test.json" },
        ],
        "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
      },
    
};

export default jestConfig;