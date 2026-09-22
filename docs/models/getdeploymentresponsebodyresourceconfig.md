# GetDeploymentResponseBodyResourceConfig

## Example Usage

```typescript
import { GetDeploymentResponseBodyResourceConfig } from "@vercel/sdk/models/getdeploymentservicesdeploymentsmiddlewarematcher.js";

let value: GetDeploymentResponseBodyResourceConfig = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buildMachine`                                                                                                                                                                                 | [models.ResponseBodyBuildMachine](../models/responsebodybuildmachine.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                             | Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`. |