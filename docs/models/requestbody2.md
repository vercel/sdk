# RequestBody2

## Example Usage

```typescript
import { RequestBody2 } from "@vercel/sdk/models/patchaliasesidprotectionbypassop.js";

let value: RequestBody2 = {
  scope: {
    userId: "<id>",
    access: "granted",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `scope`                                                   | *models.Scope*                                            | :heavy_check_mark:                                        | Instructions for creating a user scoped protection bypass |