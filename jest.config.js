const config = {
    testMatch: [
        '<rootDir>/src/**/*.test.ts',
    ],
    transform: {
        '^.+\\.(j|t)s?$': ['@swc/jest', {}],
    },
    moduleFileExtensions: [
        'js', 'ts'
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.(j|t)s?$': '$1',
    },
    extensionsToTreatAsEsm: [
        '.ts'
    ],
};

export default config;