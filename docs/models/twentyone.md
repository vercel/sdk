# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/userevent.js";

let value: TwentyOne = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |