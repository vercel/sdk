# TwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySeven } from "@vercel/sdk/models/userevent.js";

let value: TwentySeven = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |