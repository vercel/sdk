# GetProjectsProjects

## Example Usage

```typescript
import { GetProjectsProjects } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsProjects = {
  accountId: "<id>",
  crons: {
    enabledAt: 8873.52,
    disabledAt: 166.14,
    updatedAt: 4201.43,
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
      createdAt: 8274.11,
      createdIn: "<value>",
      creator: {
        email: "Kenna.Mayert@yahoo.com",
        uid: "<id>",
        username: "Lea99",
      },
      deploymentHostname: "<value>",
      name: "<value>",
      plan: "enterprise",
      previewCommentsEnabled: false,
      private: false,
      readyState: "ERROR",
      type: "LAMBDAS",
      url: "https://variable-bidet.name/",
      userId: "<id>",
    },
  ],
  name: "<value>",
  nodeVersion: "22.x",
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
      createdAt: 6622.19,
      createdIn: "<value>",
      creator: {
        email: "Stephon2@hotmail.com",
        uid: "<id>",
        username: "Brendan.Frami",
      },
      deploymentHostname: "<value>",
      name: "<value>",
      plan: "enterprise",
      previewCommentsEnabled: false,
      private: false,
      readyState: "INITIALIZING",
      type: "LAMBDAS",
      url: "https://animated-bump.com/",
      userId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `analytics`                                                                              | [models.GetProjectsAnalytics](../models/getprojectsanalytics.md)                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `speedInsights`                                                                          | [models.GetProjectsSpeedInsights](../models/getprojectsspeedinsights.md)                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `autoExposeSystemEnvs`                                                                   | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `autoAssignCustomDomains`                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `autoAssignCustomDomainsUpdatedBy`                                                       | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `buildCommand`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `commandForIgnoringBuildStep`                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `connectConfigurationId`                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `connectBuildsEnabled`                                                                   | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customerSupportCodeVisibility`                                                          | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `crons`                                                                                  | [models.GetProjectsCrons](../models/getprojectscrons.md)                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `dataCache`                                                                              | [models.GetProjectsDataCache](../models/getprojectsdatacache.md)                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `deploymentExpiration`                                                                   | [models.GetProjectsDeploymentExpiration](../models/getprojectsdeploymentexpiration.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `devCommand`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `directoryListing`                                                                       | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `installCommand`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `env`                                                                                    | [models.GetProjectsEnv](../models/getprojectsenv.md)[]                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customEnvironments`                                                                     | [models.GetProjectsCustomEnvironments](../models/getprojectscustomenvironments.md)[]     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `framework`                                                                              | [models.GetProjectsFramework](../models/getprojectsframework.md)                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `gitForkProtection`                                                                      | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `gitLFS`                                                                                 | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ipBuckets`                                                                              | [models.GetProjectsIpBuckets](../models/getprojectsipbuckets.md)[]                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `latestDeployments`                                                                      | [models.GetProjectsLatestDeployments](../models/getprojectslatestdeployments.md)[]       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `link`                                                                                   | *models.GetProjectsLink*                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `microfrontends`                                                                         | *models.GetProjectsMicrofrontends*                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `nodeVersion`                                                                            | [models.GetProjectsNodeVersion](../models/getprojectsnodeversion.md)                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `optionsAllowlist`                                                                       | [models.GetProjectsOptionsAllowlist](../models/getprojectsoptionsallowlist.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `outputDirectory`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `passiveConnectConfigurationId`                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `passwordProtection`                                                                     | [models.GetProjectsPasswordProtection](../models/getprojectspasswordprotection.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `productionDeploymentsFastLane`                                                          | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `publicSource`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `resourceConfig`                                                                         | [models.GetProjectsResourceConfig](../models/getprojectsresourceconfig.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rollingRelease`                                                                         | [models.GetProjectsRollingRelease](../models/getprojectsrollingrelease.md)               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `defaultResourceConfig`                                                                  | [models.GetProjectsDefaultResourceConfig](../models/getprojectsdefaultresourceconfig.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rootDirectory`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `serverlessFunctionRegion`                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `serverlessFunctionZeroConfigFailover`                                                   | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `skewProtectionBoundaryAt`                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `skewProtectionMaxAge`                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `skipGitConnectDuringLink`                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sourceFilesOutsideRootDirectory`                                                        | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enableAffectedProjectsDeployments`                                                      | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `ssoProtection`                                                                          | [models.GetProjectsSsoProtection](../models/getprojectsssoprotection.md)                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targets`                                                                                | Record<string, [models.GetProjectsTargets](../models/getprojectstargets.md)>             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `transferCompletedAt`                                                                    | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `transferStartedAt`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `transferToAccountId`                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `transferredFromAccountId`                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `live`                                                                                   | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enablePreviewFeedback`                                                                  | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enableProductionFeedback`                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `permissions`                                                                            | [models.GetProjectsPermissions](../models/getprojectspermissions.md)                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lastRollbackTarget`                                                                     | [models.GetProjectsLastRollbackTarget](../models/getprojectslastrollbacktarget.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lastAliasRequest`                                                                       | [models.GetProjectsLastAliasRequest](../models/getprojectslastaliasrequest.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `protectionBypass`                                                                       | Record<string, *models.GetProjectsProtectionBypass*>                                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `hasActiveBranches`                                                                      | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `trustedIps`                                                                             | *models.GetProjectsTrustedIps*                                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `gitComments`                                                                            | [models.GetProjectsGitComments](../models/getprojectsgitcomments.md)                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `gitProviderOptions`                                                                     | [models.GetProjectsGitProviderOptions](../models/getprojectsgitprovideroptions.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `paused`                                                                                 | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `concurrencyBucketName`                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `webAnalytics`                                                                           | [models.GetProjectsWebAnalytics](../models/getprojectswebanalytics.md)                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `security`                                                                               | [models.GetProjectsSecurity](../models/getprojectssecurity.md)                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oidcTokenConfig`                                                                        | [models.GetProjectsOidcTokenConfig](../models/getprojectsoidctokenconfig.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `tier`                                                                                   | [models.GetProjectsTier](../models/getprojectstier.md)                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |