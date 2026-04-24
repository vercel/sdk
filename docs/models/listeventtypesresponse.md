# ListEventTypesResponse

Response returned by the List Event Types endpoint.

## Example Usage

```typescript
import { ListEventTypesResponse } from "@vercel/sdk/models/listeventtypesresponse.js";

let value: ListEventTypesResponse = {
  types: [],
  categories: [
    {
      name: "account",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `types`                                                                                    | [models.ListEventType](../models/listeventtype.md)[]                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `categories`                                                                               | [models.ListEventTypesResponseCategories](../models/listeventtypesresponsecategories.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |