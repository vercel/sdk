# RequestBodyRevoke

Optional instructions for revoking and regenerating a shareable link

## Example Usage

```typescript
import { RequestBodyRevoke } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: RequestBodyRevoke = {
  secret: "<value>",
  regenerate: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `secret`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | Sharebale link to revoked                                                                  |
| `regenerate`                                                                               | *boolean*                                                                                  | :heavy_check_mark:                                                                         | Whether or not a new shareable link should be created after the provided secret is revoked |