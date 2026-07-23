# Seventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventeen } from "@vercel/sdk/models/userevent.js";

let value: Seventeen = {
  privateModel: {
    slug: "<value>",
    providerSlug: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `privateModel`                                   | [models.PrivateModel](../models/privatemodel.md) | :heavy_check_mark:                               | N/A                                              |