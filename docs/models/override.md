# Override

## Example Usage

```typescript
import { Override } from "@vercel/sdk/models/patchaliasesidprotectionbypassop.js";

let value: Override = {
  scope: "alias-protection-override",
  action: "revoke",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                | [models.RequestBodyScope](../models/requestbodyscope.md)                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [models.PatchAliasesIdProtectionBypassRequestBodyAction](../models/patchaliasesidprotectionbypassrequestbodyaction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |