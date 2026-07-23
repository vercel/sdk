# CreateDeploymentFlags1

Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.

## Example Usage

```typescript
import { CreateDeploymentFlags1 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentFlags1 = {
  definitions: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `definitions`                                                                                            | Record<string, [models.CreateDeploymentFlagsDefinitions](../models/createdeploymentflagsdefinitions.md)> | :heavy_check_mark:                                                                                       | N/A                                                                                                      |