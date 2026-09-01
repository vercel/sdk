# Subscription

## Example Usage

```typescript
import { Subscription } from "@vercel/sdk/models/destinationtype.js";

let value: Subscription = {
  collections: [],
  path: "/private/tmp",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `collections`                        | *string*[]                           | :heavy_check_mark:                   | N/A                                  |
| `dids`                               | *string*[]                           | :heavy_minus_sign:                   | N/A                                  |
| `kinds`                              | [models.Kinds](../models/kinds.md)[] | :heavy_minus_sign:                   | N/A                                  |
| `path`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |