# CancelDeploymentFlags1

Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.

## Example Usage

```typescript
import { CancelDeploymentFlags1 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentFlags1 = {
  definitions: {
    "key": {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `definitions`                                                            | Record<string, [models.FlagsDefinitions](../models/flagsdefinitions.md)> | :heavy_check_mark:                                                       | N/A                                                                      |