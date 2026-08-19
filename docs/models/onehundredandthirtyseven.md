# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/onehundredandthirtyseven.js";

let value: OneHundredAndThirtySeven = {
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