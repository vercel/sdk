# ListAliasesApplications2

A list of the deployment routing information for each project.

## Example Usage

```typescript
import { ListAliasesApplications2 } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesApplications2 = {
  fallbackHost: "<value>",
  branchAlias: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fallbackHost`                                                                                                                                         | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | This is always set. For branch aliases, it's used as the fallback if there is no deployment for the branch.                                            |
| `branchAlias`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Could point to a branch without a deployment if the project was never deployed. The proxy will fallback to the fallbackHost if there is no deployment. |
| `projectId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The project ID of the microfrontends application.                                                                                                      |