# UserEventPayloadOverageReason

## Example Usage

```typescript
import { UserEventPayloadOverageReason } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadOverageReason = "wafRateLimitRequest";
```

## Values

```typescript
"analyticsUsage" | "artifacts" | "bandwidth" | "blobTotalAdvancedRequests" | "blobTotalAvgSizeInBytes" | "blobTotalGetResponseObjectSizeInBytes" | "blobTotalSimpleRequests" | "dataCacheRead" | "dataCacheWrite" | "edgeConfigRead" | "edgeConfigWrite" | "edgeFunctionExecutionUnits" | "edgeMiddlewareInvocations" | "edgeRequestAdditionalCpuDuration" | "edgeRequest" | "elasticConcurrencyBuildSlots" | "fastDataTransfer" | "fastOriginTransfer" | "functionDuration" | "functionInvocation" | "imageOptimizationCacheRead" | "imageOptimizationCacheWrite" | "imageOptimizationTransformation" | "logDrainsVolume" | "monitoringMetric" | "blobDataTransfer" | "observabilityEvent" | "postgresComputeTime" | "postgresDataStorage" | "postgresDataTransfer" | "postgresDatabase" | "postgresWrittenData" | "serverlessFunctionExecution" | "sourceImages" | "storageRedisTotalBandwidthInBytes" | "storageRedisTotalCommands" | "storageRedisTotalDailyAvgStorageInBytes" | "storageRedisTotalDatabases" | "wafOwaspExcessBytes" | "wafOwaspRequests" | "wafRateLimitRequest" | "webAnalyticsEvent"
```