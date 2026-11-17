# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: FortyFour = {
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