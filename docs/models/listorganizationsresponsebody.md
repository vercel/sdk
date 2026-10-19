# ListOrganizationsResponseBody

## Example Usage

```typescript
import { ListOrganizationsResponseBody } from "@vercel/sdk/models/listorganizationsop.js";

let value: ListOrganizationsResponseBody = {
  organizations: [
    {
      avatar: "https://picsum.photos/seed/z4oCL/3461/3177",
      createdAt: "1711416668904",
      organizationId: "<id>",
      ownerId: "<id>",
      slug: "<value>",
      teamCount: 1770.76,
      teamId: "<id>",
      updatedAt: "1735624453044",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `organizations`                                    | [models.Organization](../models/organization.md)[] | :heavy_check_mark:                                 | N/A                                                |