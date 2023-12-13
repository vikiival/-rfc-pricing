// KSM constants: https://github.com/polkadot-fellows/runtimes/blob/main/relay/kusama/constants/src/lib.rs

const KSM_UNITS = 1_000_000_000_000;
const KSM_DOLLARS = KSM_UNITS / 30; // 33_333_333_333
const KSM_CENTS = KSM_DOLLARS / 100; // 333_333_333
const KSM_MILLICENTS = KSM_CENTS / 1_000; // 333_333

export function deposit(items, bytes) {
    return items  * 2_000 * KSM_CENTS + (bytes) * 100 * KSM_MILLICENTS
}