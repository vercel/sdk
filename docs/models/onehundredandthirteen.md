# OneHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirteen = {
  storeType: "redis",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `storeType`                                | [models.StoreType](../models/storetype.md) | :heavy_check_mark:                         | N/A                                        |