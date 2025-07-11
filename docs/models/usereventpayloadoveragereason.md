# UserEventPayloadOverageReason

## Example Usage

```typescript
import { UserEventPayloadOverageReason } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadOverageReason = "wafRateLimitRequest";
```

## Values

```typescript
"analyticsUsage" | "artifacts" | "bandwidth" | "blobTotalAdvancedRequests" | "blobTotalAvgSizeInBytes" | "blobTotalGetResponseObjectSizeInBytes" | "blobTotalSimpleRequests" | "connectDataTransfer" | "dataCacheRead" | "dataCacheWrite" | "edgeConfigRead" | "edgeConfigWrite" | "edgeFunctionExecutionUnits" | "edgeMiddlewareInvocations" | "edgeRequestAdditionalCpuDuration" | "edgeRequest" | "elasticConcurrencyBuildSlots" | "fastDataTransfer" | "fastOriginTransfer" | "fluidCpuDuration" | "fluidDuration" | "functionDuration" | "functionInvocation" | "imageOptimizationCacheRead" | "imageOptimizationCacheWrite" | "imageOptimizationTransformation" | "logDrainsVolume" | "monitoringMetric" | "blobDataTransfer" | "observabilityEvent" | "onDemandConcurrencyMinutes" | "runtimeCacheRead" | "runtimeCacheWrite" | "serverlessFunctionExecution" | "sourceImages" | "wafOwaspExcessBytes" | "wafOwaspRequests" | "wafRateLimitRequest" | "webAnalyticsEvent"
```