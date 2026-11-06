# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/payloadprivatemodel.js";

let value: FortyOne = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |