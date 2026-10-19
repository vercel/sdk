# UpdateOrganizationRequestBody

## Example Usage

```typescript
import { UpdateOrganizationRequestBody } from "@vercel/sdk/models/updateorganizationop.js";

let value: UpdateOrganizationRequestBody = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `avatar`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The hash value of an uploaded image, or `null` to clear the organization avatar. Omit to leave it unchanged. |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The new display name for the organization.                                                                   |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The new slug for the organization.                                                                           |