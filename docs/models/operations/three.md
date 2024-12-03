# Three

## Example Usage

```typescript
import { Three } from "@vercel/sdk/models/operations/createdeployment.js";

let value: Three = {
  projectId: 9829.90,
  ref: "<value>",
  type: "gitlab",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                          | *operations.ProjectId*                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ref`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sha`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.CreateDeploymentGitSourceType](../../models/operations/createdeploymentgitsourcetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |