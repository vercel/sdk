# ListEventTypesResponse

Response returned by the List Event Types endpoint.

## Example Usage

```typescript
import { ListEventTypesResponse } from "@vercel/sdk/models/listeventtypesresponse.js";

let value: ListEventTypesResponse = {
  categories: [],
  types: [
    {
      categories: [
        "deployment",
      ],
      description: "hopelessly busy for",
      name: "project-rolling-release-approved",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `categories`                                                                               | [models.ListEventTypesResponseCategories](../models/listeventtypesresponsecategories.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `types`                                                                                    | [models.ListEventType](../models/listeventtype.md)[]                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |