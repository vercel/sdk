# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/payloadoldteam.js";

let value: NinetySix = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `edgeConfigId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `edgeConfigSlug`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `edgeConfigSchema`                                       | [models.EdgeConfigSchema](../models/edgeconfigschema.md) | :heavy_minus_sign:                                       | N/A                                                      |