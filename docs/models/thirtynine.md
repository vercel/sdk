# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/userevent.js";

let value: ThirtyNine = {
  privateModel: {
    providerSlug: "<value>",
    slug: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `privateModel`                                   | [models.PrivateModel](../models/privatemodel.md) | :heavy_check_mark:                               | N/A                                              |