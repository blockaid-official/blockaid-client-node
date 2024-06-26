# Evm

Types:

- <code><a href="./src/resources/evm/evm.ts">AddressAssetExposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">AssetDiff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">Metadata</a></code>
- <code><a href="./src/resources/evm/evm.ts">NativeAssetDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">NativeDiff</a></code>
- <code><a href="./src/resources/evm/evm.ts">NonercTokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">TokenScanSupportedChain</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionScanFeature</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionScanResponse</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionScanSupportedChain</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionSimulation</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionSimulationError</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionValidation</a></code>
- <code><a href="./src/resources/evm/evm.ts">TransactionValidationError</a></code>
- <code><a href="./src/resources/evm/evm.ts">UsdDiff</a></code>

## JsonRpc

Methods:

- <code title="post /v0/evm/json-rpc/scan">client.evm.jsonRpc.<a href="./src/resources/evm/json-rpc.ts">scan</a>({ ...params }) -> TransactionScanResponse</code>

## Transaction

Methods:

- <code title="post /v0/evm/transaction/scan">client.evm.transaction.<a href="./src/resources/evm/transaction.ts">scan</a>({ ...params }) -> TransactionScanResponse</code>

## TransactionBulk

Types:

- <code><a href="./src/resources/evm/transaction-bulk.ts">TransactionBulkScanResponse</a></code>

Methods:

- <code title="post /v0/evm/transaction-bulk/scan">client.evm.transactionBulk.<a href="./src/resources/evm/transaction-bulk.ts">scan</a>({ ...params }) -> TransactionBulkScanResponse</code>

## TransactionRaw

Methods:

- <code title="post /v0/evm/transaction-raw/scan">client.evm.transactionRaw.<a href="./src/resources/evm/transaction-raw.ts">scan</a>({ ...params }) -> TransactionScanResponse</code>

## UserOperation

Methods:

- <code title="post /v0/evm/user-operation/scan">client.evm.userOperation.<a href="./src/resources/evm/user-operation.ts">scan</a>({ ...params }) -> TransactionScanResponse</code>

# Site

Types:

- <code><a href="./src/resources/site.ts">SiteScanHitResponse</a></code>
- <code><a href="./src/resources/site.ts">SiteScanMissResponse</a></code>
- <code><a href="./src/resources/site.ts">SiteScanResponse</a></code>

Methods:

- <code title="post /v0/site/scan">client.site.<a href="./src/resources/site.ts">scan</a>({ ...params }) -> SiteScanResponse</code>

# Token

Types:

- <code><a href="./src/resources/token.ts">TokenScanResponse</a></code>

Methods:

- <code title="post /v0/token/scan">client.token.<a href="./src/resources/token.ts">scan</a>({ ...params }) -> TokenScanResponse</code>
