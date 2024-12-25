/**
 * Flips a coin and returns 'Heads' or 'Tails'
 * @returns 'Heads' or 'Tails'
 */
export function flipCoin(): 'Heads' | 'Tails' {
	return Math.random() < 0.5 ? 'Heads' : 'Tails';
}
