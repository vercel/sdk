# UpdateMicrofrontendsHas1

## Example Usage

```typescript
import { UpdateMicrofrontendsHas1 } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *"header"*                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `key`                                                                            | [models.UpdateMicrofrontendsHasKey](../models/updatemicrofrontendshaskey.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | [models.UpdateMicrofrontendsHasValue](../models/updatemicrofrontendshasvalue.md) | :heavy_check_mark:                                                               | N/A                                                                              |