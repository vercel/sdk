# ThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyThree } from "@vercel/sdk/models/via3.js";

let value: ThirtyThree = {
  privateProvider: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `privateProvider`                                      | [models.PrivateProvider](../models/privateprovider.md) | :heavy_check_mark:                                     | N/A                                                    |