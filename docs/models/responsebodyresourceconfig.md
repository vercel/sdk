# ResponseBodyResourceConfig

## Example Usage

```typescript
import { ResponseBodyResourceConfig } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2services2redirectsmissing2.js";

let value: ResponseBodyResourceConfig = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buildMachine`                                                                                                                                                                                 | [models.CreateDeploymentResponseBodyBuildMachine](../models/createdeploymentresponsebodybuildmachine.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`. |