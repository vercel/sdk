# CountEventsData1

## Example Usage

```typescript
import { CountEventsData1 } from "@vercel/sdk/models/counteventsop.js";

let value: CountEventsData1 = {
  affinityOutcome: "<value>",
  aiGatewayModelId: "<id>",
  aiModel: "<value>",
  aiModelType: "<value>",
  aiProvider: "<value>",
  appName: "<value>",
  asnId: "<id>",
  asnName: "<value>",
  attributes: "<value>",
  attributionEventName: "<value>",
  attributionTarget: "<value>",
  authMethod: "<value>",
  billableRegion: "<value>",
  blobOperationLevel: "<value>",
  blobOperationType: "<value>",
  botCategory: "<value>",
  botCategoryLegacy: "<value>",
  botCheckResult: "<value>",
  botName: "<value>",
  botVerified: "<value>",
  browserName: "<value>",
  cacheApi: "<value>",
  cacheCreation1hInputTokensCurrency: "<value>",
  cacheCreationInputTokensCurrency: "<value>",
  cachedInputTokensCurrency: "<value>",
  cacheHitLevel: "<value>",
  cacheHitState: "<value>",
  cacheHostname: "<value>",
  cacheOperation: "<value>",
  cachePath: "<value>",
  cacheReason: "<value>",
  cacheResult: "<value>",
  cacheTags: "<value>",
  cause: "<value>",
  clientIp: "<value>",
  clientIpCountry: "<value>",
  clientJa4Digest: "<value>",
  clientSessionId: "<id>",
  clientUserAgent: "<value>",
  codingAgent: "<value>",
  commitSha: "<value>",
  consumerGroup: "<value>",
  contentCaptureInputs: "<value>",
  contentCaptureOutputs: "<value>",
  contentCaptureStatus: "<value>",
  contentType: "<value>",
  costCurrency: "<value>",
  country: "Bahamas",
  dataCacheRegion: "<value>",
  deepAnalysisCheck: "<value>",
  deploymentId: "<id>",
  deviceType: "<value>",
  direction: "<value>",
  edgeNetworkRegion: "<value>",
  edgeType: "<value>",
  entryId: "<id>",
  entryItemId: "<id>",
  entryName: "<value>",
  entryRevalidateSeconds: "<value>",
  environment: "<value>",
  environmentId: "<id>",
  errorCode: "<value>",
  errorMessage: "<value>",
  eventData: "<value>",
  eventName: "<value>",
  eventType: "<value>",
  externalRewriteTargetHost: "<value>",
  externalRewriteTargetPath: "<value>",
  fetchIndex: "<value>",
  fetchType: "<value>",
  flagClientName: "<value>",
  flagEvaluationReason: "<value>",
  flagKey: "<value>",
  flags: "<value>",
  flagVariant: "<value>",
  functionDispatcher: "<value>",
  functionRegion: "<value>",
  functionStartType: "<value>",
  gatewayCostCurrency: "<value>",
  generationId: "<id>",
  hipaaRequested: "<value>",
  httpAccept: "<value>",
  httpStatus: "100",
  imageSource: "<value>",
  imageTransformationRegion: "<value>",
  inferenceEndpointSlug: "<value>",
  inferenceGeoRegion: "<value>",
  inferenceProviderRegion: "<value>",
  inferenceScope: "<value>",
  invokeSource: "<value>",
  isAdditionalRequest: "<value>",
  isByok: "<value>",
  isPrefetchRequest: "<value>",
  isPrivateModel: "<value>",
  isrAction: "<value>",
  isrCacheRegion: "<value>",
  isRequestZdr: "<value>",
  isStreaming: "<value>",
  keyId: "<id>",
  keyName: "<value>",
  marketCostCurrency: "<value>",
  messageId: "<id>",
  metricName: "<value>",
  microfrontendsDefaultAppDeploymentId: "<id>",
  microfrontendsDefaultAppProjectId: "<id>",
  microfrontendsMatchedPath: "<value>",
  microfrontendsResponseReason: "<value>",
  middlewareAction: "<value>",
  middlewareActionTarget: "<value>",
  moderationApplied: "<value>",
  networkId: "<id>",
  networkTenancy: "<value>",
  notificationUrl: "https://insignificant-lifestyle.info",
  optimizedFormatMimeType: "<value>",
  optimizedQuality: "<value>",
  optimizedWidthPixels: "<value>",
  originHostname: "<value>",
  originPath: "<value>",
  originRoute: "<value>",
  osName: "<value>",
  pathType: "<value>",
  pathTypeVariant: "<value>",
  piiRedactionApplied: "<value>",
  pprState: "<value>",
  privatelinkDnsName: "<value>",
  privatelinkEndpointId: "<id>",
  privatelinkIpAddress: "<value>",
  projectId: "<id>",
  projectName: "<value>",
  provider: "<value>",
  providerAttemptCanonicalSlug: "<value>",
  providerAttemptCredentialType: "<value>",
  providerAttemptDevSafetyIdentifier: "<value>",
  providerAttemptError: "<value>",
  providerAttemptIsFinal: "<value>",
  providerAttemptModelIndex: "<value>",
  providerAttemptNumber: "<value>",
  providerAttemptRegion: "<value>",
  providerAttemptSafetyIdentifier: "<value>",
  providerAttemptStatusCode: "<value>",
  providerAttemptSuccess: "<value>",
  providerAttemptTimeout: "<value>",
  providerAttemptTotalInRequest: "<value>",
  pullRequestNumber: "<value>",
  pullRequestState: "<value>",
  queueName: "<value>",
  queueRegion: "<value>",
  quotaEntityId: "<id>",
  quotaEntityType: "<value>",
  quotaRequested: "<value>",
  reason: "<value>",
  redirectLocation: "<value>",
  referrerHostname: "<value>",
  referrerUrl: "https://nautical-dredger.net/",
  region: "<value>",
  reportingProjectId: "<id>",
  reportingProjectName: "<value>",
  repositoryName: "<value>",
  repositoryOwner: "<value>",
  requestApi: "<value>",
  requestedInferenceRegion: "<value>",
  requestExtension: "<value>",
  requestHostname: "<value>",
  requestId: "<id>",
  requestMethod: "<value>",
  requestPath: "<value>",
  requestResolvedIp: "<value>",
  reviewConclusion: "<value>",
  reviewStatus: "<value>",
  rewriteDestinationHostname: "<value>",
  route: "<value>",
  ruleCategory: "<value>",
  runtime: "<value>",
  sandboxName: "<value>",
  sandboxSessionId: "<id>",
  scheduleEventType: "<value>",
  scheduleExecutionId: "<id>",
  scheduleExpressionType: "<value>",
  scheduleId: "<id>",
  scheduleName: "<value>",
  scheduleNamespace: "<value>",
  scheduleSource: "<value>",
  scheduleTarget: "<value>",
  scheduleTargetType: "<value>",
  scheduleTimezone: "<value>",
  scheduleTrack: "<value>",
  sdkKeyEnvironment: "<value>",
  sdkKeyId: "<id>",
  servedSpeed: "<value>",
  serverActionName: "<value>",
  service: "<value>",
  sessionId: "<id>",
  singleAtInput: "<value>",
  singleAtResolution: "<value>",
  skewProtection: "<value>",
  source: "<value>",
  sourceImage: "<value>",
  sourceImageHash: "<value>",
  sourceImageHostname: "<value>",
  sourceImagePathname: "<value>",
  specVersion: "<value>",
  spendAttribution: "<value>",
  spendReportDatePart: "<value>",
  spendReportGroupBy: "<value>",
  stepRunId: "<id>",
  storeId: "<id>",
  storeName: "<value>",
  surchargeCostCurrency: "<value>",
  tagName: "<value>",
  toolCallErrorType: "<value>",
  toolCallProvider: "<value>",
  toolCallStatusCode: "<value>",
  toolCallSuccess: "<value>",
  toolCallType: "<value>",
  trafficSource: "<value>",
  transcriptInputs: "<value>",
  transcriptOutputs: "<value>",
  transcriptStatus: "<value>",
  triggeringTag: "<value>",
  utmCampaign: "<value>",
  utmContent: "<value>",
  utmMedium: "<value>",
  utmSource: "<value>",
  utmTerm: "<value>",
  vdcOperationOrigin: "<value>",
  videoAspectRatio: "<value>",
  videoResolution: "<value>",
  virtualModelKind: "<value>",
  virtualModelSlug: "<value>",
  visitorId: "<id>",
  wafAction: "<value>",
  wafRuleId: "<id>",
  workflowEventType: "<value>",
  workflowName: "<value>",
  workflowRunId: "<id>",
  workflowStatus: "<value>",
  workflowStepName: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `affinityOutcome`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiGatewayModelId`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiModel`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiModelType`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `aiProvider`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `appName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `asnId`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `asnName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributes`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributionEventName`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `attributionTarget`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `authMethod`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `billableRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `blobOperationLevel`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `blobOperationType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCategory`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCategoryLegacy`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botCheckResult`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `botVerified`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `browserName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheApi`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheCreation1hInputTokensCurrency`   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheCreationInputTokensCurrency`     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cachedInputTokensCurrency`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHitLevel`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHitState`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheHostname`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheOperation`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cachePath`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheReason`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheResult`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cacheTags`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `cause`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientIp`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientIpCountry`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientJa4Digest`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientSessionId`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `clientUserAgent`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `codingAgent`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `commitSha`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `consumerGroup`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureInputs`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureOutputs`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentCaptureStatus`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `contentType`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `costCurrency`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `country`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `dataCacheRegion`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deepAnalysisCheck`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deploymentId`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deviceType`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `direction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `edgeNetworkRegion`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `edgeType`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryId`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryItemId`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `entryRevalidateSeconds`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `environment`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `environmentId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `errorCode`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `errorMessage`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventData`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `eventType`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `externalRewriteTargetHost`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `externalRewriteTargetPath`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `fetchIndex`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `fetchType`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagClientName`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagEvaluationReason`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagKey`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flags`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `flagVariant`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionDispatcher`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `functionStartType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `gatewayCostCurrency`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `generationId`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `hipaaRequested`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `httpAccept`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `httpStatus`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `imageSource`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `imageTransformationRegion`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceEndpointSlug`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceGeoRegion`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceProviderRegion`              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `inferenceScope`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `invokeSource`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isAdditionalRequest`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isByok`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isPrefetchRequest`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isPrivateModel`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isrAction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isrCacheRegion`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isRequestZdr`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `isStreaming`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `keyId`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `keyName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `marketCostCurrency`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `messageId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `metricName`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsDefaultAppDeploymentId` | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsDefaultAppProjectId`    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsMatchedPath`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `microfrontendsResponseReason`         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `middlewareAction`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `middlewareActionTarget`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `moderationApplied`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `networkId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `networkTenancy`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `notificationUrl`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedFormatMimeType`              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedQuality`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `optimizedWidthPixels`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originHostname`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originPath`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `originRoute`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `osName`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pathType`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pathTypeVariant`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `piiRedactionApplied`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pprState`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkDnsName`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkEndpointId`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `privatelinkIpAddress`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `projectId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `provider`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptCanonicalSlug`         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptCredentialType`        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptDevSafetyIdentifier`   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptError`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptIsFinal`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptModelIndex`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptNumber`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptRegion`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptSafetyIdentifier`      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptStatusCode`            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptSuccess`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptTimeout`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `providerAttemptTotalInRequest`        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pullRequestNumber`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `pullRequestState`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `queueName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `queueRegion`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaEntityId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaEntityType`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `quotaRequested`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reason`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `redirectLocation`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `referrerHostname`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `referrerUrl`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `region`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reportingProjectId`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reportingProjectName`                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `repositoryName`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `repositoryOwner`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestApi`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestedInferenceRegion`             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestExtension`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestHostname`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestMethod`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestPath`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `requestResolvedIp`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reviewConclusion`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `reviewStatus`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `rewriteDestinationHostname`           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `route`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `ruleCategory`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `runtime`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sandboxName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sandboxSessionId`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleEventType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleExecutionId`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleExpressionType`               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleId`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleName`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleNamespace`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleSource`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleTarget`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleTargetType`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleTimezone`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scheduleTrack`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sdkKeyEnvironment`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sdkKeyId`                             | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `servedSpeed`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `serverActionName`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `service`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sessionId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `singleAtInput`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `singleAtResolution`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `skewProtection`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `source`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImage`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImageHash`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImageHostname`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `sourceImagePathname`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `specVersion`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `spendAttribution`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `spendReportDatePart`                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `spendReportGroupBy`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `stepRunId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `storeId`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `storeName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `surchargeCostCurrency`                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `tagName`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallErrorType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallProvider`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallStatusCode`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallSuccess`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `toolCallType`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `trafficSource`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `transcriptInputs`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `transcriptOutputs`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `transcriptStatus`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `triggeringTag`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmCampaign`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmContent`                           | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmMedium`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmSource`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `utmTerm`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `vdcOperationOrigin`                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `videoAspectRatio`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `videoResolution`                      | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `virtualModelKind`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `virtualModelSlug`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `visitorId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `wafAction`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `wafRuleId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowEventType`                    | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowName`                         | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowRunId`                        | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowStatus`                       | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `workflowStepName`                     | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `additionalProperties`                 | Record<string, *number*>               | :heavy_minus_sign:                     | N/A                                    |