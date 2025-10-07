# PropertyKey3

an object to be decoded into a globally shared symbol

## Example Usage

```typescript
import { PropertyKey3 } from "@vercel/sdk/models/propertykey.js";

let value: PropertyKey3 = {
  tag: "symbol",
  key: "<key>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `tag`                                                | [models.PropertyKeyTag](../models/propertykeytag.md) | :heavy_check_mark:                                   | N/A                                                  |
| `key`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |