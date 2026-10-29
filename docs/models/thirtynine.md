# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: ThirtyNine = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |