# UpdateMicrofrontendsHas1

## Example Usage

```typescript
import { UpdateMicrofrontendsHas1 } from "@vercel/sdk/models/updatemicrofrontendsfrompreset.js";

let value: UpdateMicrofrontendsHas1 = {
  key: "x-vercel-ip-country",
  type: "header",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | [models.UpdateMicrofrontendsHasKey](../models/updatemicrofrontendshaskey.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | *"header"*                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | [models.UpdateMicrofrontendsHasValue](../models/updatemicrofrontendshasvalue.md) | :heavy_check_mark:                                                               | N/A                                                                              |