# OverageReason

## Example Usage

```typescript
import { OverageReason } from "@vercel/sdk/models/userevent.js";

let value: OverageReason = "imageOptimizationCacheRead";
```

## Values

```typescript
"analyticsUsage" | "artifacts" | "bandwidth" | "blobTotalAdvancedRequests" | "blobTotalAvgSizeInBytes" | "blobTotalGetResponseObjectSizeInBytes" | "blobTotalSimpleRequests" | "connectDataTransfer" | "dataCacheRead" | "dataCacheWrite" | "edgeConfigRead" | "edgeConfigWrite" | "edgeFunctionExecutionUnits" | "edgeMiddlewareInvocations" | "edgeRequestAdditionalCpuDuration" | "edgeRequest" | "elasticConcurrencyBuildSlots" | "fastDataTransfer" | "fastOriginTransfer" | "fluidCpuDuration" | "fluidDuration" | "functionDuration" | "functionInvocation" | "imageOptimizationCacheRead" | "imageOptimizationCacheWrite" | "imageOptimizationTransformation" | "logDrainsVolume" | "monitoringMetric" | "blobDataTransfer" | "observabilityEvent" | "onDemandConcurrencyMinutes" | "postgresComputeTime" | "postgresDataStorage" | "postgresDataTransfer" | "postgresDatabase" | "postgresWrittenData" | "runtimeCacheRead" | "runtimeCacheWrite" | "serverlessFunctionExecution" | "sourceImages" | "storageRedisTotalBandwidthInBytes" | "storageRedisTotalCommands" | "storageRedisTotalDailyAvgStorageInBytes" | "storageRedisTotalDatabases" | "wafOwaspExcessBytes" | "wafOwaspRequests" | "wafRateLimitRequest" | "webAnalyticsEvent"
```