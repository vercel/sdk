# AggregateEventsData2

## Example Usage

```typescript
import { AggregateEventsData2 } from "@vercel/sdk/models/aggregateeventsop.js";

let value: AggregateEventsData2 = {
  projectId: "<id>",
  country: "Bahamas",
  deviceType: "<value>",
  environment: "<value>",
  requestPath: "<value>",
  referrerHostname: "<value>",
  osName: "<value>",
  browserName: "<value>",
  route: "<value>",
  utmSource: "<value>",
  utmMedium: "<value>",
  utmCampaign: "<value>",
  utmContent: "<value>",
  utmTerm: "<value>",
  flags: "<value>",
  errorMessage: "<value>",
  entryRevalidateSeconds: "<value>",
  projectName: "<value>",
  deploymentId: "<id>",
  pathType: "<value>",
  pathTypeVariant: "<value>",
  requestHostname: "<value>",
  requestResolvedIp: "<value>",
  requestMethod: "<value>",
  requestExtension: "<value>",
  requestId: "<id>",
  requestApi: "<value>",
  referrerUrl: "https://untried-antelope.biz",
  serverActionName: "<value>",
  httpStatus: "100",
  errorCode: "<value>",
  source: "<value>",
  edgeType: "<value>",
  reason: "<value>",
  edgeNetworkRegion: "<value>",
  functionRegion: "<value>",
  imageTransformationRegion: "<value>",
  dataCacheRegion: "<value>",
  cause: "<value>",
  runtime: "<value>",
  provider: "<value>",
  isrCacheRegion: "<value>",
  isrAction: "<value>",
  cacheResult: "<value>",
  cacheOperation: "<value>",
  cacheHostname: "<value>",
  cachePath: "<value>",
  cacheHitState: "<value>",
  cacheHitLevel: "<value>",
  cacheApi: "<value>",
  cacheReason: "<value>",
  pprState: "<value>",
  clientIp: "<value>",
  clientIpCountry: "<value>",
  clientUserAgent: "<value>",
  httpAccept: "<value>",
  clientJa4Digest: "<value>",
  asnId: "<id>",
  asnName: "<value>",
  botName: "<value>",
  botCategory: "<value>",
  botCategoryLegacy: "<value>",
  botVerified: "<value>",
  botCheckResult: "<value>",
  deepAnalysisCheck: "<value>",
  wafAction: "<value>",
  wafRuleId: "<id>",
  skewProtection: "<value>",
  functionStartType: "<value>",
  functionDispatcher: "<value>",
  isAdditionalRequest: "<value>",
  originHostname: "<value>",
  originPath: "<value>",
  originRoute: "<value>",
  fetchType: "<value>",
  fetchIndex: "<value>",
  imageSource: "<value>",
  sourceImage: "<value>",
  sourceImagePathname: "<value>",
  sourceImageHostname: "<value>",
  sourceImageHash: "<value>",
  optimizedQuality: "<value>",
  optimizedWidthPixels: "<value>",
  optimizedFormatMimeType: "<value>",
  vdcOperationOrigin: "<value>",
  entryName: "<value>",
  entryId: "<id>",
  entryItemId: "<id>",
  tagName: "<value>",
  cacheTags: "<value>",
  storeId: "<id>",
  storeName: "<value>",
  blobOperationType: "<value>",
  blobOperationLevel: "<value>",
  visitorId: "<id>",
  eventName: "<value>",
  attributionTarget: "<value>",
  attributionEventName: "<value>",
  metricName: "<value>",
  attributes: "<value>",
  flagKey: "<value>",
  flagVariant: "<value>",
  flagEvaluationReason: "<value>",
  flagClientName: "<value>",
  sdkKeyId: "<id>",
  sdkKeyEnvironment: "<value>",
  reportingProjectId: "<id>",
  reportingProjectName: "<value>",
  eventData: "<value>",
  middlewareAction: "<value>",
  middlewareActionTarget: "<value>",
  aiModel: "<value>",
  aiGatewayModelId: "<id>",
  aiProvider: "<value>",
  aiModelType: "<value>",
  servedSpeed: "<value>",
  virtualModelSlug: "<value>",
  virtualModelKind: "<value>",
  inferenceEndpointSlug: "<value>",
  inferenceScope: "<value>",
  inferenceGeoRegion: "<value>",
  inferenceProviderRegion: "<value>",
  requestedInferenceRegion: "<value>",
  costCurrency: "<value>",
  marketCostCurrency: "<value>",
  cachedInputTokensCurrency: "<value>",
  cacheCreationInputTokensCurrency: "<value>",
  cacheCreation1hInputTokensCurrency: "<value>",
  surchargeCostCurrency: "<value>",
  gatewayCostCurrency: "<value>",
  keyId: "<id>",
  keyName: "<value>",
  isByok: "<value>",
  isPrivateModel: "<value>",
  isRequestZdr: "<value>",
  hipaaRequested: "<value>",
  quotaRequested: "<value>",
  quotaEntityId: "<id>",
  quotaEntityType: "<value>",
  videoResolution: "<value>",
  videoAspectRatio: "<value>",
  piiRedactionApplied: "<value>",
  moderationApplied: "<value>",
  queueName: "<value>",
  consumerGroup: "<value>",
  messageId: "<id>",
  eventType: "<value>",
  notificationUrl: "https://unwelcome-hospitalization.net/",
  sandboxSessionId: "<id>",
  sandboxName: "<value>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  workflowStatus: "<value>",
  stepRunId: "<id>",
  workflowStepName: "<value>",
  workflowEventType: "<value>",
  region: "<value>",
  specVersion: "<value>",
  contentType: "<value>",
  rewriteDestinationHostname: "<value>",
  externalRewriteTargetHost: "<value>",
  externalRewriteTargetPath: "<value>",
  commitSha: "<value>",
  reviewConclusion: "<value>",
  pullRequestNumber: "<value>",
  repositoryName: "<value>",
  repositoryOwner: "<value>",
  reviewStatus: "<value>",
  pullRequestState: "<value>",
  triggeringTag: "<value>",
  redirectLocation: "<value>",
  microfrontendsResponseReason: "<value>",
  microfrontendsMatchedPath: "<value>",
  microfrontendsDefaultAppDeploymentId: "<id>",
  microfrontendsDefaultAppProjectId: "<id>",
  service: "<value>",
  isPrefetchRequest: "<value>",
  spendReportGroupBy: "<value>",
  spendReportDatePart: "<value>",
  providerAttemptCanonicalSlug: "<value>",
  providerAttemptCredentialType: "<value>",
  providerAttemptSuccess: "<value>",
  providerAttemptStatusCode: "<value>",
  providerAttemptTimeout: "<value>",
  providerAttemptIsFinal: "<value>",
  providerAttemptNumber: "<value>",
  providerAttemptTotalInRequest: "<value>",
  generationId: "<id>",
  sessionId: "<id>",
  contentCaptureStatus: "<value>",
  contentCaptureInputs: "<value>",
  contentCaptureOutputs: "<value>",
  providerAttemptError: "<value>",
  providerAttemptSafetyIdentifier: "<value>",
  providerAttemptDevSafetyIdentifier: "<value>",
  providerAttemptRegion: "<value>",
  providerAttemptModelIndex: "<value>",
  toolCallType: "<value>",
  toolCallProvider: "<value>",
  toolCallSuccess: "<value>",
  toolCallErrorType: "<value>",
  toolCallStatusCode: "<value>",
  environmentId: "<id>",
  billableRegion: "<value>",
  direction: "<value>",
  networkTenancy: "<value>",
  trafficSource: "<value>",
  networkId: "<id>",
  privatelinkEndpointId: "<id>",
  privatelinkDnsName: "<value>",
  privatelinkIpAddress: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `country`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deviceType`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `environment`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestPath`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `referrerHostname`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `osName`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `browserName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `route`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmSource`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmMedium`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmCampaign`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmContent`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmTerm`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flags`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `errorMessage`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryRevalidateSeconds`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deploymentId`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pathType`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pathTypeVariant`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestHostname`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestResolvedIp`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestMethod`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestExtension`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestApi`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `referrerUrl`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `serverActionName`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `httpStatus`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `errorCode`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `source`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `edgeType`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reason`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `edgeNetworkRegion`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `imageTransformationRegion`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `dataCacheRegion`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cause`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `runtime`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `provider`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isrCacheRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isrAction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheResult`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheOperation`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHostname`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cachePath`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHitState`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHitLevel`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheApi`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheReason`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pprState`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientIp`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientIpCountry`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientUserAgent`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `httpAccept`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientJa4Digest`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `asnId`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `asnName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCategory`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCategoryLegacy`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botVerified`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCheckResult`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deepAnalysisCheck`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `wafAction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `wafRuleId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `skewProtection`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionStartType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionDispatcher`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isAdditionalRequest`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originHostname`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originPath`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originRoute`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `fetchType`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `fetchIndex`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `imageSource`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImage`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImagePathname`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImageHostname`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImageHash`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedQuality`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedWidthPixels`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedFormatMimeType`              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `vdcOperationOrigin`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryId`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryItemId`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `tagName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheTags`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `storeId`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `storeName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `blobOperationType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `blobOperationLevel`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `visitorId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributionTarget`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributionEventName`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `metricName`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributes`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagKey`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagVariant`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagEvaluationReason`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagClientName`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sdkKeyId`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sdkKeyEnvironment`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reportingProjectId`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reportingProjectName`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventData`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `middlewareAction`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `middlewareActionTarget`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiModel`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiGatewayModelId`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiProvider`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiModelType`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `servedSpeed`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `virtualModelSlug`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `virtualModelKind`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceEndpointSlug`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceScope`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceGeoRegion`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceProviderRegion`              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestedInferenceRegion`             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `costCurrency`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `marketCostCurrency`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cachedInputTokensCurrency`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheCreationInputTokensCurrency`     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheCreation1hInputTokensCurrency`   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `surchargeCostCurrency`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `gatewayCostCurrency`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `keyId`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `keyName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isByok`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isPrivateModel`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isRequestZdr`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `hipaaRequested`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaRequested`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaEntityId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaEntityType`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `videoResolution`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `videoAspectRatio`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `piiRedactionApplied`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `moderationApplied`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `queueName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consumerGroup`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `messageId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventType`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `notificationUrl`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sandboxSessionId`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sandboxName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowRunId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowName`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowStatus`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `stepRunId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowStepName`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowEventType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `region`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `specVersion`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentType`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `rewriteDestinationHostname`           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `externalRewriteTargetHost`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `externalRewriteTargetPath`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `commitSha`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reviewConclusion`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pullRequestNumber`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `repositoryName`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `repositoryOwner`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reviewStatus`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pullRequestState`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `triggeringTag`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `redirectLocation`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsResponseReason`         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsMatchedPath`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsDefaultAppDeploymentId` | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsDefaultAppProjectId`    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `service`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isPrefetchRequest`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `spendReportGroupBy`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `spendReportDatePart`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptCanonicalSlug`         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptCredentialType`        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptSuccess`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptStatusCode`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptTimeout`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptIsFinal`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptNumber`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptTotalInRequest`        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `generationId`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sessionId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureStatus`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureInputs`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureOutputs`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptError`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptSafetyIdentifier`      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptDevSafetyIdentifier`   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptRegion`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptModelIndex`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallType`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallProvider`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallSuccess`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallErrorType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallStatusCode`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `environmentId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `billableRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `direction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `networkTenancy`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `trafficSource`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `networkId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkEndpointId`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkDnsName`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkIpAddress`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `additionalProperties`                 | Record<string, *number*>               | :heavy_minus_sign:                     | N/A                                    |