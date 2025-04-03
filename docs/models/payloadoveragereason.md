# PayloadOverageReason

## Example Usage

```typescript
import { PayloadOverageReason } from "@vercel/sdk/models/userevent.js";

let value: PayloadOverageReason = "postgresDataStorage";
```

## Values

```typescript
"aiCredits" | "analyticsUsage" | "artifacts" | "bandwidth" | "blobTotalAdvancedRequests" | "blobTotalAvgSizeInBytes" | "blobTotalGetResponseObjectSizeInBytes" | "blobTotalSimpleRequests" | "dataCacheRead" | "dataCacheWrite" | "edgeConfigRead" | "edgeConfigWrite" | "edgeFunctionExecutionUnits" | "edgeMiddlewareInvocations" | "edgeRequestAdditionalCpuDuration" | "edgeRequest" | "elasticConcurrencyBuildSlots" | "fastDataTransfer" | "fastOriginTransfer" | "functionDuration" | "functionInvocation" | "imageOptimizationCacheRead" | "imageOptimizationCacheWrite" | "imageOptimizationTransformation" | "logDrainsVolume" | "monitoringMetric" | "blobDataTransfer" | "observabilityEvent" | "postgresComputeTime" | "postgresDataStorage" | "postgresDataTransfer" | "postgresDatabase" | "postgresWrittenData" | "serverlessFunctionExecution" | "sourceImages" | "storageRedisTotalBandwidthInBytes" | "storageRedisTotalCommands" | "storageRedisTotalDailyAvgStorageInBytes" | "storageRedisTotalDatabases" | "wafOwaspExcessBytes" | "wafOwaspRequests" | "wafRateLimitRequest" | "webAnalyticsEvent"
```