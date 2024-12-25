import { describe, it, expect } from 'vitest';
import { flipCoin } from './index.js';

describe('flipCoin', () => {
	it('should return either "Heads" or "Tails"', () => {
		const result = flipCoin();
		expect(['Heads', 'Tails']).toContain(result);
	});
});
