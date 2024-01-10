import * as fcl from "@onflow/fcl"

const USE_LOCAL = true

// prettier-ignore
fcl.config()
  .put('app.detail.title', 'Test Harness')
  .put('app.detail.icon', 'https://placekitten.com/g/200/200')
  .put('service.OpenID.scopes', 'email')
  .put('fcl.appDomainTag', 'harness-app')

if (USE_LOCAL) {
  // prettier-ignore
  fcl.config()
    .put('flow.network', 'testnet')
    .put('env', 'testnet')
    .put('accessNode.api', 'https://rest-testnet.onflow.org')
    .put('discovery.wallet', 'http://localhost:3014/v1/fcl/authn?ak=pk_live_57F1A666E6E19BCA')
    .put('discovery.wallet.method', 'IFRAME/RPC')
} else {
  // prettier-ignore
  fcl.config()
    .put('flow.network', 'testnet')
    .put('env', 'testnet')
    .put('accessNode.api', 'https://access-testnet.onflow.org')
    .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
}
