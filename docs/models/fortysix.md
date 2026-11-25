# FortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySix } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FortySix = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |