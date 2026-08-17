# OneHundredAndThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFour } from "@vercel/sdk/models/onehundredandthirtyone.js";

let value: OneHundredAndThirtyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `edgeConfigId`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `edgeConfigSlug`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `globalConfigSchema`                                         | [models.GlobalConfigSchema](../models/globalconfigschema.md) | :heavy_minus_sign:                                           | N/A                                                          |