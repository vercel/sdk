# CreateProjectResponseBody

The project was successfuly created

## Example Usage

```typescript
import { CreateProjectResponseBody } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectResponseBody = {
  accountId: "<id>",
  crons: {
    enabledAt: 412.28,
    disabledAt: 9363.32,
    updatedAt: 3678.9,
    deploymentId: "<id>",
    definitions: [
      {
        host: "vercel.com",
        path: "/api/crons/sync-something?hello=world",
        schedule: "0 0 * * *",
      },
    ],
  },
  directoryListing: false,
  id: "<id>",
  latestDeployments: [
    {
      id: "<id>",
      createdAt: 5714.95,
      createdIn: "<value>",
      creator: {
        email: "Evans.Considine98@hotmail.com",
        uid: "<id>",
        username: "Jesus_Hirthe35",
      },
      deploymentHostname: "<value>",
      name: "<value>",
      plan: "enterprise",
      previewCommentsEnabled: false,
      private: false,
      readyState: "QUEUED",
      type: "LAMBDAS",
      url: "https://jam-packed-technologist.com",
      userId: "<id>",
    },
  ],
  name: "<value>",
  nodeVersion: "16.x",
  resourceConfig: {
    functionDefaultRegions: [
      "<value>",
    ],
  },
  defaultResourceConfig: {
    functionDefaultRegions: [
      "<value>",
    ],
  },
  targets: {
    "key": {
      id: "<id>",
      createdAt: 2968.63,
      createdIn: "<value>",
      creator: {
        email: "Alfreda_Botsford@yahoo.com",
        uid: "<id>",
        username: "Vern_Krajcik44",
      },
      deploymentHostname: "<value>",
      name: "<value>",
      plan: "enterprise",
      previewCommentsEnabled: false,
      private: false,
      readyState: "INITIALIZING",
      type: "LAMBDAS",
      url: "https://colossal-iridescence.biz/",
      userId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `analytics`                                                                                    | [models.CreateProjectAnalytics](../models/createprojectanalytics.md)                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `speedInsights`                                                                                | [models.CreateProjectSpeedInsights](../models/createprojectspeedinsights.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `autoExposeSystemEnvs`                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `autoAssignCustomDomains`                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `autoAssignCustomDomainsUpdatedBy`                                                             | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `buildCommand`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `commandForIgnoringBuildStep`                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `connectConfigurationId`                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `connectBuildsEnabled`                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `customerSupportCodeVisibility`                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `crons`                                                                                        | [models.CreateProjectCrons](../models/createprojectcrons.md)                                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `dataCache`                                                                                    | [models.CreateProjectDataCache](../models/createprojectdatacache.md)                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `deploymentExpiration`                                                                         | [models.CreateProjectDeploymentExpiration](../models/createprojectdeploymentexpiration.md)     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `devCommand`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `directoryListing`                                                                             | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `installCommand`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `env`                                                                                          | [models.CreateProjectEnv](../models/createprojectenv.md)[]                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `customEnvironments`                                                                           | [models.CreateProjectCustomEnvironments](../models/createprojectcustomenvironments.md)[]       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `framework`                                                                                    | [models.CreateProjectProjectsFramework](../models/createprojectprojectsframework.md)           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `gitForkProtection`                                                                            | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `gitLFS`                                                                                       | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `ipBuckets`                                                                                    | [models.CreateProjectIpBuckets](../models/createprojectipbuckets.md)[]                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `latestDeployments`                                                                            | [models.CreateProjectLatestDeployments](../models/createprojectlatestdeployments.md)[]         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `link`                                                                                         | *models.CreateProjectLink*                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `microfrontends`                                                                               | *models.CreateProjectMicrofrontends*                                                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `nodeVersion`                                                                                  | [models.CreateProjectNodeVersion](../models/createprojectnodeversion.md)                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `optionsAllowlist`                                                                             | [models.CreateProjectOptionsAllowlist](../models/createprojectoptionsallowlist.md)             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `outputDirectory`                                                                              | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `passiveConnectConfigurationId`                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `passwordProtection`                                                                           | [models.CreateProjectPasswordProtection](../models/createprojectpasswordprotection.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `productionDeploymentsFastLane`                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `publicSource`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `resourceConfig`                                                                               | [models.CreateProjectProjectsResourceConfig](../models/createprojectprojectsresourceconfig.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rollingRelease`                                                                               | [models.CreateProjectRollingRelease](../models/createprojectrollingrelease.md)                 | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `defaultResourceConfig`                                                                        | [models.CreateProjectDefaultResourceConfig](../models/createprojectdefaultresourceconfig.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rootDirectory`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `serverlessFunctionRegion`                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `serverlessFunctionZeroConfigFailover`                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `skewProtectionBoundaryAt`                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `skewProtectionMaxAge`                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `skipGitConnectDuringLink`                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `sourceFilesOutsideRootDirectory`                                                              | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `enableAffectedProjectsDeployments`                                                            | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ssoProtection`                                                                                | [models.CreateProjectSsoProtection](../models/createprojectssoprotection.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `targets`                                                                                      | Record<string, [models.CreateProjectTargets](../models/createprojecttargets.md)>               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `transferCompletedAt`                                                                          | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `transferStartedAt`                                                                            | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `transferToAccountId`                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `transferredFromAccountId`                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `live`                                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `enablePreviewFeedback`                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `enableProductionFeedback`                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `permissions`                                                                                  | [models.CreateProjectPermissions](../models/createprojectpermissions.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastRollbackTarget`                                                                           | [models.CreateProjectLastRollbackTarget](../models/createprojectlastrollbacktarget.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastAliasRequest`                                                                             | [models.CreateProjectLastAliasRequest](../models/createprojectlastaliasrequest.md)             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `protectionBypass`                                                                             | Record<string, *models.CreateProjectProtectionBypass*>                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `hasActiveBranches`                                                                            | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `trustedIps`                                                                                   | *models.CreateProjectTrustedIps*                                                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `gitComments`                                                                                  | [models.CreateProjectGitComments](../models/createprojectgitcomments.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `gitProviderOptions`                                                                           | [models.CreateProjectGitProviderOptions](../models/createprojectgitprovideroptions.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `paused`                                                                                       | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `concurrencyBucketName`                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `webAnalytics`                                                                                 | [models.CreateProjectWebAnalytics](../models/createprojectwebanalytics.md)                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `security`                                                                                     | [models.CreateProjectSecurity](../models/createprojectsecurity.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `oidcTokenConfig`                                                                              | [models.CreateProjectOidcTokenConfig](../models/createprojectoidctokenconfig.md)               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `tier`                                                                                         | [models.CreateProjectTier](../models/createprojecttier.md)                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |