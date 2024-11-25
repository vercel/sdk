# UpdateProjectLatestDeployments

## Example Usage

```typescript
import { UpdateProjectLatestDeployments } from "@vercel/sdk/models/operations/updateproject.js";

let value: UpdateProjectLatestDeployments = {
  id: "<id>",
  createdAt: 2928.89,
  createdIn: "<value>",
  creator: {
    email: "Hazle47@hotmail.com",
    uid: "<id>",
    username: "Mozelle88",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  plan: "pro",
  previewCommentsEnabled: false,
  private: false,
  readyState: "READY",
  type: "LAMBDAS",
  url: "https://scary-concentration.info",
  userId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `alias`                                                                                              | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `aliasAssigned`                                                                                      | *operations.UpdateProjectAliasAssigned*                                                              | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `aliasError`                                                                                         | [operations.UpdateProjectAliasError](../../models/operations/updateprojectaliaserror.md)             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `aliasFinal`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `automaticAliases`                                                                                   | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `branchMatcher`                                                                                      | [operations.UpdateProjectBranchMatcher](../../models/operations/updateprojectbranchmatcher.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `buildingAt`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `builds`                                                                                             | [operations.UpdateProjectBuilds](../../models/operations/updateprojectbuilds.md)[]                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `checksConclusion`                                                                                   | [operations.UpdateProjectChecksConclusion](../../models/operations/updateprojectchecksconclusion.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `checksState`                                                                                        | [operations.UpdateProjectChecksState](../../models/operations/updateprojectchecksstate.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `connectBuildsEnabled`                                                                               | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `connectConfigurationId`                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `createdIn`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `creator`                                                                                            | [operations.UpdateProjectCreator](../../models/operations/updateprojectcreator.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `deletedAt`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `deploymentHostname`                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `forced`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `meta`                                                                                               | Record<string, *string*>                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `monorepoManager`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `oidcTokenClaims`                                                                                    | [operations.UpdateProjectOidcTokenClaims](../../models/operations/updateprojectoidctokenclaims.md)   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `plan`                                                                                               | [operations.UpdateProjectPlan](../../models/operations/updateprojectplan.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `previewCommentsEnabled`                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether or not preview comments are enabled for the deployment                                       | false                                                                                                |
| `private`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `readyAt`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `readyState`                                                                                         | [operations.UpdateProjectReadyState](../../models/operations/updateprojectreadystate.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `readySubstate`                                                                                      | [operations.UpdateProjectReadySubstate](../../models/operations/updateprojectreadysubstate.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `requestedAt`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `target`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `teamId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `type`                                                                                               | [operations.UpdateProjectProjectsType](../../models/operations/updateprojectprojectstype.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `withCache`                                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |