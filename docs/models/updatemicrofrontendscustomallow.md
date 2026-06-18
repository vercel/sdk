# UpdateMicrofrontendsCustomAllow

Optional overrides for the default same-env-by-slug matching. Provide explicit rules to allow cross-env access or presets.

## Example Usage

```typescript
import { UpdateMicrofrontendsCustomAllow } from "@vercel/sdk/models/updatemicrofrontendsvercelruleset.js";

let value: UpdateMicrofrontendsCustomAllow = {
  from: {
    preset: "all-custom",
  },
  to: {
    slugs: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `from`                                  | *models.UpdateMicrofrontendsFrom*       | :heavy_check_mark:                      | N/A                                     |
| `to`                                    | *models.UpdateMicrofrontendsProjectsTo* | :heavy_check_mark:                      | N/A                                     |