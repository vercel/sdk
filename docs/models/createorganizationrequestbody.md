# CreateOrganizationRequestBody

## Example Usage

```typescript
import { CreateOrganizationRequestBody } from "@vercel/sdk/models/createorganizationop.js";

let value: CreateOrganizationRequestBody = {
  slug: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `slug`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The desired slug for the organization.                                          |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The desired name for the organization. Generated from the slug if not provided. |