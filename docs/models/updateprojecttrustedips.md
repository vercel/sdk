# UpdateProjectTrustedIps

Restricts access to deployments based on the incoming request IP address

## Example Usage

```typescript
import { UpdateProjectTrustedIps } from "@vercel/sdk/models/updateprojectsourcesprojectsresponse200provider.js";

let value: UpdateProjectTrustedIps = {
  deploymentType: "production",
  addresses: [],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                                                   | [models.UpdateProjectProjectsRequestRequestBodyDeploymentType](../models/updateprojectprojectsrequestrequestbodydeploymenttype.md) | :heavy_check_mark:                                                                                                                 | Specify if the Trusted IPs will apply to every Deployment Target or just Preview                                                   |
| `addresses`                                                                                                                        | [models.Addresses](../models/addresses.md)[]                                                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |