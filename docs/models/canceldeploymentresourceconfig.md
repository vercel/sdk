# CancelDeploymentResourceConfig

## Example Usage

```typescript
import { CancelDeploymentResourceConfig } from "@vercel/sdk/models/canceldeploymentservicesdeploymentsmaxduration.js";

let value: CancelDeploymentResourceConfig = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buildMachine`                                                                                                                                                                                 | [models.CancelDeploymentBuildMachine](../models/canceldeploymentbuildmachine.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                             | Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`. |