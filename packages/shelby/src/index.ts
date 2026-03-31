
export class ShelbyClient {
  private balances = new Map<string, number>();

  faucet(user: string, amt: number){ this.balances.set(user, amt); }
  getBalance(user: string){ return this.balances.get(user)||0; }

  async uploadChunk(streamId:string, chunk:Buffer){
    return `${streamId}-${Date.now()}`;
  }

  async getChunk(streamId:string, ts:number){
    return Buffer.from(`chunk-${streamId}-${ts}`);
  }

  async verifyAccess(user:string){
    return this.getBalance(user)>0;
  }

  async chargePerSecond(user:string, amt:number){
    const b=this.getBalance(user);
    if(b<amt) throw new Error("no balance");
    this.balances.set(user,b-amt);
  }
}
