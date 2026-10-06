# EjectManagedConnectorRequest

## Example Usage

```typescript
import { EjectManagedConnectorRequest } from "@vercel/sdk/models/ejectmanagedconnectorop.js";

let value: EjectManagedConnectorRequest = {
  connector: "<value>",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `connector`                                         | *string*                                            | :heavy_check_mark:                                  | Stable connector ID or URL-encoded team-scoped UID. |                                                     |
| `slug`                                              | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 | my-team-url-slug                                    |