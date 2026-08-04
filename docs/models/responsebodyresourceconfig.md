# ResponseBodyResourceConfig

## Example Usage

```typescript
import { ResponseBodyResourceConfig } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: ResponseBodyResourceConfig = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buildMachine`                                                                                                                                                                                 | [models.ResponseBodyBuildMachine](../models/responsebodybuildmachine.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`. |