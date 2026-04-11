# UpdateMicrofrontendsGroupRequestBody

## Example Usage

```typescript
import { UpdateMicrofrontendsGroupRequestBody } from "@vercel/sdk/models/updatemicrofrontendsgroupop.js";

let value: UpdateMicrofrontendsGroupRequestBody = {
  name: "MFE Group 1",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The new name for the existing microfrontends group.                                                                                                   | MFE Group 1                                                                                                                                           |
| `fallbackEnvironment`                                                                                                                                 | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The new fallback environment for the microfrontends group. Must be "SAME_ENV", "PRODUCTION", or a valid custom environment slug from the default app. |                                                                                                                                                       |