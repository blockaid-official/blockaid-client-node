# Evm

Types:

- <code><a href="./src/resources/evm/evm.ts">AccountSummary</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc1155TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc20TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721Diff</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721Exposure</a></code>
- <code><a href="./src/resources/evm/evm.ts">Erc721TokenDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">NativeAddressAssetBalanceChangeDiff</a></code>
- <code><a href="./src/resources/evm/evm.ts">NativeAssetDetails</a></code>
- <code><a href="./src/resources/evm/evm.ts">NativeAssetTrace</a></code>
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

Types:

- <code><a href="./src/resources/evm/transaction.ts">TransactionReportResponse</a></code>

Methods:

- <code title="post /v0/evm/transaction/report">client.evm.transaction.<a href="./src/resources/evm/transaction.ts">report</a>({ ...params }) -> unknown</code>
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

## PostTransaction

Types:

- <code><a href="./src/resources/evm/post-transaction.ts">PostTransactionReportResponse</a></code>

Methods:

- <code title="post /v0/evm/post-transaction/report">client.evm.postTransaction.<a href="./src/resources/evm/post-transaction.ts">report</a>({ ...params }) -> unknown</code>
- <code title="post /v0/evm/post-transaction/scan">client.evm.postTransaction.<a href="./src/resources/evm/post-transaction.ts">scan</a>({ ...params }) -> TransactionScanResponse</code>

## PostTransactionBulk

Types:

- <code><a href="./src/resources/evm/post-transaction-bulk.ts">PostTransactionBulkScanResponse</a></code>

Methods:

- <code title="post /v0/evm/post-transaction-bulk/scan">client.evm.postTransactionBulk.<a href="./src/resources/evm/post-transaction-bulk.ts">scan</a>({ ...params }) -> PostTransactionBulkScanResponse</code>

# Solana

Types:

- <code><a href="./src/resources/solana/solana.ts">AddressScanRequestSchema</a></code>
- <code><a href="./src/resources/solana/solana.ts">AddressScanResponseSchema</a></code>

## Message

Types:

- <code><a href="./src/resources/solana/message.ts">MessageScanResponse</a></code>

Methods:

- <code title="post /v0/solana/message/scan">client.solana.message.<a href="./src/resources/solana/message.ts">scan</a>({ ...params }) -> MessageScanResponse</code>

## Address

Methods:

- <code title="post /v0/solana/address/scan">client.solana.address.<a href="./src/resources/solana/address.ts">scan</a>({ ...params }) -> AddressScanResponseSchema</code>

# Stellar

Types:

- <code><a href="./src/resources/stellar/stellar.ts">StellarAssetContractDetails</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarAssetTransferDetails</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarLegacyAssetDetails</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarNativeAssetDetails</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarSingleAssetExposure</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarTransactionScanRequest</a></code>
- <code><a href="./src/resources/stellar/stellar.ts">StellarTransactionScanResponse</a></code>

## Transaction

Types:

- <code><a href="./src/resources/stellar/transaction.ts">TransactionReportResponse</a></code>

Methods:

- <code title="post /v0/stellar/transaction/report">client.stellar.transaction.<a href="./src/resources/stellar/transaction.ts">report</a>({ ...params }) -> TransactionReportResponse</code>
- <code title="post /v0/stellar/transaction/scan">client.stellar.transaction.<a href="./src/resources/stellar/transaction.ts">scan</a>({ ...params }) -> StellarTransactionScanResponse</code>

# Bitcoin

Types:

- <code><a href="./src/resources/bitcoin/bitcoin.ts">BitcoinTransactionScanRequest</a></code>
- <code><a href="./src/resources/bitcoin/bitcoin.ts">BitcoinTransactionScanResponse</a></code>

## TransactionRaw

Types:

- <code><a href="./src/resources/bitcoin/transaction-raw.ts">TransactionRawReportResponse</a></code>

Methods:

- <code title="post /v0/bitcoin/transaction/report">client.bitcoin.transactionRaw.<a href="./src/resources/bitcoin/transaction-raw.ts">report</a>({ ...params }) -> TransactionRawReportResponse</code>
- <code title="post /v0/bitcoin/transaction-raw/scan">client.bitcoin.transactionRaw.<a href="./src/resources/bitcoin/transaction-raw.ts">scan</a>({ ...params }) -> BitcoinTransactionScanResponse</code>

# Starknet

Types:

- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc1155Details</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc1155Diff</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc20Details</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc20Diff</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc721Details</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetErc721Diff</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetTransactionScanRequest</a></code>
- <code><a href="./src/resources/starknet/starknet.ts">StarknetTransactionScanResponse</a></code>

## Transaction

Types:

- <code><a href="./src/resources/starknet/transaction.ts">TransactionReportResponse</a></code>

Methods:

- <code title="post /v0/starknet/transaction/report">client.starknet.transaction.<a href="./src/resources/starknet/transaction.ts">report</a>({ ...params }) -> TransactionReportResponse</code>
- <code title="post /v0/starknet/transaction/scan">client.starknet.transaction.<a href="./src/resources/starknet/transaction.ts">scan</a>({ ...params }) -> StarknetTransactionScanResponse</code>

# Sui

Types:

- <code><a href="./src/resources/sui/sui.ts">SuiAssetTransferDetailsSchema</a></code>
- <code><a href="./src/resources/sui/sui.ts">SuiNativeAssetDetailsSchema</a></code>
- <code><a href="./src/resources/sui/sui.ts">SuiNFTDetailsSchema</a></code>
- <code><a href="./src/resources/sui/sui.ts">SuiNFTDiffSchema</a></code>
- <code><a href="./src/resources/sui/sui.ts">SuiTransactionScanResponse</a></code>

## Transaction

Methods:

- <code title="post /v0/sui/transaction/scan">client.sui.transaction.<a href="./src/resources/sui/transaction.ts">scan</a>({ ...params }) -> SuiTransactionScanResponse</code>

# Site

Types:

- <code><a href="./src/resources/site.ts">SiteScanHitResponse</a></code>
- <code><a href="./src/resources/site.ts">SiteScanMissResponse</a></code>
- <code><a href="./src/resources/site.ts">SiteReportResponse</a></code>
- <code><a href="./src/resources/site.ts">SiteScanResponse</a></code>

Methods:

- <code title="post /v0/site/report">client.site.<a href="./src/resources/site.ts">report</a>({ ...params }) -> unknown</code>
- <code title="post /v0/site/scan">client.site.<a href="./src/resources/site.ts">scan</a>({ ...params }) -> SiteScanResponse</code>

# Scan

Types:

- <code><a href="./src/resources/scan.ts">ScanStatusResponse</a></code>

Methods:

- <code title="post /v0/scan/status/">client.scan.<a href="./src/resources/scan.ts">status</a>({ ...params }) -> unknown</code>

# Token

Types:

- <code><a href="./src/resources/token.ts">TokenReportResponse</a></code>
- <code><a href="./src/resources/token.ts">TokenScanResponse</a></code>

Methods:

- <code title="post /v0/token/report">client.token.<a href="./src/resources/token.ts">report</a>({ ...params }) -> unknown</code>
- <code title="post /v0/token/scan">client.token.<a href="./src/resources/token.ts">scan</a>({ ...params }) -> TokenScanResponse</code>

# TokenBulk

Types:

- <code><a href="./src/resources/token-bulk.ts">TokenBulkScanResponse</a></code>

Methods:

- <code title="post /v0/token-bulk/scan">client.tokenBulk.<a href="./src/resources/token-bulk.ts">scan</a>({ ...params }) -> TokenBulkScanResponse</code>
