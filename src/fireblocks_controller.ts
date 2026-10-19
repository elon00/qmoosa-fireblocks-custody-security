import { FireblocksSDK, PeerType, TransactionOperation } from "fireblocks-sdk";

export class FireblocksCustodyController {
    private sdk: FireblocksSDK | null = null;

    constructor(apiSecret: string, apiKey: string) {
        if (apiSecret && apiKey) {
            this.sdk = new FireblocksSDK(apiSecret, apiKey);
        }
    }

    public evaluateWhitelistPolicy(destinationAddress: string, whitelistedAddresses: string[]): boolean {
        return whitelistedAddresses.includes(destinationAddress);
    }

    public async getVaultBalance(vaultAccountId: string): Promise<string> {
        return "Simulated_MPC_Vault_Balance_Verified";
    }
}
