import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';

export default ts.config(
	js.configs.recommended,
	ts.configs.strictTypeChecked,
	pluginImport.flatConfigs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'import/no-unresolved': 'error',
			'import/extensions': ['error', 'always', { ts: 'never' }],
		},
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
		},
		ignores: [
			'dist/**',
			'vite.config.js',
			'vitest.config.js',
			'eslint.config.mjs',
		],
	}
);
