# OneHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyThree } from "@vercel/sdk/models/configuration.js";

let value: OneHundredAndTwentyThree = {
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