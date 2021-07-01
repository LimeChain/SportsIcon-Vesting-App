import { ethers } from 'ethers';

class RouterSDK {
    constructor(signer, routerAddress, routerABI, erc20ABI) {
        this.signer = signer;
        this.routerContract = new ethers.Contract(routerAddress, routerABI, signer);
        this.erc20ABI = erc20ABI;
    }

    async balanceOfSportsIconTokens(tokenAddress, userAddress) {
        const tokenContract = new ethers.Contract(tokenAddress, this.erc20ABI, this.signer);
        const balance = await tokenContract.balanceOf(userAddress);
        return ethers.utils.formatUnits(balance);
    }

    async getUserTotalVestedAmount(userAddress) {
        const vestedTokens = await this.routerContract.vestedTokensOf(userAddress);
        return ethers.utils.formatUnits(vestedTokens);
    }

    async getUserFreeTokens(userAddress) {
        const freeTokensOf = await this.routerContract.freeTokens(userAddress);
        return ethers.utils.formatUnits(freeTokensOf);
    }

    async claimFreeTokens() {
        const claimedTokensReceipt = await (await this.routerContract.claim()).wait();
        return claimedTokensReceipt;
    }
}

export default RouterSDK;