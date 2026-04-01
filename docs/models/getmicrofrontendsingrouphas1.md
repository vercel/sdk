# GetMicrofrontendsInGroupHas1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupHas1 } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"header"*                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `key`                                                                                    | [models.GetMicrofrontendsInGroupHasKey](../models/getmicrofrontendsingrouphaskey.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `value`                                                                                  | [models.GetMicrofrontendsInGroupHasValue](../models/getmicrofrontendsingrouphasvalue.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |