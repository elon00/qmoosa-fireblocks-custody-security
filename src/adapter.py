"""Fireblocks MPC Custody Policy & Transaction Rules Engine."""
def evaluate_transaction_policy(amount_usd: float, destination_whitelisted: bool) -> str:
    if not destination_whitelisted:
        return "BLOCKED_UNAUTHORIZED_DESTINATION"
    if amount_usd > 100000.0:
        return "REQUIRES_MULTISIG_QUORUM"
    return "APPROVED_AUTO_SIGN"
