# CreateProjectSsoProtection

The Vercel Auth setting for the project (historically named \"SSO Protection\")

## Example Usage

```typescript
import { CreateProjectSsoProtection } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectSsoProtection = {
  deploymentType: "all",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `deploymentType`                                                               | [models.CreateProjectDeploymentType](../models/createprojectdeploymenttype.md) | :heavy_check_mark:                                                             | N/A                                                                            |