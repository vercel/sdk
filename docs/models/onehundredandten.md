# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTen = {
  storeType: "redis",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `storeType`                                | [models.StoreType](../models/storetype.md) | :heavy_check_mark:                         | N/A                                        |