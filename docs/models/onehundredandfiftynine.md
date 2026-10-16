# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndFiftyNine = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `edgeConfigId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `edgeConfigSchema`                                       | [models.EdgeConfigSchema](../models/edgeconfigschema.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `edgeConfigSlug`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |