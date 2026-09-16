# GetAliasApplications2

A list of the deployment routing information for each project.

## Example Usage

```typescript
import { GetAliasApplications2 } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasApplications2 = {
  branchAlias: "<value>",
  fallbackHost: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `branchAlias`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Could point to a branch without a deployment if the project was never deployed. The proxy will fallback to the fallbackHost if there is no deployment. |
| `fallbackHost`                                                                                                                                         | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | This is always set. For branch aliases, it's used as the fallback if there is no deployment for the branch.                                            |
| `projectId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The project ID of the microfrontends application.                                                                                                      |