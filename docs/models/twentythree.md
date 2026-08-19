# TwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyThree } from "@vercel/sdk/models/eighteen.js";

let value: TwentyThree = {
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